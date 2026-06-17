import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-6 w-full flex flex-col items-center">
      <div className="relative flex flex-col items-center py-2">
        <div className="trophy relative w-full max-w-30 h-80">
          <Image
            className="object-contain blur-[20px] brightness-100"
            src="/larry.png"
            alt="Finals"
            fill
          />
          <Image
            className="object-contain"
            src="/larry.png"
            alt="Finals"
            fill
          />
        </div>
        <h2>Victory!</h2>
        <h3 className="text-(--nyk)">NYK | 2026 NBA Champions</h3>
      </div>
      <div className="py-16 flex flex-col items-center gap-20">
        <h2>The 2026 New York Knicks</h2>
        <div className="grid grid-cols-[auto_8px_1fr] gap-x-4">
          <h3>Head coach</h3>
          <h3>:</h3>
          <h3>Mike Brown</h3>
          <h3 className="text-(--nyk)">Starters</h3>
          <h3 className="text-(--nyk)">:</h3>
          <h3 className="text-(--nyk) [grid-area:2/3/2/4]">
            PG - Jalen Brunson
          </h3>
          <h3 className="text-(--nyk) [grid-area:3/3/3/4]">
            SG - Mikal Bridges
          </h3>
          <h3 className="text-(--nyk) [grid-area:4/3/4/4]">SF - Josh Hart</h3>
          <h3 className="text-(--nyk) [grid-area:5/3/5/4]">
            PF - O.G. Anunoby
          </h3>
          <h3 className="text-(--nyk) [grid-area:6/3/6/4]">
            C - Karl-Anthony Towns
          </h3>
          <h3 className="text-(--make) [grid-area:7/1/7/2]">Bench</h3>
          <h3 className="text-(--make) [grid-area:7/2/7/3]">:</h3>
          <h3 className="text-(--make) [grid-area:7/3/7/4]">Landry Shamet</h3>
          <h3 className="text-(--make) [grid-area:8/3/8/4]">Miles McBride</h3>
          <h3 className="text-(--make) [grid-area:9/3/9/4]">Jose Alvarado</h3>
          <h3 className="text-(--make) [grid-area:10/3/10/4]">Miles McBride</h3>
          <h3 className="text-(--make) [grid-area:11/3/11/4]">
            Mitchell Robinson
          </h3>
          <h3 className="text-(--make) [grid-area:12/3/12/4]">
            Jordan Clarkson
          </h3>
          <h3 className="text-(--make) [grid-area:13/3/13/4]">Pacôme Dadiet</h3>
          <h3 className="text-(--make) [grid-area:14/3/14/4]">
            Mohamed Diawara
          </h3>
          <h3 className="text-(--make) [grid-area:15/3/15/4]">
            Ariel Hukporti
          </h3>
          <h3 className="text-(--make) [grid-area:16/3/16/4]">Tyler Kolek</h3>
          <h3 className="text-(--make) [grid-area:17/3/17/4]">
            & Jeremy Sochan
          </h3>
          <h3 className="text-yellow-300 [grid-area:18/1/18/2]">President</h3>
          <h3 className="text-yellow-300 [grid-area:18/2/18/3]">:</h3>
          <h3 className="text-yellow-300 [grid-area:18/3/18/4]">Leon Rose</h3>
          <h3 className="text-cyan-300 [grid-area:19/1/19/2]">Gen. manager</h3>
          <h3 className="text-cyan-300 [grid-area:19/2/19/3]">:</h3>
          <h3 className="text-cyan-300 [grid-area:19/3/19/4]">Gersson Rosas</h3>
          <h3 className="text-pink-500 [grid-area:20/1/20/2]">Assist. coach</h3>
          <h3 className="text-pink-500 [grid-area:20/2/20/3]">:</h3>
          <h3 className="text-pink-500 [grid-area:20/3/20/4]">Rick Brunson</h3>
          <h3 className="text-pink-500 [grid-area:21/3/21/4]">Mark Bryant</h3>
          <h3 className="text-pink-500 [grid-area:22/3/22/4]">Darren Erman</h3>
          <h3 className="text-pink-500 [grid-area:23/3/23/4]">Riccardo Fois</h3>
          <h3 className="text-pink-500 [grid-area:24/3/24/4]">
            Brendan O’Connor
          </h3>
          <h3 className="text-pink-500 [grid-area:25/3/25/4]">TJ Saint</h3>
          <h3 className="text-pink-500 [grid-area:26/3/26/4]">Chris Jent</h3>
          <h3 className="text-pink-500 [grid-area:27/3/27/4]">Charles Allen</h3>
          <h3 className="text-pink-500 [grid-area:28/3/28/4]">
            Maurice Cheeks
          </h3>
          <h3 className="text-blue-400 [grid-area:29/1/29/2]">Ambassador</h3>
          <h3 className="text-blue-400 [grid-area:29/2/29/3]">:</h3>
          <h3 className="text-blue-400 [grid-area:29/3/29/4]">Patrick Ewing</h3>
          <h3 className="text-purple-400 [grid-area:30/1/30/2]">Med staff</h3>
          <h3 className="text-purple-400 [grid-area:30/2/30/3]">:</h3>
          <h3 className="text-purple-400 [grid-area:30/3/30/4]">Casey Smith</h3>
          <h3 className="text-purple-400 [grid-area:31/3/31/4]">
            Dr. Daphne Scott
          </h3>
          <h3 className="text-purple-400 [grid-area:32/3/32/4]">
            Dr. Answorth A. Allen
          </h3>
          <h3 className="text-purple-400 [grid-area:33/3/33/4]">
            Dr. Mark Drakos
          </h3>
          <h3 className="text-purple-400 [grid-area:34/3/34/4]">Roger Hinds</h3>
          <h3 className="text-purple-400 [grid-area:35/3/35/4]">
            Anthony Goenaga
          </h3>
          <h3 className="text-purple-400 [grid-area:36/3/36/4]">
            & many more...!
          </h3>
          <h3 className="text-lime-300 [grid-area:37/1/37/4]">Scouts</h3>
          <h3 className="text-lime-300 [grid-area:37/2/37/3]">:</h3>
          <h3 className="text-lime-300 [grid-area:37/3/37/4]">Ryan Borges</h3>
          <h3 className="text-lime-300 [grid-area:38/3/38/4]">
            Larry Harrison
          </h3>
          <h3 className="text-lime-300 [grid-area:39/3/39/4]">
            Reggie Johnson
          </h3>
          <h3 className="text-lime-300 [grid-area:40/3/40/4]">
            Alvydas Pazdrazdis
          </h3>
          <h3 className="text-lime-300 [grid-area:41/3/41/4]">David Sevush</h3>
          <h3 className="text-lime-300 [grid-area:42/3/42/4]">TJ Zanin</h3>
          <h3 className="text-indigo-400 [grid-area:43/1/43/2]">Security</h3>
          <h3 className="text-indigo-400 [grid-area:43/2/43/3]">:</h3>
          <h3 className="text-indigo-400 [grid-area:43/3/43/4]">
            Charlie Duffy
          </h3>
          <h3 className="text-indigo-400 [grid-area:44/3/44/4]">
            Rod Williams
          </h3>
          <h3 className="text-indigo-400 [grid-area:45/3/45/4]">
            Timothy Rylko
          </h3>
          <h3 className="text-rose-400 [grid-area:46/1/46/2]">Media</h3>
          <h3 className="text-rose-400 [grid-area:46/2/46/3]">:</h3>
          <h3 className="text-rose-400 [grid-area:46/3/46/4]">Tyler Murray</h3>
          <h3 className="text-rose-400 [grid-area:47/3/47/4]">Monica McNutt</h3>
          <h3 className="text-rose-400 [grid-area:48/3/48/4]">Mike Breen</h3>
          <h3 className="text-rose-400 [grid-area:49/3/49/4]">Walt Frazier</h3>
          <h3 className="[grid-area:50/3/50/4]">And many more...!</h3>
          <h3 className="text-(--stroke) [grid-area:51/1/53/2] mt-50">
            Direction,
            <br />
            design, art, &
            <br />
            development
          </h3>
          <h3 className="text-(--stroke) [grid-area:51/2/51/3] mt-50">:</h3>
          <h3 className="text-(--stroke) [grid-area:51/3/51/4] mt-50">
            <a
              className="underline hover:text-(--stroke-light)"
              href="https://www.kiranpa.tel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kiran Patel
            </a>
          </h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image src="/nyk-logo.png" alt="NYK logo" width={100} height={100} />
          <p className="text-(--nyk)">
            © 2026 New York Knicks all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
