"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import SplashCourt from "./components/SplashCourt";
import Court from "./components/Court";
import GameGrid from "./components/GameGrid";
import SeriesCard from "./components/SeriesCard";
import GameCard from "./components/GameCard";
import GameRecap from "./components/GameRecap";
import GameScoreboard from "./components/GameScoreboard";
import {
  knicksPlayers,
  spursPlayers,
  cavaliersPlayers,
  sixersPlayers,
  hawksPlayers,
} from "./info/players";
import FGame1_SAS from "./graphics/finals/game1/Game1_SAS";
import FGame1_NYK from "./graphics/finals/game1/Game1_NYK";
import FGame2_SAS from "./graphics/finals/game2/Game2_SAS";
import FGame2_NYK from "./graphics/finals/game2/Game2_NYK";
import FGame3_SAS from "./graphics/finals/game3/Game3_SAS";
import FGame3_NYK from "./graphics/finals/game3/Game3_NYK";
import FGame4_SAS from "./graphics/finals/game4/Game4_SAS";
import FGame4_NYK from "./graphics/finals/game4/Game4_NYK";
import FGame5_SAS from "./graphics/finals/game5/Game5_SAS";
import FGame5_NYK from "./graphics/finals/game5/Game5_NYK";
import FGame1Spread from "./graphics/finals/game1/Game1Spread";
import FGame2Spread from "./graphics/finals/game2/Game2Spread";
import FGame3Spread from "./graphics/finals/game3/Game3Spread";
import FGame4Spread from "./graphics/finals/game4/Game4Spread";
import FGame5Spread from "./graphics/finals/game5/Game5Spread";
import R1Game1_ATL from "./graphics/round1/game1/Game1_ATL";
import R1Game1_NYK from "./graphics/round1/game1/Game1_NYK";
import R1Game1Spread from "./graphics/round1/game1/Game1Spread";
import R1Game2_ATL from "./graphics/round1/game2/Game2_ATL";
import R1Game2_NYK from "./graphics/round1/game2/Game2_NYK";
import R1Game2Spread from "./graphics/round1/game2/Game2Spread";
import R1Game3_ATL from "./graphics/round1/game3/Game3_ATL";
import R1Game3_NYK from "./graphics/round1/game3/Game3_NYK";
import R1Game3Spread from "./graphics/round1/game3/Game3Spread";
import R1Game4_ATL from "./graphics/round1/game4/Game4_ATL";
import R1Game4_NYK from "./graphics/round1/game4/Game4_NYK";
import R1Game4Spread from "./graphics/round1/game4/Game4Spread";
import R1Game5_ATL from "./graphics/round1/game5/Game5_ATL";
import R1Game5_NYK from "./graphics/round1/game5/Game5_NYK";
import R1Game5Spread from "./graphics/round1/game5/Game5Spread";
import R1Game6_ATL from "./graphics/round1/game6/Game6_ATL";
import R1Game6_NYK from "./graphics/round1/game6/Game6_NYK";
import R1Game6Spread from "./graphics/round1/game6/Game6Spread";
import R2Game1_PHI from "./graphics/round2/game1/Game1_PHI";
import R2Game1_NYK from "./graphics/round2/game1/Game1_NYK";
import R2Game1Spread from "./graphics/round2/game1/Game1Spread";
import R2Game2_PHI from "./graphics/round2/game2/Game2_PHI";
import R2Game2_NYK from "./graphics/round2/game2/Game2_NYK";
import R2Game2Spread from "./graphics/round2/game2/Game2Spread";
import R2Game3_PHI from "./graphics/round2/game3/Game3_PHI";
import R2Game3_NYK from "./graphics/round2/game3/Game3_NYK";
import R2Game3Spread from "./graphics/round2/game3/Game3Spread";
import R2Game4_PHI from "./graphics/round2/game4/Game4_PHI";
import R2Game4_NYK from "./graphics/round2/game4/Game4_NYK";
import R2Game4Spread from "./graphics/round2/game4/Game4Spread";
import R3Game1_CLE from "./graphics/round3/game1/Game1_CLE";
import R3Game1_NYK from "./graphics/round3/game1/Game1_NYK";
import R3Game1Spread from "./graphics/round3/game1/Game1Spread";
import R3Game2_CLE from "./graphics/round3/game2/Game2_CLE";
import R3Game2_NYK from "./graphics/round3/game2/Game2_NYK";
import R3Game2Spread from "./graphics/round3/game2/Game2Spread";
import R3Game3_CLE from "./graphics/round3/game3/Game3_CLE";
import R3Game3_NYK from "./graphics/round3/game3/Game3_NYK";
import R3Game3Spread from "./graphics/round3/game3/Game3Spread";
import R3Game4_CLE from "./graphics/round3/game4/Game4_CLE";
import R3Game4_NYK from "./graphics/round3/game4/Game4_NYK";
import R3Game4Spread from "./graphics/round3/game4/Game4Spread";
import { games, rounds, type RoundMeta } from "./info/games";
import BoxScore from "./components/BoxScore";
import Highlight from "./components/Highlight";
import NavGameCard from "./components/NavGameCard";

type CourtGraphicComponent = React.ComponentType;
type SpreadGraphicComponent = React.ComponentType<{ spread: number }>;

const roundVisuals: Record<
  RoundMeta["id"],
  Array<{
    sasCourt: CourtGraphicComponent;
    nykCourt: CourtGraphicComponent;
    spread: SpreadGraphicComponent;
  }>
> = {
  round1: [
    { sasCourt: R1Game1_ATL, nykCourt: R1Game1_NYK, spread: R1Game1Spread },
    { sasCourt: R1Game2_ATL, nykCourt: R1Game2_NYK, spread: R1Game2Spread },
    { sasCourt: R1Game3_ATL, nykCourt: R1Game3_NYK, spread: R1Game3Spread },
    { sasCourt: R1Game4_ATL, nykCourt: R1Game4_NYK, spread: R1Game4Spread },
    { sasCourt: R1Game5_ATL, nykCourt: R1Game5_NYK, spread: R1Game5Spread },
    { sasCourt: R1Game6_ATL, nykCourt: R1Game6_NYK, spread: R1Game6Spread },
  ],
  round2: [
    { sasCourt: R2Game1_PHI, nykCourt: R2Game1_NYK, spread: R2Game1Spread },
    { sasCourt: R2Game2_PHI, nykCourt: R2Game2_NYK, spread: R2Game2Spread },
    { sasCourt: R2Game3_PHI, nykCourt: R2Game3_NYK, spread: R2Game3Spread },
    { sasCourt: R2Game4_PHI, nykCourt: R2Game4_NYK, spread: R2Game4Spread },
  ],
  round3: [
    { sasCourt: R3Game1_CLE, nykCourt: R3Game1_NYK, spread: R3Game1Spread },
    { sasCourt: R3Game2_CLE, nykCourt: R3Game2_NYK, spread: R3Game2Spread },
    { sasCourt: R3Game3_CLE, nykCourt: R3Game3_NYK, spread: R3Game3Spread },
    { sasCourt: R3Game4_CLE, nykCourt: R3Game4_NYK, spread: R3Game4Spread },
  ],
  finals: [
    { sasCourt: FGame1_SAS, nykCourt: FGame1_NYK, spread: FGame1Spread },
    { sasCourt: FGame2_SAS, nykCourt: FGame2_NYK, spread: FGame2Spread },
    { sasCourt: FGame3_SAS, nykCourt: FGame3_NYK, spread: FGame3Spread },
    { sasCourt: FGame4_SAS, nykCourt: FGame4_NYK, spread: FGame4Spread },
    { sasCourt: FGame5_SAS, nykCourt: FGame5_NYK, spread: FGame5Spread },
  ],
};

const gameVisuals = rounds.flatMap((round) => roundVisuals[round.id]);

