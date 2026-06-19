import Image from "next/image";

export default function Loader() {
  return (
    <div
      id="loader"
      className="fixed z-200 inset-0 pointer-events-none flex flex-col items-center justify-center gap-12 bg-(--background) text-(--nyk)"
    >
      <Image src="/bball.png" alt="Basketball" width={60} height={60} />
      <div className="relative scale-400">
        <svg
          className="relative"
          width="84"
          height="11"
          viewBox="0 0 84 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M82.9959 1.995H84V8.99719H82.9959V1.995ZM81.9984 8.99719H82.9959V9.99469H81.9984V8.99719ZM81.9984 0.9975H82.9959V1.995H81.9984V0.9975ZM2.00156 9.99469H81.9984V10.9987H2.00156V9.99469ZM2.00156 0H81.9984V0.9975H2.00156V0ZM0.9975 8.99719H2.00156V9.99469H0.9975V8.99719ZM0.9975 0.9975H2.00156V1.995H0.9975V0.9975ZM0 1.995H0.9975V8.99719H0V1.995Z"
            fill="currentColor"
          />
        </svg>
        <div className="absolute top-0.5 left-0.5 flex items-stretch">
          <svg
            width="2"
            height="7"
            viewBox="0 0 2 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.9975 1.00406V0H1.99609V7.00219H0.9975V6.00469H0V1.00406H0.9975Z"
              fill="currentColor"
            />
          </svg>
          <div className="bar bg-[currentColor]"></div>
          <svg
            width="3"
            height="7"
            viewBox="0 0 3 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.994141 1.00406H1.9982V2.00156H2.9957V5.00063H1.9982V6.00469H0.994141V7.00219H0V0H0.994141V1.00406Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
