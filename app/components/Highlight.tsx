import Image from "next/image";

type props = {
  info: {
    team: "NYK" | "OPP";
    teamLabel: string;
    player: {
      name: string;
      position: string;
      number: number;
      imageUrl: string;
    };
    play: string;
    time: string;
    quarter: string;
    distance: string;
    result: "made" | "miss" | "other";
  };
};

export default function Highlight({ info }: props) {
  const playRaw = info.play;
  const playNoName = playRaw.substring(info.play.indexOf(" ") + 1);
  const description = playNoName.split("(")[0].trim();
  const matches = playNoName.match(/\(([^)]+)\)/g);

  let points = "";
  let assist = "";

  if (matches) {
    points = matches[0].replace(/[()]/g, "").replace(" PTS", "");
    if (matches.length >= 2) {
      assist = matches[1]
        .replace(/[()]/g, "")
        .replace(/(.+)\s(\d+)\sAST/, "$1 ($2)");
    }
  }

  return (
    <div className="w-full h-35.5 grid grid-cols-[0.9fr_1fr] gap-2 p-1 border border-(--stroke) rounded-xs overflow-hidden pointer-events-auto">
      <div className="flex flex-col items-stretch">
        <div className="flex-1 border border-(--stroke) rounded-xs overflow-hidden">
          <Image
            className="w-[150%] h-[130%] object-cover"
            style={{
              backgroundColor: `var(--${info.teamLabel.toLowerCase()})`,
            }}
            src={info.player.imageUrl || "/placeholder-player.png"}
            alt={info.player.name}
            width={100}
            height={100}
          />
        </div>
        <div className="p-1 flex flex-col gap-0.5">
          <p className="smaller">
            {info.player.name[0]}.{" "}
            {
              info.player.name.split(" ")[
                info.player.name.split(" ").length - 1
              ]
            }
          </p>
          <small className="flex items-center gap-1">
            <span className="opacity-60">{info.teamLabel} | </span>#
            {info.player.number} - {info.player.position}
          </small>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-1 p-0">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <h4 className="text-sm! bg-gray-600 px-1 pt-px rounded-sm">
              {info.time}
            </h4>
            <small>{info.quarter}</small>
          </div>
          <p className="text-(--stroke) leading-[120%] text-pretty">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="smaller opacity-70">
            {points.length > 0 ? `PTS: ${points}` : ""}
          </p>
          <p className="smaller opacity-70">
            {assist.length > 0 ? `AST: ${assist}` : "Unassisted"}
          </p>
        </div>
      </div>
    </div>
  );
}
