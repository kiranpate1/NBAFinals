import { games } from "../info/games";
import Image from "next/image";

type props = {
  scrollToGameStart: (gameIndex: number) => void;
  gameIndex: number;
  isActiveGame: boolean;
  progressByGame: number[];
  score: { NYK: number; OPP: number };
  gameClock: string;
  gameQuarter: string;
  round: { opponent: string };
  game: { game: number; ot?: number };
  splashTransition: string;
  progressColor?: string;
};

export default function NavGameCard({
  scrollToGameStart,
  gameIndex,
  isActiveGame,
  progressByGame,
  score,
  gameClock,
  gameQuarter,
  round,
  game,
  progressColor = "var(--stroke)",
}: props) {
  return (
    <button
      type="button"
      className="relative w-full h-20 flex flex-col items-stretch hover:saturate-150 overflow-hidden cursor-pointer transition-colors duration-150"
      onClick={() => scrollToGameStart(gameIndex)}
      style={{
        color:
          isActiveGame && progressColor === "var(--sas)" ? "black" : "inherit",
      }}
      // style={{ backgroundColor: navBackgroundColor }}
    >
      <svg
        className="absolute"
        width="100%"
        height="100%"
        viewBox="0 0 234 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="4"
          width="226"
          height="72"
          rx="13"
          fill="#D9D9D9"
          style={{
            fill: isActiveGame
              ? progressColor
              : score.NYK === score.OPP && !isActiveGame
                ? "color-mix(in srgb, var(--background) 50%, var(--stroke) 5%)"
                : "var(--background)",
          }}
        />
        <path
          d="M117 0.75H217.25C226.087 0.75 233.25 7.91344 233.25 16.75V63.25C233.25 72.0866 226.087 79.25 217.25 79.25H117"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            stroke: progressColor,
            strokeDasharray: 300,
            strokeDashoffset:
              300 -
              Math.min(1, Math.max(0, progressByGame[gameIndex] ?? 0)) * 300,
            // filter: "saturate(1.5)",
          }}
        />
        <path
          d="M117 0.75H16.75C7.91344 0.75 0.749998 7.91344 0.749998 16.75V63.25C0.749998 72.0866 7.91344 79.25 16.75 79.25H117"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            stroke: progressColor,
            strokeDasharray: 300,
            strokeDashoffset:
              300 -
              Math.min(1, Math.max(0, progressByGame[gameIndex] ?? 0)) * 300,
            // filter: "saturate(1.5)",
          }}
        />
      </svg>
      <div className="relative flex-1 grid grid-cols-[1fr_68px_1fr] items-center px-7">
        <div
          className="flex items-center justify-start gap-1"
          style={{
            opacity: isActiveGame ? 1 : score.NYK > score.OPP ? 1 : 0.5,
          }}
        >
          <div className="relative w-6 h-6">
            <Image
              src={"/nyk-logo.png"}
              alt="NYK logo"
              className="hidden sm:block object-contain"
              fill
            />
          </div>
          <p>{score.NYK === score.OPP && !isActiveGame ? "" : score.NYK}</p>
        </div>
        {isActiveGame ? (
          <div className="flex flex-col items-center gap-0.75">
            <h4 className="text-sm!">{gameClock}</h4>
            <small>{gameQuarter}</small>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-0.75">
            <p>
              {score.NYK === score.OPP
                ? games[gameIndex].date
                : `Final${game.ot ? "/OT" : ""}`}
            </p>
            <small>
              {score.NYK === score.OPP
                ? games[gameIndex].time
                : games[gameIndex].date}
            </small>
          </div>
        )}
        <div
          className="flex items-center justify-end gap-1"
          style={{
            opacity: isActiveGame ? 1 : score.OPP > score.NYK ? 1 : 0.5,
          }}
        >
          <p>{score.NYK === score.OPP && !isActiveGame ? "" : score.OPP}</p>
          <div className="relative w-6 h-6">
            <Image
              src={`/${round.opponent.toLowerCase()}-logo.png`}
              alt={`${round.opponent} logo`}
              className="hidden sm:block object-contain"
              fill
            />
          </div>
        </div>
      </div>
      {isActiveGame && (
        <div
          className="absolute bottom-2 left-4 right-4 h-1 grid duration-200 ease-in-out"
          style={{
            gridTemplateColumns: `12fr 12fr 12fr 12fr ${game.ot ? (progressByGame[gameIndex] > 48 / (48 + game.ot * 5) ? `${game.ot * 5}fr` : "0fr") : ""}`,
          }}
        >
          {[...Array(game.ot ? 4 + game.ot : 4)].map((_, i) => (
            <div
              className="h-full"
              style={{
                paddingLeft: i === 0 ? 0 : 2,
              }}
              key={i}
            >
              <div
                className="h-full w-full rounded-xs overflow-hidden"
                style={{
                  backgroundColor:
                    progressColor === "var(--sas)"
                      ? "rgba(0,0,0,0.25)"
                      : "rgba(255,255,255,0.25)",
                }}
                key={i}
              >
                <div
                  className="h-full rounded-xs"
                  style={{
                    backgroundColor:
                      progressColor === "var(--sas)" ? "black" : "white",
                    width: `${Math.min(100, Math.max(0, (progressByGame[gameIndex] ?? 0) * (game.ot ? 4 + (game.ot / 12) * 5 : 4) * (i > 3 ? (12 / 5) * 100 : 100) - i * (i > 3 ? (12 / 5) * 100 : 100)))}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </button>
  );
}
