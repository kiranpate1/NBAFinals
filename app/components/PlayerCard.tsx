type props = {
  info: {
    name: string;
    description: string;
    imageUrl: string;
  };
};

export default function PlayerCard({ info }: props) {
  return (
    <div className="w-full h-full border border-[color-mix(in_srgb,var(--stroke)_20%,var(--background)_80%)] rounded-xs flex flex-row lg:flex-col items-center lg:items-stretch justify-stretch lg:justify-start gap-1 overflow-hidden">
      <div
        className="hidden sm:block max-w-40 lg:max-w-none h-full flex-1 border-r lg:border-r-0 lg:border-b border-[color-mix(in_srgb,var(--stroke)_20%,var(--background)_80%)]"
        style={{
          backgroundImage: `url(${info.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="w-full sm:w-auto flex flex-col items-center sm:items-start gap-1 p-2">
        <small className="text-(--stroke) text-center sm:text-left">
          Top performer
        </small>
        <p className="smaller text-center sm:text-left text-pretty">
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
