import type { GameMeta } from "../info/games";

type props = {
  isInsideSticky: boolean;
  height: number;
  game: GameMeta;
};

export default function GameCard({ isInsideSticky, height, game }: props) {
  return (
    <div
      className="relative z-1 w-full flex flex-col items-center justify-center gap-2"
      style={{
        height: `${height}px`,
        opacity: isInsideSticky ? 0 : 1,
        pointerEvents: isInsideSticky ? "none" : "auto",
        backgroundColor: isInsideSticky ? "transparent" : "var(--background)",
      }}
    >
      <h3 className="">Game {game.game}</h3>
      <p>{game.date}</p>
      <small>{game.arena}</small>
    </div>
  );
}
