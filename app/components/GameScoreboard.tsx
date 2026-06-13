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
    <div className="flex justify-between items-center">
      <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-2 p-2 lg:p-4 pointer-events-auto">
        <div className="h-12 lg:h-30 w-12 lg:w-30 flex items-center justify-center">
          <Image
            className="h-10 lg:h-20 object-contain"
            src="/nyk-logo.png"
            alt="NYK Logo"
            width={80}
            height={80}
          />
        </div>
        <h2 className="text-(--nyk) text-right">{teamScore.NYK}</h2>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-0 lg:gap-2 p-2 lg:p-4 pointer-events-auto">
        <h2
          className="text-left"
          style={{
            color: `var(--${opponent.toLowerCase()})`,
          }}
        >
          {teamScore.OPP}
        </h2>
        <div className="h-12 lg:h-30 w-12 lg:w-30 flex items-center justify-center">
          <Image
            className="h-11 lg:h-22 object-contain"
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
