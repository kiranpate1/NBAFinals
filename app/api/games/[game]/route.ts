import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

type PlayEntry = {
  time: string;
  quarter: string;
  team: "NYK" | "SAS";
  player: string;
  play: string;
  result: "made" | "miss" | "other";
  assist: string;
  points: number;
  rebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  turnovers: number;
  fouls: number;
};

const parseCsvLine = (line: string): string[] => {
  const values: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];

    if (char === '"') {
      const next = line[i + 1];
      if (inQuotes && next === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      values.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current);
  return values;
};

const toDisplayPlayer = (player: string) => {
  if (!player) return "Unknown";
  if (player === "KNICKS") return "Team Knicks";
  if (player === "SPURS") return "Team Spurs";
  if (player === "HAWKS") return "Team Hawks";
  if (player === "SIXERS" || player === "76ERS") return "Team 76ers";
  if (player === "CAVALIERS") return "Team Cavaliers";
  return player;
};

const isShotPlay = (play: string) =>
  /\b(shot|jumper|jump shot|layup|dunk|hook|free throw)\b/i.test(play);

const toShotResult = (play: string): "made" | "miss" | "other" => {
  if (!isShotPlay(play)) return "other";
  if (/^MISS\b/.test(play)) return "miss";
  return "made";
};

const toQuarterLabel = (quarterValue: string) => {
  const quarterNum = Number.parseInt(quarterValue, 10);
  if (!Number.isFinite(quarterNum)) return quarterValue;
  if (quarterNum <= 4) return `Q${quarterNum}`;
  return `OT${quarterNum - 4}`;
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ game: string }> },
) {
  const { game } = await params;
  const rawId = game.trim().toLowerCase();

  const csvFileById = (() => {
    // Backward compatibility: /api/games/1 resolves to finals game 1.
    if (/^\d+$/.test(rawId)) {
      const gameNumber = Number.parseInt(rawId, 10);
      if (Number.isFinite(gameNumber) && gameNumber >= 1 && gameNumber <= 7) {
        return `fg${gameNumber}.compiled.csv`;
      }
      return null;
    }

    if (/^fg[1-7]$/.test(rawId)) {
      return `${rawId}.compiled.csv`;
    }

    const roundMatch = rawId.match(/^r([1-3])g([1-7])$/);
    if (!roundMatch) return null;

    const round = Number.parseInt(roundMatch[1], 10);
    const gameNumber = Number.parseInt(roundMatch[2], 10);
    const maxGameByRound = { 1: 6, 2: 4, 3: 4 } as const;
    if (gameNumber > maxGameByRound[round as 1 | 2 | 3]) return null;

    return `r${round}g${gameNumber}.compiled.csv`;
  })();

  if (!csvFileById) {
    return NextResponse.json({ error: "Invalid game id" }, { status: 400 });
  }

  const csvPath = path.join(process.cwd(), "app", "info", csvFileById);

  try {
    const csvText = await fs.readFile(csvPath, "utf8");
    const lines = csvText
      .split(/\r?\n/)
      .filter((line) => line.trim().length > 0);
    const dataLines = lines.slice(1);

    const plays: PlayEntry[] = [];

    for (const line of dataLines) {
      const row = parseCsvLine(line);
      if (row.length < 15) continue;

      const time = row[0];
      const quarterNum = row[1];
      const teamRaw = row[2];
      const playerRaw = row[3];
      const play = row[4];
      const assistRaw = row[7];

      const team = teamRaw === "KNICKS" ? "NYK" : "SAS";

      plays.push({
        time,
        quarter: toQuarterLabel(quarterNum),
        team,
        player: toDisplayPlayer(playerRaw),
        play,
        result: toShotResult(play),
        assist: assistRaw,
        points: Number.parseInt(row[8], 10) || 0,
        rebounds: Number.parseInt(row[9], 10) || 0,
        assists: Number.parseInt(row[10], 10) || 0,
        steals: Number.parseInt(row[11], 10) || 0,
        blocks: Number.parseInt(row[12], 10) || 0,
        turnovers: Number.parseInt(row[13], 10) || 0,
        fouls: Number.parseInt(row[14], 10) || 0,
      });
    }

    return NextResponse.json(plays);
  } catch {
    return NextResponse.json({ error: "Game log not found" }, { status: 404 });
  }
}
