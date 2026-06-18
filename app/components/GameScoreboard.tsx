import Image from "next/image";

type props = {
  isInsideSticky: boolean;
  teamScore: {
    NYK: number;
    OPP: number;
  };
  opponent: string;
};

export default function GameScoreboard({
  isInsideSticky,
  teamScore,
  opponent,
}: props) {
  return (
    <div className="flex justify-between items-center -translate-y-8 lg:translate-y-0">
      <div className="w-auto lg:w-25 xl:w-auto flex flex-col xl:flex-row items-center gap-0 xl:gap-2 p-2 2xl:p-4 pointer-events-auto">
        <div className="h-12 xl:h-30 w-12 xl:w-30 flex items-center justify-center">
          <Image
            className="h-10 xl:h-20 object-contain"
            src="/nyk-logo.png"
            alt="NYK Logo"
            width={80}
            height={80}
          />
        </div>
        <h2 className="text-(--nyk) text-right">{teamScore.NYK}</h2>
      </div>
      <div className="w-auto lg:w-25 xl:w-auto flex flex-col-reverse xl:flex-row items-center gap-0 xl:gap-2 p-2 2xl:p-4 pointer-events-auto">
        <h2
          className="text-left"
          style={{
            color: `var(--${opponent.toLowerCase()})`,
          }}
        >
          {teamScore.OPP}
        </h2>
        <div className="h-12 xl:h-30 w-12 xl:w-30 flex items-center justify-center">
          <Image
            className="h-11 xl:h-22 object-contain"
            src={`/${opponent.toLowerCase()}-logo.png`}
            alt={`${opponent} Logo`}
            width={88}
            height={88}
          />
        </div>
      </div>
    </div>
  );
}
