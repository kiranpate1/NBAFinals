type RecapInfo = {
  headline: {
    print: string;
    text: string;
    imageUrl: string;
  };
  nykPlayer: {
    name: string;
    description: string;
    imageUrl: string;
  };
  sasPlayer: {
    name: string;
    description: string;
    imageUrl: string;
  };
};

export type GameMeta = {
  id: string;
  round: 1 | 2 | 3 | 4;
  game: number;
  awayTeam: string;
  homeTeam: string;
  arena: string;
  date: string;
  courtImageUrl: string;
  ot: number;
  spread: number;
  info: RecapInfo;
};

export type RoundMeta = {
  id: "round1" | "round2" | "round3" | "finals";
  label: string;
  opponent: string;
  games: GameMeta[];
};

const makeRecapInfo = (
  print: string,
  text: string,
  imageUrl: string,
): RecapInfo => ({
  headline: { print, text, imageUrl },
  nykPlayer: {
    name: "Jalen Brunson",
    description: "31 PTS, 8-14 3PT, 58% FG",
    imageUrl: "/brunson.png",
  },
  sasPlayer: {
    name: "Victor Wembanyama",
    description: "41 PTS, 24 REB, 56% FG",
    imageUrl: "/wemby.png",
  },
});

export const rounds: RoundMeta[] = [
  {
    id: "round1",
    label: "Round 1",
    opponent: "ATL",
    games: [
      {
        id: "r1g1",
        round: 1,
        game: 1,
        awayTeam: "NYK",
        homeTeam: "ATL",
        arena: "Round 1",
        date: "Game 1",
        courtImageUrl: "/nyk-court.png",
        ot: 0,
        spread: 20,
        info: makeRecapInfo(
          "ROUND 1 - GAME 1",
          "Knicks open against the Hawks.",
          "/g1.png",
        ),
      },
      {
        id: "r1g2",
        round: 1,
        game: 2,
        awayTeam: "NYK",
        homeTeam: "ATL",
        arena: "Round 1",
        date: "Game 2",
        courtImageUrl: "/nyk-court.png",
        ot: 0,
        spread: 15,
        info: makeRecapInfo(
          "ROUND 1 - GAME 2",
          "Series continues in Atlanta.",
          "/g2.png",
        ),
      },
      {
        id: "r1g3",
        round: 1,
        game: 3,
        awayTeam: "ATL",
        homeTeam: "NYK",
        arena: "Round 1",
        date: "Game 3",
        courtImageUrl: "/atl-court.png",
        ot: 0,
        spread: 20,
        info: makeRecapInfo(
          "ROUND 1 - GAME 3",
          "Knicks return home for Game 3.",
          "/g3.png",
        ),
      },
      {
        id: "r1g4",
        round: 1,
        game: 4,
        awayTeam: "ATL",
        homeTeam: "NYK",
        arena: "Round 1",
        date: "Game 4",
        courtImageUrl: "/atl-court.png",
        ot: 0,
        spread: 25,
        info: makeRecapInfo(
          "ROUND 1 - GAME 4",
          "Momentum swings in Game 4.",
          "/g4.png",
        ),
      },
      {
        id: "r1g5",
        round: 1,
        game: 5,
        awayTeam: "NYK",
        homeTeam: "ATL",
        arena: "Round 1",
        date: "Game 5",
        courtImageUrl: "/nyk-court.png",
        ot: 0,
        spread: 35,
        info: makeRecapInfo(
          "ROUND 1 - GAME 5",
          "The series tightens in Game 5.",
          "/g5.png",
        ),
      },
      {
        id: "r1g6",
        round: 1,
        game: 6,
        awayTeam: "ATL",
        homeTeam: "NYK",
        arena: "Round 1",
        date: "Game 6",
        courtImageUrl: "/atl-court.png",
        ot: 0,
        spread: 65,
        info: makeRecapInfo(
          "ROUND 1 - GAME 6",
          "Knicks close out the first round.",
          "/g6.png",
        ),
      },
    ],
  },
  {
    id: "round2",
    label: "Round 2",
    opponent: "PHI",
    games: [
      {
        id: "r2g1",
        round: 2,
        game: 1,
        awayTeam: "NYK",
        homeTeam: "PHI",
        arena: "Round 2",
        date: "Game 1",
        courtImageUrl: "/nyk-court.png",
        ot: 0,
        spread: 40,
        info: makeRecapInfo(
          "ROUND 2 - GAME 1",
          "Knicks and Sixers tip off the semifinal.",
          "/g1.png",
        ),
      },
      {
        id: "r2g2",
        round: 2,
        game: 2,
        awayTeam: "NYK",
        homeTeam: "PHI",
        arena: "Round 2",
        date: "Game 2",
        courtImageUrl: "/nyk-court.png",
        ot: 0,
        spread: 10,
        info: makeRecapInfo(
          "ROUND 2 - GAME 2",
          "A physical second game in Philly.",
          "/g2.png",
        ),
      },
      {
        id: "r2g3",
        round: 2,
        game: 3,
        awayTeam: "PHI",
        homeTeam: "NYK",
        arena: "Round 2",
        date: "Game 3",
        courtImageUrl: "/phi-court.png",
        ot: 0,
        spread: 20,
        info: makeRecapInfo(
          "ROUND 2 - GAME 3",
          "Knicks host a pivotal Game 3.",
          "/g3.png",
        ),
      },
      {
        id: "r2g4",
        round: 2,
        game: 4,
        awayTeam: "PHI",
        homeTeam: "NYK",
        arena: "Round 2",
        date: "Game 4",
        courtImageUrl: "/phi-court.png",
        ot: 0,
        spread: 45,
        info: makeRecapInfo(
          "ROUND 2 - GAME 4",
          "Knicks seal the second round.",
          "/g4.png",
        ),
      },
    ],
  },
  {
    id: "round3",
    label: "Round 3",
    opponent: "CLE",
    games: [
      {
        id: "r3g1",
        round: 3,
        game: 1,
        awayTeam: "NYK",
        homeTeam: "CLE",
        arena: "Round 3",
        date: "Game 1",
        courtImageUrl: "/nyk-court.png",
        ot: 1,
        spread: 25,
        info: makeRecapInfo(
          "ROUND 3 - GAME 1",
          "Conference finals begin in Cleveland.",
          "/g1.png",
        ),
      },
      {
        id: "r3g2",
        round: 3,
        game: 2,
        awayTeam: "NYK",
        homeTeam: "CLE",
        arena: "Round 3",
        date: "Game 2",
        courtImageUrl: "/nyk-court.png",
        ot: 0,
        spread: 20,
        info: makeRecapInfo(
          "ROUND 3 - GAME 2",
          "The pressure rises in Game 2.",
          "/g2.png",
        ),
      },
      {
        id: "r3g3",
        round: 3,
        game: 3,
        awayTeam: "CLE",
        homeTeam: "NYK",
        arena: "Round 3",
        date: "Game 3",
        courtImageUrl: "/cle-court.png",
        ot: 0,
        spread: 20,
        info: makeRecapInfo(
          "ROUND 3 - GAME 3",
          "Knicks host the Cavaliers in Game 3.",
          "/g3.png",
        ),
      },
      {
        id: "r3g4",
        round: 3,
        game: 4,
        awayTeam: "CLE",
        homeTeam: "NYK",
        arena: "Round 3",
        date: "Game 4",
        courtImageUrl: "/cle-court.png",
        ot: 0,
        spread: 45,
        info: makeRecapInfo(
          "ROUND 3 - GAME 4",
          "Knicks punch their ticket to the Finals.",
          "/g4.png",
        ),
      },
    ],
  },
  {
    id: "finals",
    label: "Finals",
    opponent: "SAS",
    games: [
      {
        id: "fg1",
        round: 4,
        game: 1,
        awayTeam: "NYK",
        homeTeam: "SAS",
        arena: "Frost Bank Arena, SAS",
        date: "June 3rd, 2026 @ 7:30 PM",
        courtImageUrl: "/sas-finals.png",
        ot: 0,
        spread: 15,
        info: {
          headline: {
            print: "NYK LEADS 1-0",
            text: "Knicks stifle Spurs with dominant win in Game 1",
            imageUrl: "/g1.png",
          },
          nykPlayer: {
            name: "Jalen Brunson",
            description: "31 PTS, 8-14 3PT, 58% FG",
            imageUrl: "/brunson.png",
          },
          sasPlayer: {
            name: "Victor Wembanyama",
            description: "41 PTS, 24 REB, 56% FG",
            imageUrl: "/wemby.png",
          },
        },
      },
      {
        id: "fg2",
        round: 4,
        game: 2,
        awayTeam: "NYK",
        homeTeam: "SAS",
        arena: "Frost Bank Arena, SAS",
        date: "June 5th, 2026 @ 7:30 PM",
        courtImageUrl: "/sas-finals.png",
        ot: 0,
        spread: 15,
        info: {
          headline: {
            print: "NYK LEADS 2-0",
            text: "Knicks hang on in hard-fought Game 2",
            imageUrl: "/g2.png",
          },
          nykPlayer: {
            name: "Karl Anthony Towns",
            description: "31 PTS, 8-14 3PT, 58% FG",
            imageUrl: "/kat.png",
          },
          sasPlayer: {
            name: "Victor Wembanyama",
            description: "41 PTS, 24 REB, 56% FG",
            imageUrl: "/wemby.png",
          },
        },
      },
      {
        id: "fg3",
        round: 4,
        game: 3,
        awayTeam: "SAS",
        homeTeam: "NYK",
        arena: "Madison Square Garden, NYK",
        date: "June 7th, 2026 @ 8:00 PM",
        courtImageUrl: "/nyk-finals.png",
        ot: 0,
        spread: 15,
        info: {
          headline: {
            print: "SAS LEADS 2-1",
            text: "Spurs claw back into series with gritty Game 3 win at MSG",
            imageUrl: "/g3.png",
          },
          nykPlayer: {
            name: "Jalen Brunson",
            description: "31 PTS, 8-14 3PT, 58% FG",
            imageUrl: "/brunson.png",
          },
          sasPlayer: {
            name: "Victor Wembanyama",
            description: "41 PTS, 24 REB, 56% FG",
            imageUrl: "/wemby.png",
          },
        },
      },
      {
        id: "fg4",
        round: 4,
        game: 4,
        awayTeam: "SAS",
        homeTeam: "NYK",
        arena: "Madison Square Garden, NYK",
        date: "June 10th, 2026 @ 8:00 PM",
        courtImageUrl: "/nyk-finals.png",
        ot: 0,
        spread: 30,
        info: {
          headline: {
            print: "NYK LEADS 3-1",
            text: "Knicks one win away from title after historic comeback",
            imageUrl: "/g4.png",
          },
          nykPlayer: {
            name: "Karl Anthony Towns",
            description: "31 PTS, 8-14 3PT, 58% FG",
            imageUrl: "/kat.png",
          },
          sasPlayer: {
            name: "Victor Wembanyama",
            description: "41 PTS, 24 REB, 56% FG",
            imageUrl: "/wemby.png",
          },
        },
      },
    ],
  },
];

export const games: GameMeta[] = rounds.flatMap((round) => round.games);
