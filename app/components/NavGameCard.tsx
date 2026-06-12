import { games } from "../info/games";

type props = {
  scrollToGameStart: (gameIndex: number) => void;
  gameIndex: number;
  isActiveGame: boolean;
  progressByGame: number[];
  score: { NYK: number; OPP: number };
  gameClock: string;
  gameQuarter: string;
  round: { opponent: string };
  game: { game: number };
  isInsideSplash: boolean;
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
  isInsideSplash,
  splashTransition,
  progressColor = "var(--stroke)",
}: props) {
  return (
    <button
      type="button"
      className="relative w-full h-20 flex flex-col items-stretch hover:opacity-60 overflow-hidden cursor-pointer transition-colors duration-150"
      onClick={() => scrollToGameStart(gameIndex)}
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
        <path
          d="M229.5 0.5H117H4.48291C2.28321 0.5 0.5 2.26848 0.5 4.45V75.55C0.5 77.7315 2.28321 79.5 4.48291 79.5H117H229.5C231.709 79.5 233.5 77.7091 233.5 75.5V4.5C233.5 2.29086 231.709 0.5 229.5 0.5Z"
          style={{
            stroke: isActiveGame
              ? `color-mix(in srgb, var(--background) 88%, ${progressColor} 20%)`
              : "rgba(0,0,0,0.25)",
            fill: isActiveGame
              ? `color-mix(in srgb, var(--background) 88%, ${progressColor} 6%)`
              : "var(--background)",
          }}
        />
        <path
          d="M117 0.5H229.5C231.709 0.5 233.5 2.29086 233.5 4.5V75.5C233.5 77.7091 231.709 79.5 229.5 79.5H117"
          style={{
            stroke: progressColor,
            strokeDasharray: 309,
            strokeDashoffset:
              309 -
              Math.min(1, Math.max(0, progressByGame[gameIndex] ?? 0)) * 309,
            filter: "saturate(1.5)",
          }}
        />
        <path
          d="M117 0.5H4.50001C2.29087 0.5 0.500003 2.29086 0.500003 4.5V75.5C0.500003 77.7091 2.29086 79.5 4.5 79.5H117"
          style={{
            stroke: progressColor,
            strokeDasharray: 309,
            strokeDashoffset:
              309 -
              Math.min(1, Math.max(0, progressByGame[gameIndex] ?? 0)) * 309,
            filter: "saturate(1.5)",
          }}
        />
      </svg>

      {/* <div className="h-2 xl:h-3 overflow-hidden p-0 xl:p-0.5">
        <div
          className="h-full"
          style={{
            width: "100%",
            transformOrigin: "left center",
            transform: `scaleX(${Math.min(
              1,
              Math.max(0, progressByGame[gameIndex] ?? 0),
            )})`,
            backgroundColor: progressColor,
          }}
        ></div>
      </div> */}
      <div className="relative flex-1 grid grid-cols-[1fr_68px_1fr] items-center px-7">
        <div
          className="flex items-center justify-start gap-1"
          style={{
            opacity: isActiveGame ? 1 : score.NYK > score.OPP ? 1 : 0.5,
          }}
        >
          <img
            src={"/nyk-logo.svg"}
            alt="NYK logo"
            className="hidden sm:block max-h-4"
          />
          <p>{score.NYK === score.OPP && !isActiveGame ? "" : score.NYK}</p>
        </div>
        {isActiveGame ? (
          <div className="flex flex-col items-center gap-1">
            <h4 className="text-sm!">{gameClock}</h4>
            <small>{gameQuarter}</small>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <p>{score.NYK === score.OPP ? games[gameIndex].date : "Final"}</p>
            <small>
              {score.NYK === score.OPP
                ? games[gameIndex].time
                : games[gameIndex].date}
            </small>
          </div>
        )}
        {/* <h3
          className="text-(--stroke) opacity-25"
          style={{
            transition: splashTransition,
            transform: isInsideSplash ? "scale(0.8)" : "scale(1.25)",
          }}
        >
          G{isInsideSplash ? "7pm" : game.game}
        </h3> */}
        <div
          className="flex items-center justify-end gap-1"
          style={{
            opacity: isActiveGame ? 1 : score.OPP > score.NYK ? 1 : 0.5,
          }}
        >
          <p>{score.NYK === score.OPP && !isActiveGame ? "" : score.OPP}</p>
          <img
            src={`/${round.opponent.toLowerCase()}-logo.svg`}
            alt={`${round.opponent} logo`}
            className="hidden sm:block max-h-4"
          />
        </div>
      </div>
    </button>
  );
}
