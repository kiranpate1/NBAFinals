import React from "react";

type props = {
  team: "NYK" | "OPP";
  players: {
    name: string;
    position: string;
  }[];
  boxStats: {
    [team in "NYK" | "OPP"]: {
      [playerName: string]: {
        pts: number;
        fgMade: number;
        fgAtt: number;
        reb: number;
        ast: number;
        threePtMade: number;
        threePtAtt: number;
        stl: number;
        blk: number;
      };
    };
  };
};

function BoxScore({ team, players, boxStats }: props) {
  return (
    <div className="w-full h-full flex flex-col items-stretch">
      <div className="grid grid-cols-[1fr_32px_40px_32px_32px_32px_32px_32px] h-6.5 pl-1.5 border-b border-(--stroke) text-(--stroke) min-w-95">
        <small className="self-center justify-self-start">Player</small>
        <small className="place-self-center">PTS</small>
        <small className="place-self-center">FG</small>
        <small className="place-self-center">REB</small>
        <small className="place-self-center">AST</small>
        <small className="place-self-center">3PT</small>
        <small className="place-self-center">STL</small>
        <small className="place-self-center">BLK</small>
      </div>
      <div className="w-full h-full flex flex-col items-stretch overflow-x-scroll overflow-y-scroll">
        {players.map((player, i) => (
          <div
            className="grid grid-cols-[1fr_32px_40px_32px_32px_32px_32px_32px] py-0.5 pl-1.5 border-b border-[color-mix(in_srgb,var(--background)_50%,var(--stroke)_15%)] text-(--stroke) min-w-95"
            key={player.name}
          >
            <p className="smaller self-center justify-self-start">
              {player.name[0]}. {player.name.split(" ")[1]}
              &ensp;
              {i < 5 && (
                <span style={{ opacity: 0.5 }}>{player.position[0]}</span>
              )}
            </p>
            <h4 className="smaller place-self-center">
              {boxStats[team][player.name]?.pts ?? 0}
            </h4>
            <h4 className="smaller place-self-center">
              {(boxStats[team][player.name]?.fgMade ?? 0) +
                "-" +
                (boxStats[team][player.name]?.fgAtt ?? 0)}
            </h4>
            <h4 className="smaller place-self-center">
              {boxStats[team][player.name]?.reb ?? 0}
            </h4>
            <h4 className="smaller place-self-center">
              {boxStats[team][player.name]?.ast ?? 0}
            </h4>
            <h4 className="smaller place-self-center">
              {(boxStats[team][player.name]?.threePtMade ?? 0) +
                "-" +
                (boxStats[team][player.name]?.threePtAtt ?? 0)}
            </h4>
            <h4 className="smaller place-self-center">
              {boxStats[team][player.name]?.stl ?? 0}
            </h4>
            <h4 className="smaller place-self-center">
              {boxStats[team][player.name]?.blk ?? 0}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(BoxScore);