type PlayEntry = {
  time: string;
  quarter: string;
  team: "NYK" | "OPP";
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

type PlayerStats = {
  pts: number;
  fgMade: number;
  fgAtt: number;
  reb: number;
  ast: number;
  threePtMade: number;
  threePtAtt: number;
  stl: number;
  blk: number;
};

type TeamStats = Record<string, PlayerStats>;
type TeamScore = { NYK: number; OPP: number };

type HighlightInfo = {
  team: "NYK" | "OPP";
  teamLabel: string;
  player: {
    name: string;
    position: string;
    number: number;
    imageUrl: string;
  };
  play: string;
  time: string;
  quarter: string;
  distance: string;
  result: "made" | "miss" | "other";
};

type TeamRosterPlayer = {
  name: string;
  position: string;
  number: number;
  imageUrl: string;
};

type TeamKey = "NYK" | "OPP";

type ScoredPlay = {
  entry: PlayEntry;
  absoluteSeconds: number;
  before: TeamScore;
  after: TeamScore;
};

type GameSegment = {
  quarter: string;
  startSeconds: number;
  endSeconds: number;
};

const makeEmptyTeamScore = (): TeamScore => ({ NYK: 0, OPP: 0 });

const makeEmptyPlayerStats = (): PlayerStats => ({
  pts: 0,
  fgMade: 0,
  fgAtt: 0,
  reb: 0,
  ast: 0,
  threePtMade: 0,
  threePtAtt: 0,
  stl: 0,
  blk: 0,
});

const makeEmptyTeamStats = (players: Array<{ name: string }>): TeamStats =>
  Object.fromEntries(
    players.map((player) => [player.name, makeEmptyPlayerStats()]),
  );

const normalizeNameToken = (name: string) =>
  name.toLowerCase().replace(/[.]/g, "").replace(/\s+/g, " ").trim();

const makeNameLookup = (
  players: Array<{ name: string }>,
  aliases: Record<string, string> = {},
) => {
  const lookup = new Map<string, string>();

  const register = (token: string, fullName: string) => {
    const normalized = normalizeNameToken(token);
    if (normalized) lookup.set(normalized, fullName);
  };

  for (const player of players) {
    const fullName = player.name;
    register(fullName, fullName);

    const parts = fullName.split(" ");
    const firstName = parts[0] ?? "";
    const lastName = parts[parts.length - 1] ?? "";

    register(lastName, fullName);
    register(`${firstName[0] ?? ""} ${lastName}`, fullName);
    register(`${firstName.slice(0, 3)} ${lastName}`, fullName);
    register(`${firstName.slice(0, 4)} ${lastName}`, fullName);
  }

  for (const [token, fullName] of Object.entries(aliases)) {
    register(token, fullName);
  }

  return lookup;
};

const knicksNameLookup = makeNameLookup(knicksPlayers, {
  jalen: "Jalen Williams",
  "jal.": "Jalen Williams",
  jaylin: "Jaylin Williams",
  "jay.": "Jaylin Williams",
});
const spursNameLookup = makeNameLookup(spursPlayers);

const opponentPlayersByCode = {
  ATL: hawksPlayers,
  PHI: sixersPlayers,
  CLE: cavaliersPlayers,
  SAS: spursPlayers,
} as const;

type OpponentCode = keyof typeof opponentPlayersByCode;

const opponentNameLookupByCode: Record<OpponentCode, Map<string, string>> = {
  ATL: makeNameLookup(hawksPlayers),
  PHI: makeNameLookup(sixersPlayers),
  CLE: makeNameLookup(cavaliersPlayers),
  SAS: spursNameLookup,
};

const opponentPlayersByNameByCode: Record<
  OpponentCode,
  Map<string, TeamRosterPlayer>
> = {
  ATL: new Map(hawksPlayers.map((player) => [player.name, player])),
  PHI: new Map(sixersPlayers.map((player) => [player.name, player])),
  CLE: new Map(cavaliersPlayers.map((player) => [player.name, player])),
  SAS: new Map(spursPlayers.map((player) => [player.name, player])),
};

const getOpponentCodeForGame = (gameIndex: number): OpponentCode => {
  const game = games[gameIndex] ?? games[0];
  const opponentAbbrev =
    game.awayTeam === "NYK" ? game.homeTeam : game.awayTeam;

  if (opponentAbbrev in opponentPlayersByCode) {
    return opponentAbbrev as OpponentCode;
  }

  return "SAS";
};

const getOpponentPlayersForGame = (gameIndex: number): TeamRosterPlayer[] =>
  opponentPlayersByCode[getOpponentCodeForGame(gameIndex)];

const resolveFromLookup = (lookup: Map<string, string>, token: string) => {
  if (lookup.has(token)) return lookup.get(token) ?? null;

  const compactToken = token.replace(/\s+/g, "");
  for (const [candidate, fullName] of lookup.entries()) {
    if (candidate.replace(/\s+/g, "") === compactToken) return fullName;
  }

  return null;
};

const resolveRosterName = (
  team: "NYK" | "OPP",
  rawName: string,
  gameIndex: number,
) => {
  const token = normalizeNameToken(rawName);
  if (!token || token === "na" || token === "unknown") return null;
  if (token === "team knicks" || token === "team spurs") return null;

  const lookup =
    team === "NYK"
      ? knicksNameLookup
      : opponentNameLookupByCode[getOpponentCodeForGame(gameIndex)];
  const directMatch = resolveFromLookup(lookup, token);
  if (directMatch) return directMatch;

  // Some rows encode stat/action text in the player label (e.g. "J Williams REBOUND").
  // Walk backward through leading tokens and keep the first valid roster-name prefix.
  const parts = token.split(" ").filter(Boolean);
  for (let i = parts.length - 1; i >= 1; i -= 1) {
    const candidateToken = parts.slice(0, i).join(" ");
    const candidateMatch = resolveFromLookup(lookup, candidateToken);
    if (candidateMatch) return candidateMatch;
  }

  return null;
};

const isFreeThrowPlay = (play: string) => /\bfree\s*throw\b/i.test(play);
const isThreePointPlay = (play: string) => /\b3pt\b/i.test(play);
const isFieldGoalAttempt = (entry: PlayEntry) =>
  (entry.result === "made" || entry.result === "miss") &&
  !isFreeThrowPlay(entry.play);

const getAbsoluteSeconds = (quarter: string, time: string): number => {
  const [minStr, secStr] = time.split(":");
  const remaining = parseInt(minStr) * 60 + parseInt(secStr);
  const isOT = quarter.startsWith("OT");
  const periodDuration = isOT ? 5 * 60 : 12 * 60;
  const elapsed = periodDuration - remaining;

  let offset = 0;
  if (quarter === "Q1") offset = 0;
  else if (quarter === "Q2") offset = 12 * 60;
  else if (quarter === "Q3") offset = 24 * 60;
  else if (quarter === "Q4") offset = 36 * 60;
  else if (isOT) {
    const otNum = parseInt(quarter.slice(2));
    offset = 48 * 60 + (otNum - 1) * 5 * 60;
  }

  return offset + elapsed;
};

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

type QuarterInfo = {
  quarter: string;
  remainingInQuarter: number;
};

const getQuarterAndTime = (
  absoluteSeconds: number,
  numOTs: number,
): QuarterInfo => {
  const Q_DURATION = 12 * 60;
  const OT_DURATION = 5 * 60;

  if (absoluteSeconds < Q_DURATION) {
    return {
      quarter: "Q1",
      remainingInQuarter: Q_DURATION - absoluteSeconds,
    };
  } else if (absoluteSeconds < Q_DURATION * 2) {
    return {
      quarter: "Q2",
      remainingInQuarter: Q_DURATION * 2 - absoluteSeconds,
    };
  } else if (absoluteSeconds < Q_DURATION * 3) {
    return {
      quarter: "Q3",
      remainingInQuarter: Q_DURATION * 3 - absoluteSeconds,
    };
  } else if (absoluteSeconds < Q_DURATION * 4) {
    return {
      quarter: "Q4",
      remainingInQuarter: Q_DURATION * 4 - absoluteSeconds,
    };
  } else {
    const elapsedAfterQ4 = absoluteSeconds - Q_DURATION * 4;
    const otNumber = Math.floor(elapsedAfterQ4 / OT_DURATION) + 1;
    const otStartSeconds = Q_DURATION * 4 + (otNumber - 1) * OT_DURATION;
    return {
      quarter: `OT${otNumber}`,
      remainingInQuarter: OT_DURATION - (absoluteSeconds - otStartSeconds),
    };
  }
};

const getDefaultGameSeconds = (otCount: number) => (48 + otCount * 5) * 60;

const knicksPlayersByName = new Map(
  knicksPlayers.map((player) => [player.name, player]),
);

const fallbackHighlight: HighlightInfo = {
  team: "NYK",
  teamLabel: "NYK",
  player: {
    name: "No Highlight",
    position: "-",
    number: 0,
    imageUrl: "",
  },
  play: "No notable play recorded in this segment.",
  time: "00:00",
  quarter: "Q1",
  distance: "-",
  result: "other",
};

const getHighlightSegments = (otCount: number): GameSegment[] => {
  const quarterDuration = 12 * 60;
  const quarterChunk = quarterDuration / 4;
  const overtimeDuration = 5 * 60;
  const segments: GameSegment[] = [];

  for (let quarter = 1; quarter <= 4; quarter += 1) {
    const quarterStart = (quarter - 1) * quarterDuration;

    for (let chunk = 0; chunk < 4; chunk += 1) {
      const startSeconds = quarterStart + chunk * quarterChunk;
      segments.push({
        quarter: `Q${quarter}`,
        startSeconds,
        endSeconds: startSeconds + quarterChunk,
      });
    }
  }

  for (let ot = 1; ot <= otCount; ot += 1) {
    const startSeconds = 48 * 60 + (ot - 1) * overtimeDuration;
    segments.push({
      quarter: `OT${ot}`,
      startSeconds,
      endSeconds: startSeconds + overtimeDuration,
    });
  }

  return segments;
};

const getPlayDistance = (play: string): string => {
  const distanceMatch = play.match(/(\d+(?:\.\d+)?)\s*ft\b/i);
  return distanceMatch ? `${distanceMatch[1]} ft` : "-";
};

const buildScoredTimeline = (entries: PlayEntry[]): ScoredPlay[] => {
  const sortedEntries = [...entries].sort(
    (a, b) =>
      getAbsoluteSeconds(a.quarter, a.time) -
      getAbsoluteSeconds(b.quarter, b.time),
  );

  let runningScore: TeamScore = makeEmptyTeamScore();

  return sortedEntries.map((entry) => {
    const before = { ...runningScore };
    runningScore = {
      ...runningScore,
      [entry.team]: runningScore[entry.team] + entry.points,
    };

    return {
      entry,
      absoluteSeconds: getAbsoluteSeconds(entry.quarter, entry.time),
      before,
      after: { ...runningScore },
    };
  });
};

const getHighlightPriorityScore = (play: ScoredPlay): number => {
  const { entry, before, after } = play;
  const team = entry.team;
  const opponent: TeamKey = team === "NYK" ? "OPP" : "NYK";
  const made = entry.result === "made";
  const threePointMake = made && isThreePointPlay(entry.play);
  const twoPointMake = made && entry.points === 2;

  const beforeLead = before[team] - before[opponent];
  const afterLead = after[team] - after[opponent];
  const leadSwing = afterLead - beforeLead;
  const favorableScoreChange = made && entry.points > 0 && leadSwing > 0;

  let tier = 0;
  if (favorableScoreChange) tier = 4;
  else if (threePointMake) tier = 3;
  else if (twoPointMake) tier = 2;
  else if (made && entry.points > 0) tier = 1;

  let detailScore = 0;
  detailScore += Math.max(0, leadSwing) * 10;
  detailScore += entry.points * 2;
  if (threePointMake) detailScore += 7;
  if (entry.quarter === "Q4" || entry.quarter.startsWith("OT")) {
    detailScore += 1;
  }

  return tier * 1000 + detailScore;
};

const toHighlightInfo = (
  play: ScoredPlay,
  gameIndex: number,
): HighlightInfo => {
  const { entry } = play;
  const opponentCode = getOpponentCodeForGame(gameIndex);
  const resolvedName = resolveRosterName(entry.team, entry.player, gameIndex);
  const teamLookup =
    entry.team === "NYK"
      ? knicksPlayersByName
      : opponentPlayersByNameByCode[opponentCode];
  const defaultPlayer =
    entry.team === "NYK"
      ? knicksPlayers[0]
      : opponentPlayersByCode[opponentCode][0];
  const rosterPlayer = resolvedName
    ? (teamLookup.get(resolvedName) ?? defaultPlayer)
    : defaultPlayer;

  return {
    team: entry.team,
    teamLabel: entry.team === "NYK" ? "NYK" : opponentCode,
    player: {
      name: resolvedName ?? entry.player ?? rosterPlayer.name,
      position: rosterPlayer.position,
      number: rosterPlayer.number,
      imageUrl: rosterPlayer.imageUrl,
    },
    play: entry.play,
    time: entry.time,
    quarter: entry.quarter,
    distance: getPlayDistance(entry.play),
    result: entry.result,
  };
};

const getHighlightsForGame = (
  entries: PlayEntry[],
  otCount: number,
  gameIndex: number,
): HighlightInfo[] => {
  const timeline = buildScoredTimeline(entries);
  const segments = getHighlightSegments(otCount);

  return segments.map((segment) => {
    const candidates = timeline.filter(
      (play) =>
        play.absoluteSeconds >= segment.startSeconds &&
        play.absoluteSeconds < segment.endSeconds,
    );

    if (candidates.length === 0) {
      return {
        ...fallbackHighlight,
        quarter: segment.quarter,
      };
    }

    let best = candidates[0];
    let bestScore = getHighlightPriorityScore(best);

    for (let i = 1; i < candidates.length; i += 1) {
      const candidate = candidates[i];
      const score = getHighlightPriorityScore(candidate);
      const sameScore = score === bestScore;
      const tiebreakByPoints = candidate.entry.points > best.entry.points;
      const tiebreakByTime =
        candidate.entry.points === best.entry.points &&
        candidate.absoluteSeconds > best.absoluteSeconds;

      if (
        score > bestScore ||
        (sameScore && (tiebreakByPoints || tiebreakByTime))
      ) {
        best = candidate;
        bestScore = score;
      }
    }

    return toHighlightInfo(best, gameIndex);
  });
};

export default function Home() {
  const courtHeight = 160;
  const gameScroll = 300; // in vh, regulation 48 minutes
  const topLipHeight = 80;
  const splashRef = useRef<HTMLDivElement | null>(null);
  const playBoundaryRef = useRef<HTMLDivElement | null>(null);
  const NYKPlayRef = useRef<HTMLDivElement | null>(null);
  const SASPlayRef = useRef<HTMLDivElement | null>(null);
  const gameScrollElsRef = useRef<Array<HTMLDivElement | null>>([]);
  const footerRef = useRef<HTMLElement | null>(null);
  const courtHeightDynamicRef = useRef<HTMLDivElement | null>(null);
  // const animationFrameRef = useRef<number | null>(null);
  // const footerMetricsRef = useRef({ top: 0, bottom: 0 });
  const sasCourtRef = useRef<HTMLDivElement | null>(null);
  const nykCourtRef = useRef<HTMLDivElement | null>(null);
  const navScrollRef = useRef<HTMLDivElement | null>(null);
  const navGameRefsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [playsByGame, setPlaysByGame] = useState<PlayEntry[][]>(() =>
    games.map(() => []),
  );
  const [boxStats, setBoxStats] = useState(() => ({
    NYK: makeEmptyTeamStats(knicksPlayers),
    OPP: makeEmptyTeamStats(getOpponentPlayersForGame(0)),
  }));
  const [teamScoreByGame, setTeamScoreByGame] = useState<TeamScore[]>(() =>
    games.map(() => makeEmptyTeamScore()),
  );
  const [progressByGame, setProgressByGame] = useState<number[]>(() =>
    games.map(() => 0),
  );
  const [betweenProgressByGame, setBetweenProgressByGame] = useState<number[]>(
    () => games.map(() => 0),
  );
  const [gameSecondsByGame, setGameSecondsByGame] = useState<number[]>(() =>
    games.map((game) => getDefaultGameSeconds(game.ot)),
  );
  const [activeGameIndex, setActiveGameIndex] = useState(0);
  const [gameClock, setGameClock] = useState("12:00");
  const [gameQuarter, setGameQuarter] = useState("Q1");
  const [isInsideSplash, setIsInsideSplash] = useState(true);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const [activeCourtUrl, setActiveCourtUrl] = useState<string | null>(null);
  const [displayedCourtUrl, setDisplayedCourtUrl] = useState<string | null>(
    null,
  );
  const [isCourtVisible, setIsCourtVisible] = useState(false);
  const courtTransitionRef = useRef<number | null>(null);
  const setGameScrollRef = (index: number, el: HTMLDivElement | null) => {
    gameScrollElsRef.current[index] = el;
  };
  const activeGameVisual = gameVisuals[activeGameIndex] ?? gameVisuals[0];
  const ActiveSASCourt = activeGameVisual.sasCourt;
  const ActiveNYKCourt = activeGameVisual.nykCourt;

  useEffect(() => {
    if (courtTransitionRef.current !== null) {
      window.clearTimeout(courtTransitionRef.current);
      courtTransitionRef.current = null;
    }

    if (activeCourtUrl) {
      setDisplayedCourtUrl(activeCourtUrl);
      setIsCourtVisible(true);
      return;
    }

    setIsCourtVisible(false);
    courtTransitionRef.current = window.setTimeout(() => {
      setDisplayedCourtUrl(null);
      courtTransitionRef.current = null;
    }, 380);

    return () => {
      if (courtTransitionRef.current !== null) {
        window.clearTimeout(courtTransitionRef.current);
        courtTransitionRef.current = null;
      }
    };
  }, [activeCourtUrl]);

  const scrollToGameStart = (gameIndex: number) => {
    const targetEl = gameScrollElsRef.current[gameIndex];
    if (!targetEl) return;

    const top =
      targetEl.getBoundingClientRect().top +
      window.scrollY -
      topLipHeight * 2 -
      courtHeight -
      0;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    let isMounted = true;

    const loadPlays = async () => {
      const responses = await Promise.all(
        games.map((game) =>
          fetch(`/api/games/${game.id}`, { cache: "no-store" })
            .then(async (response) => {
              if (!response.ok) return [] as PlayEntry[];
              return (await response.json()) as PlayEntry[];
            })
            .catch(() => [] as PlayEntry[]),
        ),
      );

      if (!isMounted) return;

      const secondsByGame = responses.map((entries, index) => {
        const maxSec = entries.reduce(
          (max, entry) =>
            Math.max(max, getAbsoluteSeconds(entry.quarter, entry.time)),
          0,
        );
        return maxSec > 0 ? maxSec : getDefaultGameSeconds(games[index].ot);
      });

      setPlaysByGame(responses);
      setGameSecondsByGame(secondsByGame);
    };

    void loadPlays();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const scrollEntries = gameScrollElsRef.current
      .map((el, index) => ({ index, el }))
      .filter(
        (
          entry,
        ): entry is {
          index: number;
          el: HTMLDivElement;
        } => entry.el !== null,
      );
    const nykEl = NYKPlayRef.current;
    const sasEl = SASPlayRef.current;

    const boundaryEl = playBoundaryRef.current;

    if (scrollEntries.length === 0 || !nykEl || !sasEl || !boundaryEl) return;

    let lastRenderedSecond = -1;
    let lastZone: "above" | "active" | "below" | "between" | null = null;
    let lastGameIndex = -1;

    const resetShotStyles = () => {
      [sasCourtRef, nykCourtRef].forEach((ref) => {
        ref.current?.querySelectorAll<SVGGElement>("g.shot").forEach((g) => {
          g.style.opacity = "1";
          g.style.transform = "scale(1)";
        });
      });
    };

    const updateClockDisplay = (clock: string, quarter: string) => {
      setGameClock((prev) => (prev === clock ? prev : clock));
      setGameQuarter((prev) => (prev === quarter ? prev : quarter));
    };

    const computeSnapshot = (
      entries: PlayEntry[],
      currentSeconds: number,
      gameIndex: number,
    ) => {
      const opponentPlayers = getOpponentPlayersForGame(gameIndex);
      const next = {
        NYK: makeEmptyTeamStats(knicksPlayers),
        OPP: makeEmptyTeamStats(opponentPlayers),
      };
      const score: TeamScore = { NYK: 0, OPP: 0 };

      for (const entry of entries) {
        const entrySeconds = getAbsoluteSeconds(entry.quarter, entry.time);
        if (entrySeconds > currentSeconds) break;

        score[entry.team] += entry.points;

        const teamStats = next[entry.team];
        const scorerName = resolveRosterName(
          entry.team,
          entry.player,
          gameIndex,
        );

        if (scorerName && teamStats[scorerName]) {
          const scorerLine = teamStats[scorerName];
          scorerLine.pts += entry.points;
          scorerLine.reb += entry.rebounds;
          scorerLine.stl += entry.steals;
          scorerLine.blk += entry.blocks;

          if (isFieldGoalAttempt(entry)) {
            scorerLine.fgAtt += 1;
            if (entry.result === "made") scorerLine.fgMade += 1;

            if (isThreePointPlay(entry.play)) {
              scorerLine.threePtAtt += 1;
              if (entry.result === "made") scorerLine.threePtMade += 1;
            }
          }
        }

        const assistName = resolveRosterName(
          entry.team,
          entry.assist,
          gameIndex,
        );
        if (assistName && teamStats[assistName]) {
          teamStats[assistName].ast += entry.assists;
        }
      }

      return { boxStats: next, score };
    };

    const renderAtSecond = (currentSeconds: number, gameIndex: number) => {
      const activePlays = playsByGame[gameIndex] ?? [];
      const snapshot = computeSnapshot(activePlays, currentSeconds, gameIndex);
      setBoxStats(snapshot.boxStats);
      setTeamScoreByGame((prev) => {
        const next = [...prev];
        next[gameIndex] = snapshot.score;
        return next;
      });
      setActiveGameIndex((prev) => (prev === gameIndex ? prev : gameIndex));

      const { quarter, remainingInQuarter } = getQuarterAndTime(
        currentSeconds,
        games[gameIndex]?.ot ?? 0,
      );
      updateClockDisplay(formatTime(remainingInQuarter), quarter);

      let nykPlay: PlayEntry | null = null;
      let sasPlay: PlayEntry | null = null;

      for (const entry of activePlays) {
        const entrySeconds = getAbsoluteSeconds(entry.quarter, entry.time);
        if (entrySeconds > currentSeconds) break;
        if (entry.team === "NYK") nykPlay = entry;
        else if (entry.team === "OPP") sasPlay = entry;
      }

      const nykResult = nykPlay
        ? isFreeThrowPlay(nykPlay.play)
          ? ""
          : nykPlay.result === "made"
            ? "<b style='color: var(--make)'>✓</b>"
            : nykPlay.result === "miss"
              ? "<b style='color: var(--miss)'>✗</b>"
              : ""
        : "";
      const sasResult = sasPlay
        ? isFreeThrowPlay(sasPlay.play)
          ? ""
          : sasPlay.result === "made"
            ? "<b style='color: var(--make)'>✓</b>"
            : sasPlay.result === "miss"
              ? "<b style='color: var(--miss)'>✗</b>"
              : ""
        : "";

      nykEl.innerHTML = nykPlay
        ? `${nykPlay.player[0]}. ${nykPlay.player.split(" ")[1] ?? ""} – ${nykPlay.play} ${nykResult}`
        : "&ensp;";
      sasEl.innerHTML = sasPlay
        ? `${sasResult} ${sasPlay.player[0]}. ${sasPlay.player.split(" ")[1] ?? ""} – ${sasPlay.play}`
        : "&ensp;";

      const highlightShot = (
        containerRef: React.RefObject<HTMLDivElement | null>,
        activePlay: PlayEntry | null,
      ) => {
        const container = containerRef.current;
        if (!container) return;
        const shots = container.querySelectorAll<SVGGElement>("g.shot");
        shots.forEach((g) => {
          g.style.opacity = "0.05";
          g.style.transform = "scale(1)";
        });
        if (!activePlay) return;
        const suffix = `${activePlay.quarter} - ${activePlay.time}`;
        for (const g of shots) {
          const titleEl = g.querySelector("title");
          if (titleEl?.textContent?.includes(suffix)) {
            g.style.opacity = "1";
            g.style.transform = "scale(4)";
            break;
          }
        }
      };

      highlightShot(sasCourtRef, sasPlay);
      highlightShot(nykCourtRef, nykPlay);
    };

    const handleGame1Scroll = () => {
      const boundaryTop = boundaryEl.getBoundingClientRect().top;

      const nextProgress = gameScrollElsRef.current.map((sectionEl) => {
        if (!sectionEl) return 0;

        const sectionRect = sectionEl.getBoundingClientRect();
        const scrolledPx = boundaryTop - sectionRect.top;

        if (scrolledPx <= 0) return 0;
        if (scrolledPx >= sectionRect.height) return 1;
        return Math.min(1, Math.max(0, scrolledPx / sectionRect.height));
      });

      setProgressByGame((prev) => {
        let changed = false;
        for (let i = 0; i < prev.length; i += 1) {
          if (Math.abs((prev[i] ?? 0) - (nextProgress[i] ?? 0)) > 0.001) {
            changed = true;
            break;
          }
        }
        return changed ? nextProgress : prev;
      });

      const nextBetweenProgress = games.map((_, index) => {
        if (index === 0) return 0;

        const previousGameScrollEl = gameScrollElsRef.current[index - 1];
        const currentGameScrollEl = gameScrollElsRef.current[index];
        if (!previousGameScrollEl || !currentGameScrollEl) return 0;

        const previousRect = previousGameScrollEl.getBoundingClientRect();
        const currentRect = currentGameScrollEl.getBoundingClientRect();

        const transitionStart = previousRect.bottom;
        const transitionEnd = currentRect.top;
        const transitionDistance = transitionEnd - transitionStart;

        if (transitionDistance <= 0) {
          return boundaryTop >= transitionEnd ? 1 : 0;
        }

        if (boundaryTop <= transitionStart) return 0;
        if (boundaryTop >= transitionEnd) return 1;

        return (boundaryTop - transitionStart) / transitionDistance;
      });

      setBetweenProgressByGame((prev) => {
        let changed = false;
        for (let i = 0; i < prev.length; i += 1) {
          if (
            Math.abs((prev[i] ?? 0) - (nextBetweenProgress[i] ?? 0)) > 0.001
          ) {
            changed = true;
            break;
          }
        }
        return changed ? nextBetweenProgress : prev;
      });

      // Keep every game's score in sync with its current scroll progress.
      // This also hydrates correct winner colors after a page reload at mid-series.
      const nextScores = nextProgress.map((progress, index) => {
        if (progress <= 0) return makeEmptyTeamScore();

        const entries = playsByGame[index] ?? [];
        const totalSeconds =
          gameSecondsByGame[index] ??
          getDefaultGameSeconds(games[index]?.ot ?? 0);
        const seconds = Math.max(
          0,
          Math.floor((Math.min(1, Math.max(0, progress)) || 0) * totalSeconds),
        );

        return computeSnapshot(entries, seconds, index).score;
      });

      setTeamScoreByGame((prev) => {
        let changed = prev.length !== nextScores.length;

        if (!changed) {
          for (let i = 0; i < prev.length; i += 1) {
            if (
              (prev[i]?.NYK ?? 0) !== (nextScores[i]?.NYK ?? 0) ||
              (prev[i]?.OPP ?? 0) !== (nextScores[i]?.OPP ?? 0)
            ) {
              changed = true;
              break;
            }
          }
        }

        return changed ? nextScores : prev;
      });

      let activeEntry = scrollEntries[0];
      let isInsideAnyScroll = false;

      for (const candidate of scrollEntries) {
        const rect = candidate.el.getBoundingClientRect();
        if (boundaryTop >= rect.top) {
          activeEntry = candidate;
          if (boundaryTop <= rect.bottom) {
            isInsideAnyScroll = true;
          }
        }
      }

      const activeIndex = activeEntry.index;
      const scrollEl = activeEntry.el;
      const rect = scrollEl.getBoundingClientRect();
      const scrolledPx = boundaryTop - rect.top;
      const splashBottom = splashRef.current?.getBoundingClientRect().bottom;
      const isInsideSplashNow =
        typeof splashBottom === "number" && splashBottom > boundaryTop;
      const totalSeconds =
        gameSecondsByGame[activeIndex] ??
        getDefaultGameSeconds(games[activeIndex]?.ot ?? 0);
      const isSeriesBottom =
        activeIndex === games.length - 1 && scrolledPx >= rect.height;

      if (activeIndex !== lastGameIndex) {
        lastZone = null;
        lastRenderedSecond = -1;
        lastGameIndex = activeIndex;
      }

      setActiveGameIndex((prev) => (prev === activeIndex ? prev : activeIndex));
      setIsInsideSplash((prev) =>
        prev === isInsideSplashNow ? prev : isInsideSplashNow,
      );
      setHasReachedBottom((prev) =>
        prev === isSeriesBottom ? prev : isSeriesBottom,
      );
      setActiveCourtUrl(
        isInsideAnyScroll ? (games[activeIndex]?.courtImageUrl ?? null) : null,
      );

      if (!isInsideAnyScroll) {
        if (lastZone === "between") return;

        // When scrolling quickly between sections, snap the last passed game
        // to its final score so we don't keep a partially-rendered value.
        if (scrolledPx > rect.height) {
          const activePlays = playsByGame[activeIndex] ?? [];
          const finalSecond = Math.max(0, Math.floor(totalSeconds));
          const finalSnapshot = computeSnapshot(
            activePlays,
            finalSecond,
            activeIndex,
          );
          setBoxStats(finalSnapshot.boxStats);
          setTeamScoreByGame((prev) => {
            const next = [...prev];
            next[activeIndex] = finalSnapshot.score;
            return next;
          });
        }

        updateClockDisplay("00:00", "END");
        nykEl.innerHTML = "&ensp;";
        sasEl.innerHTML = "&ensp;";
        // setBoxStats({
        //   NYK: makeEmptyTeamStats(knicksPlayers),
        //   SAS: makeEmptyTeamStats(spursPlayers),
        // });
        resetShotStyles();

        lastZone = "between";
        lastRenderedSecond = -1;
        return;
      }

      if (scrolledPx <= 0) {
        if (lastZone === "above") return;

        updateClockDisplay("12:00", "Q1");
        nykEl.innerHTML = "&ensp;";
        sasEl.innerHTML = "&ensp;";
        setBoxStats({
          NYK: makeEmptyTeamStats(knicksPlayers),
          OPP: makeEmptyTeamStats(getOpponentPlayersForGame(activeIndex)),
        });
        setTeamScoreByGame((prev) => {
          const next = [...prev];
          next[activeIndex] = makeEmptyTeamScore();
          return next;
        });
        resetShotStyles();

        lastZone = "above";
        lastRenderedSecond = -1;
        return;
      }

      if (scrolledPx >= rect.height) {
        const finalSecond = Math.max(0, Math.floor(totalSeconds));
        if (lastZone === "below" && lastRenderedSecond === finalSecond) return;

        renderAtSecond(finalSecond, activeIndex);
        if (isSeriesBottom) resetShotStyles();
        lastZone = "below";
        lastRenderedSecond = finalSecond;
        return;
      }

      const progress = Math.min(1, Math.max(0, scrolledPx / rect.height));
      const currentSecond = Math.max(0, Math.floor(progress * totalSeconds));

      if (lastZone === "active" && lastRenderedSecond === currentSecond) return;

      renderAtSecond(currentSecond, activeIndex);
      lastZone = "active";
      lastRenderedSecond = currentSecond;
    };

    let scrollRafId: number | null = null;

    const onScroll = () => {
      if (scrollRafId !== null) return;
      scrollRafId = window.requestAnimationFrame(() => {
        scrollRafId = null;
        handleGame1Scroll();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleGame1Scroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollRafId !== null) {
        window.cancelAnimationFrame(scrollRafId);
      }
    };
  }, [playsByGame, gameSecondsByGame]);

  useEffect(() => {
    const scrollContainer = navScrollRef.current;
    const activeGameEl = navGameRefsRef.current[activeGameIndex];

    if (scrollContainer && activeGameEl) {
      activeGameEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeGameIndex]);

  // useEffect(() => {
  //   const footerElement = footerRef.current;
  //   const courtElement = courtHeightDynamicRef.current;

  //   if (!footerElement || !courtElement) {
  //     return;
  //   }

  //   const maxCourtHeight = 520;

  //   const measureFooter = () => {
  //     const footerRect = footerElement.getBoundingClientRect();
  //     footerMetricsRef.current = {
  //       top: footerRect.top + window.scrollY,
  //       bottom: footerRect.bottom + window.scrollY,
  //     };
  //   };

  //   const loop = () => {
  //     const { top: footerTop, bottom: footerBottom } = footerMetricsRef.current;
  //     const footerHeight = footerBottom - footerTop;

  //     if (footerHeight > 0) {
  //       const viewportBottom = window.scrollY + window.innerHeight;
  //       const progress = (viewportBottom - footerTop) / footerHeight;
  //       const clampedProgress = Math.min(1, Math.max(0, progress));
  //       const nextHeight =
  //         courtHeight + (maxCourtHeight - courtHeight) * clampedProgress;
  //       courtElement.style.height = `${nextHeight}px`;
  //     }

  //     animationFrameRef.current = window.requestAnimationFrame(loop);
  //   };

  //   const onResize = () => {
  //     measureFooter();
  //   };

  //   measureFooter();
  //   animationFrameRef.current = window.requestAnimationFrame(loop);

  //   window.addEventListener("resize", onResize);

  //   const resizeObserver =
  //     typeof ResizeObserver !== "undefined"
  //       ? new ResizeObserver(onResize)
  //       : null;

  //   resizeObserver?.observe(footerElement);

  //   return () => {
  //     window.removeEventListener("resize", onResize);
  //     resizeObserver?.disconnect();

  //     if (animationFrameRef.current !== null) {
  //       window.cancelAnimationFrame(animationFrameRef.current);
  //       animationFrameRef.current = null;
  //     }
  //   };
  // }, [courtHeight]);

  // current highlight logic
  const splashTransition = "0.2s ease-in-out";
  const highlightsByGame = useMemo(
    () =>
      playsByGame.map((entries, index) =>
        getHighlightsForGame(entries, games[index]?.ot ?? 0, index),
      ),
    [playsByGame],
  );
  const currentOpponentPlayers = getOpponentPlayersForGame(activeGameIndex);
  const activeGameHighlights = useMemo(
    () => highlightsByGame[activeGameIndex] ?? [],
    [highlightsByGame, activeGameIndex],
  );
  const activeGameSeconds =
    gameSecondsByGame[activeGameIndex] ??
    getDefaultGameSeconds(games[activeGameIndex]?.ot ?? 0);
  const activeGameProgress = Math.min(
    1,
    Math.max(0, progressByGame[activeGameIndex] ?? 0),
  );
  const activeCurrentSecond = Math.floor(
    activeGameProgress * activeGameSeconds,
  );
  const activeHighlightIndex = useMemo(() => {
    if (activeGameHighlights.length === 0) return 0;

    const segments = getHighlightSegments(games[activeGameIndex]?.ot ?? 0);
    let latestIndex = 0;

    for (let i = 0; i < segments.length; i += 1) {
      if (segments[i].startSeconds <= activeCurrentSecond) {
        latestIndex = i;
      } else {
        break;
      }
    }

    return Math.min(latestIndex, activeGameHighlights.length - 1);
  }, [activeGameHighlights.length, activeCurrentSecond, activeGameIndex]);

  const roundStartIndexes = useMemo(() => {
    let offset = 0;
    return rounds.map((round) => {
      const start = offset;
      offset += round.games.length;
      return start;
    });
  }, []);

  // toggle future series visibility

  const [showAllGames, setshowAllGames] = useState(false);
  const toggleFutureSeries = () => {
    setshowAllGames((prev) => !prev);
  };

  const getWinnerColor = (score: TeamScore, opponent: string) => {
    const opponentColorVar = `var(--${opponent.toLowerCase()})`;
    if (score.NYK > score.OPP) return "var(--nyk)";
    if (score.OPP > score.NYK) return opponentColorVar;
    return "color-mix(in srgb, var(--background) 50%, var(--stroke) 25%)";
  };

  // text effect inspired by my codepen
  const nykTitleRef = useRef<HTMLHeadingElement | null>(null);
  const sasTitleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const nykTitleEl = nykTitleRef.current;
    const sasTitleEl = sasTitleRef.current;
    if (!nykTitleEl || !sasTitleEl) return;

    const titleElms = [nykTitleEl, sasTitleEl];

    titleElms.forEach((el) => {
      el.style.opacity = "1";
      const titleLetters = el.textContent || "";
      let letters: string[] = [];

      el.innerHTML = "";

      letters = titleLetters.split("");
      const widths: number[] = [];

      console.log(letters);

      letters.forEach((letter, n) => {
        const span = document.createElement("span") as HTMLSpanElement;
        const div = document.createElement("div") as HTMLDivElement;
        if (letter == " ") {
          div.innerHTML = "&nbsp";
        } else {
          div.innerHTML = letter;
        }
        span.style.display = "inline-block";
        span.style.lineHeight = "1";
        span.appendChild(div);
        el.appendChild(span);
        widths.push(div.getBoundingClientRect().width);

        // nykTitleEl.style.opacity = '1'
        div.style.overflow = "hidden";
        div.style.width = "0px";
        div.style.transform = `skewX(${el == nykTitleEl ? -75 : 75}deg) scaleX(${el == nykTitleEl ? (letters.length - n) * 2 : n * 2})`;
        div.style.transition = `${el == nykTitleEl ? 0.2 + n / 15 : 0.2 + (letters.length - n) / 15}s ease-out`;
      });

      const allSpans = el.querySelectorAll(
        "h1 span div",
      ) as NodeListOf<HTMLDivElement>;

      setTimeout(function () {
        allSpans.forEach((items, n) => {
          const delay =
            el == nykTitleEl
              ? 50 + easeRegular(n, letters.length - 1)
              : 50 + easeRegular(n, letters.length);
          const elNumber = el == nykTitleEl ? n : 2 - n;

          setTimeout(function () {
            // nykTitleEl.style.opacity = '0.7'
            allSpans[elNumber].style.width = `${widths[elNumber]}px`;
            allSpans[elNumber].style.transform = "skewX(0deg) scaleX(1)";
          }, delay);
        });
      }, 500);
    });
  }, []);

  function easeRegular(x: number, length: number) {
    if (x < 0) x = 0;
    if (x > length) x = length;

    const normalizedX = x / length;
    const normalizedY =
      normalizedX < 0.5
        ? 4 * Math.pow(normalizedX, 3)
        : 1 - Math.pow(-2 * normalizedX + 2, 3) / 2;

    const y = normalizedY * 200;
    return y;
  }

  return (
    <main>
      {/* loader */}
      <div
        id="loader"
        className="fixed z-200 inset-0 p-6 xl:p-[63px_63px_163px_63px] pointer-events-none duration-300 ease-in-out"
      >
        <div className="w-full h-full flex lg:flex-col items-center justify-center">
          <div className="w-15/50 lg:w-auto lg:h-15/50">
            <svg
              height="100%"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="80"
                cy="80"
                r="59.5"
                transform="rotate(-90 80 80)"
                strokeWidth="10"
                stroke="var(--sas)"
                // vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* splash */}
      <div
        className="relative z-4 w-full bg-(--background) p-6 xl:p-[63px_63px_163px_63px] transition-[padding] duration-300 ease-in-out"
        style={{
          height: `100dvh`,
        }}
        ref={splashRef}
      >
        <div className="relative w-full h-full grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 border border-(--stroke)">
          <SplashCourt />
          {/* use text effect from your codepen, both animating from center */}
          <div className="place-self-center flex flex-col items-center text-(--nyk)">
            <p>Oklahoma City Thunder</p>
            <h1 ref={nykTitleRef} className="opacity-0">
              NYK
            </h1>
            <small>64-18</small>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-0.5">
            <h3>VS</h3>
          </div>
          <div className="place-self-center flex flex-col items-center text-(--sas)">
            <p>San Antonio Spurs</p>
            <h1 ref={sasTitleRef} className="opacity-0">
              SAS
            </h1>
            <small>62-20</small>
          </div>
        </div>
      </div>
      {/* nav / stationary */}
      <div className="fixed z-100 top-0 left-0 w-62.5 h-full">
        <div
          className="absolute inset-[0_0_0_16px] h-full flex flex-col"
          style={
            {
              // transition: splashTransition,
              // gridTemplateColumns: isInsideSplash
              //   ? "1fr 1fr 1fr 1fr 1fr 1fr 0.5fr"
              //   : "repeat(7, 1fr)",
              // maxWidth: isInsideSplash ? "100%" : "975px",
              // height: isInsideSplash ? 100 : topLipHeight - 17,
              // opacity: isInsideSplash ? 0 : 1,
              // maxHeight: hasReachedBottom ? "none" : "",
            }
          }
        >
          <div
            className="flex-1 relative flex flex-col overflow-scroll pointer-events-auto"
            ref={navScrollRef}
          >
            {/* <h3
            className="absolute top-0 left-2 -translate-y-full text-(--stroke)"
            style={{
              transition: splashTransition,
              opacity: isInsideSplash ? 1 : 0,
            }}
          >
            May <span style={{ opacity: 0.5 }}>2026</span>
          </h3> */}
            {rounds.map((round, i) => {
              const roundStart = roundStartIndexes[i] ?? 0;
              const progressBetweenRounds =
                betweenProgressByGame[roundStart] ?? 0;
              const isRoundVisible =
                showAllGames || i === 0 || progressBetweenRounds > 0;
              const roundSeparatorGradientId = `nav-round-separator-${i}`;

              const currentRoundFirstScore =
                teamScoreByGame[roundStart] ?? makeEmptyTeamScore();
              const currentRoundFirstColor = getWinnerColor(
                currentRoundFirstScore,
                round.opponent,
              );

              let previousRoundLastColor = currentRoundFirstColor;
              if (i > 0) {
                const previousRound = rounds[i - 1];
                const previousRoundStart = roundStartIndexes[i - 1] ?? 0;
                const previousRoundLastGameIndex =
                  previousRoundStart + previousRound.games.length - 1;
                const previousRoundLastScore =
                  teamScoreByGame[previousRoundLastGameIndex] ??
                  makeEmptyTeamScore();
                previousRoundLastColor = getWinnerColor(
                  previousRoundLastScore,
                  previousRound.opponent,
                );
              }

              let completedNYKWins = 0;
              let completedOPPWins = 0;
              round.games.forEach((_, gameOffset) => {
                const gameIndex = roundStart + gameOffset;
                const gameProgress = progressByGame[gameIndex] ?? 0;
                if (gameProgress < 1) return;

                const score =
                  teamScoreByGame[gameIndex] ?? makeEmptyTeamScore();
                if (score.NYK > score.OPP) completedNYKWins += 1;
                else if (score.OPP > score.NYK) completedOPPWins += 1;
              });

              const requiredGamesInSeries = Math.min(
                7,
                4 + Math.min(completedNYKWins, completedOPPWins),
              );

              return (
                <div className="w-full flex flex-col items-center" key={i}>
                  {i > 0 && (
                    <svg
                      width="20"
                      height="100"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id={roundSeparatorGradientId}
                          x1="10"
                          y1="0"
                          x2="10"
                          y2="16"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0%"
                            stopColor={previousRoundLastColor}
                          />
                          <stop
                            offset="100%"
                            stopColor={currentRoundFirstColor}
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M10 0L10 16"
                        stroke={`url(#${roundSeparatorGradientId})`}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                        style={{
                          strokeDasharray: 100,
                          strokeDashoffset: 100 - 100 * progressBetweenRounds,
                        }}
                      />
                    </svg>
                  )}
                  {round.games.map((game, j) => {
                    const gameIndex = roundStart + j;
                    const progress = progressByGame[gameIndex] ?? 0;
                    const isActiveGame = progress > 0 && progress < 1;
                    const score =
                      teamScoreByGame[gameIndex] ?? makeEmptyTeamScore();
                    const progressColor = getWinnerColor(score, round.opponent);
                    const progressBetweenGames =
                      betweenProgressByGame[gameIndex] ?? 0;
                    const previousGameScore =
                      teamScoreByGame[gameIndex - 1] ?? makeEmptyTeamScore();
                    const previousGameColor = getWinnerColor(
                      previousGameScore,
                      round.opponent,
                    );
                    const gameSeparatorGradientId = `nav-game-separator-${gameIndex}`;
                    const isGameNecessary = j < requiredGamesInSeries;
                    const shouldShowGame =
                      showAllGames || (isRoundVisible && isGameNecessary);

                    return (
                      <div
                        className="w-full flex flex-col items-center duration-300 ease-in-out"
                        style={{
                          opacity: shouldShowGame ? 1 : 0,
                          transform: `translateY(${shouldShowGame ? 0 : 50}px)`,
                          pointerEvents: shouldShowGame ? "auto" : "none",
                        }}
                        key={j}
                        ref={(el) => {
                          navGameRefsRef.current[gameIndex] = el;
                        }}
                      >
                        {j > 0 && (
                          <svg
                            width="20"
                            height="16"
                            viewBox="0 0 20 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                          >
                            <defs>
                              <linearGradient
                                id={gameSeparatorGradientId}
                                x1="10"
                                y1="0"
                                x2="10"
                                y2="16"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  offset="0%"
                                  stopColor={previousGameColor}
                                />
                                <stop offset="100%" stopColor={progressColor} />
                              </linearGradient>
                            </defs>
                            <path
                              d="M10 0L10 16"
                              stroke={`url(#${gameSeparatorGradientId})`}
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              vectorEffect="non-scaling-stroke"
                              style={{
                                strokeDasharray: 16,
                                strokeDashoffset:
                                  16 - 16 * progressBetweenGames,
                              }}
                            />
                          </svg>
                        )}
                        <div
                          className="w-full"
                          style={{
                            opacity: shouldShowGame ? 1 : 0,
                            transform: `translateY(${shouldShowGame ? 0 : 50}px)`,
                            pointerEvents: shouldShowGame ? "auto" : "none",
                          }}
                        >
                          <NavGameCard
                            scrollToGameStart={scrollToGameStart}
                            gameIndex={gameIndex}
                            isActiveGame={isActiveGame}
                            progressByGame={progressByGame}
                            score={score}
                            gameClock={gameClock}
                            gameQuarter={gameQuarter}
                            round={round}
                            game={game}
                            isInsideSplash={isInsideSplash}
                            splashTransition={splashTransition}
                            progressColor={progressColor}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="relative w-full py-4 bg-(--background) flex flex-col items-stretch gap-4.5">
            <div className="flex items-center justify-between gap-4">
              <small>Show all games</small>
              <div
                className="w-10 h-5 rounded-[10px] border border-(--stroke) p-0.5 cursor-pointer duration-200 ease-in-out"
                style={{
                  borderColor: showAllGames ? "var(--nyk)" : "var(--stroke)",
                  backgroundColor: showAllGames ? "var(--nyk)" : "transparent",
                }}
                onClick={toggleFutureSeries}
              >
                <div
                  className="h-full aspect-square rounded-full duration-200 ease-in-out"
                  style={{
                    backgroundColor: showAllGames
                      ? "var(--background)"
                      : "var(--stroke)",
                    transform: showAllGames
                      ? "translateX(20px)"
                      : "translateX(0%)",
                  }}
                ></div>
              </div>
            </div>
            <div
              className="border border-(--stroke) w-full"
              style={{ height: courtHeight + topLipHeight - 18 }}
            />
          </div>
        </div>
      </div>
      {/* plays / stationary */}
      <div className="fixed z-100 top-0 right-0 w-62.5 h-full">
        <div className="absolute inset-[0_16px_0_0] flex flex-col items-stretch justify-end overflow-hidden">
          <div
            className="relative duration-300 ease-out flex flex-col items-stretch gap-2"
            style={{
              transform: `translateY(${(activeGameHighlights.length - 1) * 150 - activeHighlightIndex * 150 - 16}px)`,
            }}
          >
            {activeGameHighlights.map((highlight, i) => (
              <div
                style={{ opacity: activeHighlightIndex === i ? 1 : 0.25 }}
                key={`${highlight.quarter}-${highlight.time}-${i}`}
              >
                <Highlight info={highlight} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* main / per round */}
      <div className="relative">
        {/* loop the div below for each round */}
        <div className="relative grid grid-cols-[250px_1fr_250px]">
          <div
            className="relative z-4 pointer-events-none"
            // style={{
            //   transition: splashTransition,
            //   inset: `-${isInsideSplash ? 116 : topLipHeight}px 0 0 0`,
            // }}
          ></div>
          <div className="relative">
            {/* info */}
            <div className="absolute z-3 inset-0 pointer-events-none">
              {/* solid background for grid */}
              <div className="sticky top-[100dvh] w-full h-0 flex items-end justify-stretch">
                <div className="relative w-full h-screen p-4">
                  <div className="absolute inset-[auto_0_0_0] px-4 pb-4 bg-(--background)">
                    <div
                      className="relative border-t border-(--stroke) flex flex-col items-center justify-end"
                      style={{ paddingTop: topLipHeight }}
                    >
                      <div style={{ height: courtHeight }}></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* background grid for nav */}
              <div className="absolute inset-4 flex flex-col items-stretch">
                {rounds.map((round, roundIndex) => {
                  const roundStart = roundStartIndexes[roundIndex] ?? 0;
                  return (
                    <React.Fragment key={round.id}>
                      <SeriesCard isInsideSticky={true} series={round.label} />
                      {round.games.map((game, g) => {
                        const gameIndex = roundStart + g;
                        return (
                          <div
                            className="relative flex items-stretch flex-col"
                            key={game.id}
                          >
                            <GameCard
                              isInsideSticky={true}
                              height={courtHeight + topLipHeight}
                              game={game}
                            />
                            <div
                              className="relative"
                              style={{
                                height: `${gameScroll + (gameScroll / 48) * game.ot * 5}vh`,
                              }}
                            >
                              <GameGrid isInsideSticky={true} ot={game.ot} />
                            </div>
                            <GameRecap
                              isInsideSticky={true}
                              height={courtHeight + topLipHeight}
                              game={game}
                            />

                            <div
                              className="scoreboard absolute left-0 right-0 flex items-stretch flex-col"
                              style={{
                                top: `${courtHeight + topLipHeight}px`,
                                bottom: `${-courtHeight + topLipHeight - 30}px`,
                              }}
                            >
                              <div
                                className="sticky -translate-y-full"
                                style={{
                                  inset: `calc(100dvh - 48px) 16px auto 16px`,
                                }}
                              >
                                <GameScoreboard
                                  isInsideSticky={true}
                                  teamScore={
                                    teamScoreByGame[gameIndex] ??
                                    makeEmptyTeamScore()
                                  }
                                  opponent={rounds[roundIndex].opponent}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
                <div
                  style={{ height: `${courtHeight + topLipHeight}px` }}
                ></div>
              </div>
              {/* top lip */}
              <div className="sticky z-1 top-0 w-full h-4 px-4 bg-(--background) flex flex-col items-stretch justify-end">
                <div className="translate-y-px border-b border-(--stroke)"></div>
              </div>
              {/* court, play-by-play, boxscores */}
              <div className="sticky top-[100dvh] w-full h-0 flex items-end justify-stretch pointer-events-none">
                <div className="relative w-full h-dvh p-4">
                  <div className="absolute z-10 inset-[0_0_auto_0] h-4 bg-(--background)"></div>
                  <div className="absolute z-10 inset-[auto_0_0_0] h-4 bg-(--background)"></div>
                  <div
                    className="absolute top-9.5 xl:top-4 left-4 w-[calc(50dvw-15px)] xl:w-102 h-[calc(22dvh)] border border-(--stroke) bg-(--background) duration-200 pointer-events-auto"
                    style={
                      {
                        // opacity: hasReachedBottom ? 0 : 1,
                        // pointerEvents: hasReachedBottom ? "none" : "auto",
                      }
                    }
                  >
                    <BoxScore
                      team="NYK"
                      players={knicksPlayers}
                      boxStats={boxStats}
                    />
                  </div>
                  <div
                    className="absolute top-9.5 xl:top-4 right-4 w-[calc(50dvw-15px)] xl:w-102 h-[calc(22dvh)] border border-(--stroke) bg-(--background) duration-200 pointer-events-auto"
                    style={
                      {
                        // opacity: hasReachedBottom ? 0 : 1,
                        // pointerEvents: hasReachedBottom ? "none" : "auto",
                      }
                    }
                  >
                    <BoxScore
                      team="OPP"
                      players={currentOpponentPlayers}
                      boxStats={boxStats}
                    />
                  </div>
                  <div
                    className="absolute z-10 left-0 right-0 h-0 px-4 pb-4"
                    style={{ bottom: courtHeight + topLipHeight }}
                  >
                    <div
                      className="relative flex flex-col items-center justify-end"
                      style={{ paddingTop: topLipHeight }}
                    >
                      <div
                        className="absolute inset-[0_0_auto_0] border-b border-(--stroke) bg-(--background) grid grid-cols-2 gap-2 py-1 pointer-events-auto"
                        ref={playBoundaryRef}
                      >
                        <small
                          className="text-right overflow-hidden whitespace-nowrap text-ellipsis"
                          ref={NYKPlayRef}
                        >
                          Example of NYK play
                        </small>
                        <small
                          className="text-left overflow-hidden whitespace-nowrap text-ellipsis"
                          ref={SASPlayRef}
                        >
                          Example of OPP play
                        </small>
                      </div>
                      <div className="absolute z-1 top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <h3 className="gameclock pointer-events-auto">
                          {gameClock}
                        </h3>
                        <small className="bg-(--background)">
                          {gameQuarter}
                        </small>
                      </div>
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-(--stroke) opacity-50"
                        style={{ height: topLipHeight }}
                      ></div>
                      <div
                        className="relative border border-(--stroke) bg-(--background) max-h-[calc(100vw*50/94)]"
                        ref={courtHeightDynamicRef}
                        style={{ height: courtHeight }}
                      >
                        <div className="absolute z-1 inset-0 pointer-events-auto">
                          <div
                            className="sas_courts absolute top-0 right-0 w-50/94 flex justify-center"
                            style={{
                              transformOrigin: "bottom right",
                              transform: "rotate(90deg) translate(100%)",
                            }}
                            ref={sasCourtRef}
                          >
                            {/* add other game cards here eventually */}
                            {hasReachedBottom ? (
                              gameVisuals.map((visual, index) => {
                                const SASCourt = visual.sasCourt;
                                return <SASCourt key={`sas-series-${index}`} />;
                              })
                            ) : (
                              <ActiveSASCourt />
                            )}
                          </div>
                          <div
                            className="nyk_courts absolute top-0 left-0 w-50/94 flex justify-center"
                            style={{
                              transformOrigin: "bottom left",
                              transform: "rotate(-90deg) translate(-100%)",
                            }}
                            ref={nykCourtRef}
                          >
                            {/* add other game cards here eventually */}
                            {hasReachedBottom ? (
                              gameVisuals.map((visual, index) => {
                                const NYKCourt = visual.nykCourt;
                                return <NYKCourt key={`nyk-series-${index}`} />;
                              })
                            ) : (
                              <ActiveNYKCourt />
                            )}
                          </div>
                        </div>
                        <Court
                          court={displayedCourtUrl}
                          visible={isCourtVisible}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-4 border-l border-r border-b border-(--stroke)"></div>
                </div>
              </div>
            </div>
            {/* games content */}
            <div
              className="relative z-1 w-full p-4 flex flex-col items-stretch"
              style={{}}
            >
              {/* insert games loop here eventually */}

              {rounds.map((round, roundIndex) => {
                const roundStart = roundStartIndexes[roundIndex] ?? 0;

                return (
                  <React.Fragment key={round.id}>
                    <SeriesCard isInsideSticky={false} series={round.label} />
                    {round.games.map((game, g) => {
                      const gameIndex = roundStart + g;
                      const gameVisual =
                        gameVisuals[gameIndex] ?? gameVisuals[0];
                      const SpreadGraphic = gameVisual.spread;
                      const gameProgress = progressByGame[gameIndex] ?? 0;
                      const firstSeventhGameProgress = Math.min(
                        1,
                        Math.max(0, gameProgress * 7),
                      );

                      return (
                        <div
                          className="relative pointer-events-none"
                          key={game.id}
                        >
                          <GameCard
                            isInsideSticky={false}
                            height={courtHeight + topLipHeight}
                            game={game}
                            scrollProgress={firstSeventhGameProgress}
                          />
                          <div
                            className="relative flex flex-col h-full items-center justify-between"
                            style={{
                              height: `${gameScroll + (gameScroll / 48) * game.ot * 5}vh`,
                            }}
                            ref={(el) => setGameScrollRef(gameIndex, el)}
                          >
                            <div
                              className="sticky z-5 w-full h-0 grid grid-cols-12 pointer-events-auto opacity-70"
                              style={{
                                top: `calc(100dvh - ${topLipHeight + courtHeight + 17}px)`,
                              }}
                            >
                              <small className="[grid-area:1/3/1/3] place-self-end p-0.75 -translate-y-full">
                                30
                              </small>
                              <small className="[grid-area:1/4/1/4] place-self-end p-0.75 -translate-y-full">
                                20
                              </small>
                              <small className="[grid-area:1/5/1/5] place-self-end p-0.75 -translate-y-full">
                                10
                              </small>
                              <small className="[grid-area:1/6/1/6] place-self-end p-0.75 -translate-y-full">
                                0
                              </small>
                              <small className="[grid-area:1/7/1/7] place-self-start p-0.75 -translate-y-full">
                                0
                              </small>
                              <small className="[grid-area:1/8/1/8] place-self-start p-0.75 -translate-y-full">
                                10
                              </small>
                              <small className="[grid-area:1/9/1/9] place-self-start p-0.75 -translate-y-full">
                                20
                              </small>
                              <small className="[grid-area:1/10/1/10] place-self-start p-0.75 -translate-y-full">
                                30
                              </small>
                            </div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-(--stroke)"></div>
                            <GameGrid isInsideSticky={false} ot={game.ot} />
                            <SpreadGraphic spread={game.spread} />
                          </div>
                          <GameRecap
                            isInsideSticky={false}
                            height={courtHeight + topLipHeight}
                            game={game}
                          />
                          <div
                            className="scoreboard absolute left-0 right-0 flex items-stretch flex-col"
                            style={{
                              top: `${courtHeight + topLipHeight}px`,
                              bottom: `${-courtHeight + topLipHeight - 30}px`,
                            }}
                          >
                            <div
                              className="sticky -translate-y-full"
                              style={{
                                inset: `calc(100dvh - 48px) 16px auto 16px`,
                              }}
                            >
                              <GameScoreboard
                                isInsideSticky={false}
                                teamScore={
                                  teamScoreByGame[gameIndex] ??
                                  makeEmptyTeamScore()
                                }
                                opponent={rounds[roundIndex].opponent}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </React.Fragment>
                );
              })}
              <div
                className="relative w-full"
                style={{ height: `${courtHeight + topLipHeight}px` }}
              ></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <footer
        ref={footerRef}
        className="relative z-6 w-full min-h-screen lg:min-h-137.5"
        style={{ height: `calc(100vh - ${courtHeight + topLipHeight + 14}px)` }}
      >
        {/* <div className="absolute inset-[calc(53vw+140px)_0_auto_0] sm:inset-[calc(50vw-160px)_0_auto_0] lg:inset-[-254px_0_auto_0] flex items-center justify-between">
          <div className="flex flex-col xl:flex-row items-center gap-0 xl:gap-8 p-[16px_32px_0_32px] lg:p-2 xl:p-[32px_40px] pointer-events-auto">
            <h2 className="opacity-50">NYK</h2>
            <h2 className="text-(--nyk) text-right">3</h2>
          </div>
          <div className="flex flex-col-reverse xl:flex-row items-center gap-0 xl:gap-8 p-[16px_32px_0_32px] lg:p-2 xl:p-[32px_40px] pointer-events-auto">
            <h2 className="text-(--sas) text-left">4</h2>
            <h2 className="opacity-50">SAS</h2>
          </div>
        </div>
        <div className="absolute top-[calc(53vw-160px)] md:top-50 left-1/2 -translate-x-1/2 w-[calc(100dvw-32px)] sm:w-75 h-75">
          <div className="w-full h-full border border-(--stroke) rounded-xs flex flex-col items-stretch justify-start gap-1 overflow-hidden">
            <div
              className="h-full flex-1 border-b border-(--stroke)"
              style={{
                backgroundImage: `url(/mvp.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex flex-col items-start gap-1 px-2 pb-1.5">
              <h4>Most Valuable Player</h4>
              <p className="smaller text-pretty">
                V. Wembanyama &ensp;
                <span className="opacity-60">
                  27.3 PTS, 10.9 REB, 3.1 AST, 1.4 STL, 2.7 BLK, 48.1 FG%
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-[calc(53vw-175px)_16px_16px_16px] md:inset-[-16px_16px_16px_16px] border-l border-r border-b border-(--stroke)">
          <div className="absolute inset-[auto_0_0_0] p-4 flex items-center justify-between">
            <small>
              by{" "}
              <a
                className="opacity-50 hover:opacity-100 hover:underline cursor-pointer"
                href="https://kiranpa.tel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kiran Patel
              </a>
            </small>
            <small>
              <a
                className="opacity-50 hover:opacity-100 hover:underline cursor-pointer"
                href="https://www.nba.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NBA 2026
              </a>
            </small>
            <small>
              art from{" "}
              <a
                className="opacity-50 hover:opacity-100 hover:underline cursor-pointer"
                href="https://www.statmuse.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stat Muse
              </a>
            </small>
          </div>
        </div> */}
      </footer>
    </main>
  );
}
