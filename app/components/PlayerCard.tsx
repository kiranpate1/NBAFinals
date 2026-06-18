type props = {
  info: {
    name: string;
    description: string;
    imageUrl: string;
  };
  round?: {
    opponent: string;
  };
};

export default function PlayerCard({ info, round }: props) {
  return (
    <div className="w-full h-full border border-(--stroke-light) rounded-2xl flex flex-row sm:flex-col items-center sm:items-stretch justify-stretch sm:justify-start gap-1 overflow-hidden">
      <div
        className="min-w-20 sm:min-w-full h-full flex-1 bg-bottom sm:bg-center"
        style={{
          backgroundColor: round
            ? `var(--${round.opponent.toLowerCase()})`
            : "var(--nyk)",
          backgroundImage: `url(${info.imageUrl})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-full sm:w-auto flex flex-col items-start gap-1 px-2 py-1.5">
        <small className="text-(--stroke) text-left">Top performer</small>
        <p className="smaller text-left text-pretty">
          {`${info.name[0]}. ${
            info.name.split(" ")[info.name.split(" ").length - 1]
          }`}
          &ensp;&ensp;-&ensp;&ensp;
          <span className="opacity-60">{info.description}</span>
        </p>
      </div>
    </div>
  );
}
