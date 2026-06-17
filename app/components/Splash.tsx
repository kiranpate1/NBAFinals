import Image from "next/image";

export default function Splash() {
  return (
    <div
      className="splashsection relative z-4 w-full bg-(--background) p-8 transition-[padding] duration-300 ease-in-out flex flex-col items-center gap-4"
      style={{
        height: `100dvh`,
      }}
    >
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
      </div>
      <h3>– Scroll to continue –</h3>
    </div>
  );
}
