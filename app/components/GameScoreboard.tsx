type props = {
  teamScore: {
    NYK: number;
    SAS: number;
  };
  opponent: string;
};

export default function GameScoreboard({ teamScore, opponent }: props) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-2 p-2 lg:p-4 pointer-events-auto">
        <div className="h-12 lg:h-30 w-12 lg:w-30 flex items-center justify-center">
          <img className="h-10 lg:h-20" src="/nyk-logo.svg" alt="NYK Logo" />
        </div>
        <h2 className="text-(--nyk) text-right">{teamScore.NYK}</h2>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-0 lg:gap-2 p-2 lg:p-4 pointer-events-auto">
        <h2
          className="text-left"
          style={{ color: `var(--${opponent.toLowerCase()})` }}
        >
          {teamScore.SAS}
        </h2>
        <div className="h-12 lg:h-30 w-12 lg:w-30 flex items-center justify-center">
          <img
            className="h-11 lg:h-22"
            src={`/${opponent.toLowerCase()}-logo.svg`}
            alt={`${opponent} Logo`}
          />
        </div>
      </div>
    </div>
  );
}
