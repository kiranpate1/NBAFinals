import type { GameMeta } from "../info/games";
import Image from "next/image";

type props = {
  isInsideSticky: boolean;
  series: string;
};

export default function SeriesCard({ isInsideSticky, series }: props) {
  return (
    <div
      className="relative w-full flex flex-col items-center justify-center gap-2"
      style={{
        height: `200px`,
        opacity: isInsideSticky ? 0 : 1,
        pointerEvents: isInsideSticky ? "none" : "auto",
        backgroundColor: isInsideSticky ? "transparent" : "var(--background)",
      }}
    >
      {series === "Finals" ? (
        <Image src="/finals.png" alt="Finals" width="200" height="100" />
      ) : (
        <h2 className="">{series}</h2>
      )}
    </div>
  );
}
