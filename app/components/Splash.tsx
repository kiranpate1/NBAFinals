import Image from "next/image";

export default function Splash() {
  return (
    <div
      className="splashsection relative z-4 w-full bg-(--background) p-8 transition-[padding] duration-300 ease-in-out flex flex-col items-center gap-4"
      style={{
        height: `100dvh`,
      }}
    >
      <div className="absolute z-1 inset-[56px_48px_auto_48px] flex flex-col items-center gap-2">
        <h1 className="text-(--nyk) text-center text-shadow-[0_5px_0_var(--background)]">
          NY KNICKS
        </h1>
        <h3 className="text-(--stroke) text-center text-shadow-[0_5px_0_var(--background)] opacity-100!">
          2026 Playoffs
        </h3>
      </div>
      <div className="splashimage relative w-full h-full grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 rounded-2xl border border-(--stroke) overflow-hidden">
        <Image
          className="absolute inset-0 object-cover"
          src="/nyc-flat.png"
          alt="NYC flat"
          fill
        />
        <Image
          className="absolute inset-0 object-cover"
          src="/nyc-light.png"
          alt="NYC Light"
          fill
        />
        <Image
          className="absolute inset-0 object-cover"
          src="/nyc-top.png"
          alt="NYC Top"
          fill
        />
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-4 h-2/5 aspect-[1397/885]">
          <Image className="h-full" src="/nyk-pose.png" alt="NYK Pose" fill />
        </div>
      </div>
      <h3>– Scroll to continue –</h3>
    </div>
  );
}
