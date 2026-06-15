import type { GameMeta } from "../info/games";
import PlayerCard from "./PlayerCard";
import Image from "next/image";

type props = {
  isInsideSticky: boolean;
  height: number;
  game: GameMeta;
};

export default function GameRecap({ isInsideSticky, height, game }: props) {
  const gameInfo = game.info;
  return (
    <div
      className="relative w-full lg:grid lg:grid-cols-[275px_1fr_275px] border-b border-[color-mix(in_srgb,var(--stroke)_20%,var(--background)_80%)]"
      style={{
        height: `${height}px`,
        opacity: isInsideSticky ? 0 : 1,
        pointerEvents: isInsideSticky ? "none" : "auto",
      }}
    >
      <div className="w-full h-full flex justify-center lg:[grid-area:1/2/2/3]">
        <div className="w-full h-full max-w-225 grid grid-cols-6 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-2 p-2">
          <div className="[grid-area:2/1/2/4] lg:[grid-area:1/1/1/2]">
            <PlayerCard info={gameInfo.nykPlayer} />
          </div>
          <div className="[grid-area:1/2/1/6] lg:[grid-area:1/2/1/3] flex justify-center">
            <div className="relative w-full max-w-37.5 lg:max-w-none h-full p-4 border border-[color-mix(in_srgb,var(--stroke)_20%,var(--background)_80%)] rounded-xs flex flex-col items-center justify-start">
              <h3
                className="text-center text-pretty"
                style={{ color: "var(--nyk)" }}
              >
                {gameInfo.headline.print}
              </h3>
              <Image
                className="absolute inset-[auto_0_0_0]"
                src="/city-bg.png"
                alt="City background"
                width={300}
                height={100}
              />
            </div>
          </div>
          <div className="[grid-area:2/4/2/7] lg:[grid-area:1/3/1/4]">
            <PlayerCard info={gameInfo.sasPlayer} />
          </div>
        </div>
      </div>
    </div>
  );
}
