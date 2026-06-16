import { useId, useMemo } from "react";
import type { GameMeta } from "../info/games";
import Image from "next/image";
import gradients from "./gradients";

type props = {
  isInsideSticky: boolean;
  height: number;
  game: GameMeta;
};

export default function GameCard({ isInsideSticky, height, game }: props) {
  return (
    <div
      className="relative z-1 w-full flex justify-center p-6"
      style={{
        height: height + 40,
        opacity: isInsideSticky ? 0 : 1,
        pointerEvents: isInsideSticky ? "none" : "auto",
        backgroundColor: isInsideSticky ? "transparent" : "var(--background)",
      }}
    >
      <div className="relative w-full max-w-115 h-full flex flex-col border border-(--stroke-light) rounded-2xl overflow-hidden">
        <div className="flex-1 relative h-full flex flex-col items-center justify-start gap-2 pt-4">
          <div className="absolute inset-0 flex items-stretch border-b border-(--stroke-light)">
            <div className="flex-1 relative">
              <Image
                src={game.info.headline.imageUrl}
                alt="Game image"
                fill
                className="object-cover object-bottom"
              />
            </div>
            <div className="w-px bg-(--stroke-light)"></div>
            <div className="flex-1 relative"></div>
          </div>
          <h3 className="relative text-shadow-[0_5px_0_var(--background)]">
            Game {game.game}
          </h3>
          {/* <small>{game.arena}</small> */}
        </div>
        <div className="py-2 px-3 rounded-tl-2xl rounded-tr-2xl bg-(--background) flex justify-center">
          <p>
            {game.date} {game.time} @ {game.arena}
          </p>
        </div>
      </div>
    </div>
  );
}

{
  /* <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="100" fill="url(#paint0_linear_1811_1557)"/>
<defs>
<linearGradient id="paint0_linear_1811_1557" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
<stop stop-color="#023D6D"/>
<stop offset="0.356819" stop-color="#306993"/>
<stop offset="0.509117" stop-color="#57809F"/>
<stop offset="0.645951" stop-color="#8092A5"/>
<stop offset="0.702694" stop-color="#969AA0"/>
<stop offset="0.754461" stop-color="#AB9D92"/>
<stop offset="0.794085" stop-color="#BD9F86"/>
<stop offset="0.825401" stop-color="#CB9C79"/>
<stop offset="0.855119" stop-color="#DB9869"/>
<stop offset="0.882281" stop-color="#E29155"/>
<stop offset="0.906247" stop-color="#E68842"/>
<stop offset="0.938858" stop-color="#E9752F"/>
<stop offset="0.96285" stop-color="#E65E27"/>
<stop offset="0.985552" stop-color="#D14021"/>
<stop offset="1" stop-color="#B3301D"/>
</linearGradient>
</defs>
</svg> */
}
