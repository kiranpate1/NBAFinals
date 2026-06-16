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
      className="relative w-full grid grid-cols-[1fr_auto_1fr] items-stretch border-b border-(--stroke-light) overflow-hidden"
      style={{
        height: seriesInfo.label === "Finals" ? 320 : 240,
        opacity: isInsideSticky ? 0 : 1,
        pointerEvents: isInsideSticky ? "none" : "auto",
        backgroundColor: isInsideSticky ? "transparent" : "var(--background)",
      }}
    >
      <div className="absolute inset-[0_50%_0_auto] w-full bg-(--nyk) -skew-x-35"></div>
      <div
        className="absolute inset-[0_auto_0_50%] w-full -skew-x-35"
        style={{
          backgroundColor: `var(--${seriesInfo.opponent.toLowerCase()})`,
        }}
      ></div>
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
      {seriesInfo.label === "Finals" ? (
        <div className="relative flex flex-col items-center text-black py-2">
          <div className="trophy relative w-full max-w-30 h-full">
            <Image
              className="object-contain blur-[20px] brightness-200"
              src="/larry.png"
              alt="Finals"
              fill
            />
            <Image
              className="object-contain"
              src="/larry.png"
              alt="Finals"
              fill
            />
          </div>
          <h3>NBA Finals</h3>
          <b>vs. San Antonio Spurs</b>
        </div>
      ) : (
        <div className="relative pb-6 flex flex-col items-center justify-center">
          <h2 className="-mb-2">{seriesInfo.label}</h2>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-px border-t border-(--stroke)"></div>
            <h3>vs.</h3>
            <div className="w-4 h-px border-t border-(--stroke)"></div>
          </div>
          <h3>{seriesInfo.opponentName}</h3>
        </div>
      )}
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
