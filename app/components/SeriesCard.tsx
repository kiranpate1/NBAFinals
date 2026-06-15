import Image from "next/image";

type props = {
  isInsideSticky: boolean;
  seriesInfo: {
    label: string;
    opponent: string;
    opponentName: string;
  };
};

export default function SeriesCard({ isInsideSticky, seriesInfo }: props) {
  const lineupHeight = "78%";

  return (
    <div
      className="relative w-full grid grid-cols-[1fr_auto_1fr] items-stretch border-b border-(--stroke)"
      style={{
        height: `200px`,
        opacity: isInsideSticky ? 0 : 1,
        pointerEvents: isInsideSticky ? "none" : "auto",
        backgroundColor: isInsideSticky ? "transparent" : "var(--background)",
      }}
    >
      <div className="relative w-full h-full">
        <div
          className="absolute inset-x-0 bottom-0"
          style={{ height: lineupHeight }}
        >
          <Image
            className="object-contain object-bottom"
            src="/nyk-lineup.png"
            alt="NYK lineup"
            fill
            sizes="(max-width: 640px) 35vw, 30vw"
          />
        </div>
      </div>
      <div className="pb-4 flex flex-col items-center justify-center">
        {seriesInfo.label === "Finals" ? (
          <Image src="/finals.png" alt="Finals" width="200" height="100" />
        ) : (
          <>
            <h2 className="-mb-2">{seriesInfo.label}</h2>
            <div className="w-4 h-px border-t border-(--stroke) mb-2"></div>
            <h3
              style={{ color: `var(--${seriesInfo.opponent.toLowerCase()})` }}
            >
              vs. {seriesInfo.opponentName}
            </h3>
          </>
        )}
      </div>
      <div className="relative w-full h-full">
        <div
          className="absolute inset-x-0 bottom-0"
          style={{ height: lineupHeight }}
        >
          <Image
            className="object-contain object-bottom"
            src={`/${seriesInfo.opponent.toLowerCase()}-lineup.png`}
            alt={`${seriesInfo.opponent} lineup`}
            fill
            sizes="(max-width: 640px) 35vw, 30vw"
          />
        </div>
      </div>
    </div>
  );
}
