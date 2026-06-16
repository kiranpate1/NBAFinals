import type { GameMeta, RoundMeta } from "../info/games";
import PlayerCard from "./PlayerCard";
import Image from "next/image";

type props = {
  isInsideSticky: boolean;
  height: number;
  game: GameMeta;
  round: RoundMeta;
};

export default function GameRecap({
  isInsideSticky,
  height,
  game,
  round,
}: props) {
  const gameInfo = game.info;
  return (
    <div
      className="relative w-full flex flex-col items-center pb-6 pt-4 border-b border-(--stroke-light)"
      style={{
        height: height + 40,
        opacity: isInsideSticky ? 0 : 1,
        pointerEvents: isInsideSticky ? "none" : "auto",
      }}
    >
      <h3 className="text-center text-pretty" style={{ color: "var(--nyk)" }}>
        {gameInfo.headline.print}
      </h3>
      <div className="w-full h-full flex justify-center">
        <div className="w-full max-w-115 h-full grid grid-cols-2 gap-2">
          <div className="">
            <PlayerCard info={gameInfo.nykPlayer} />
          </div>
          <div className="">
            <PlayerCard info={gameInfo.oppPlayer} round={round} />
          </div>
        </div>
      </div>
    </div>
  );
}
