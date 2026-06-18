import Image from "next/image";

export default function Splash() {
  return (
    <div
      className="splashsection relative z-4 w-full bg-(--background) p-4 sm:p-8 transition-[padding] duration-300 ease-in-out flex flex-col items-center gap-4"
      style={{
        height: `100dvh`,
      }}
    >
      <div className="absolute z-1 inset-[48px_32px_auto_32px] sm:inset-[56px_48px_auto_48px] flex flex-col items-center gap-2">
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
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-2/5 max-w-full aspect-1397/885">
          <Image
            className="w-full h-full object-contain object-bottom"
            src="/nyk-pose.png"
            alt="NYK Pose"
            fill
          />
        </div>
      </div>
      <p className="hidden sm:block text-(--stroke) absolute bottom-8 left-8">
        A{" "}
        <a
          className="underline hover:text-(--stroke-light)"
          href="https://www.kiranpa.tel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kiran Patel
        </a>{" "}
        Production
      </p>
      <h3>– Scroll to continue –</h3>
      <p className="hidden sm:block text-(--stroke) absolute bottom-8 right-8">
        2026
      </p>
    </div>
  );
}
