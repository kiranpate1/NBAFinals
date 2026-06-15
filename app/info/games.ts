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
  time: string;
  courtImageUrl: string;
  ot: number;
  spread: number;
  info: RecapInfo;
};

export type RoundMeta = {
  id: "round1" | "round2" | "round3" | "finals";
  label: string;
  opponent: string;
  opponentName: string;
  games: GameMeta[];
};

export const rounds: RoundMeta[] = [
  {
    id: "round1",
    label: "Round 1",
    opponent: "ATL",
    opponentName: "Atlanta Hawks",
    games: [
      {
        id: "r1g1",
        round: 1,
        game: 1,
        awayTeam: "ATL",
        homeTeam: "NYK",
        arena: "Madison Square Garden, NYC",
        date: "Apr 18",
        time: "6:00 PM",
        courtImageUrl: "/nyk-court.png",
        ot: 0,
        spread: 20,
        info: {
          headline: {
            print: "NYK LEADS 1-0",
            text: "Knicks take a commanding 3-2 series lead with a strong performance in Game 5",
            imageUrl: "/g5.png",
          },
          nykPlayer: {
            name: "Karl Anthony Towns",
            description: "25 PTS, 8 REB",
            imageUrl: "/players/nyk/kat.png",
          },
          sasPlayer: {
            name: "CJ McCollum",
            description: "26 PTS, 55% FG",
            imageUrl: "/players/atl/cj.png",
          },
        },
      },
      {
        id: "r1g2",
        round: 1,
        game: 2,
        awayTeam: "ATL",
        homeTeam: "NYK",
        arena: "Madison Square Garden, NYC",
        date: "Apr 20",
        time: "8:00 PM",
        courtImageUrl: "/nyk-court.png",
        ot: 0,
        spread: 15,
        info: {
          headline: {
            print: "ATL LEADS 2-1",
            text: "Hawks take a 2-1 series lead with a strong performance in Game 2",
            imageUrl: "/g2.png",
          },
          nykPlayer: {
            name: "Jalen Brunson",
            description: "29 PTS, 7 AST",
            imageUrl: "/players/nyk/brunson.png",
          },
          sasPlayer: {
            name: "CJ McCollum",
            description: "32 PTS, 55% FG",
            imageUrl: "/players/atl/cj.png",
          },
        },
      },
      {
        id: "r1g3",
        round: 1,
        game: 3,
        awayTeam: "NYK",
        homeTeam: "ATL",
        arena: "State Farm Arena, ATL",
        date: "Apr 23",
        time: "7:00 PM",
        courtImageUrl: "/atl-court.png",
        ot: 0,
        spread: 20,
        info: {
          headline: {
            print: "ATL LEADS 2-1",
            text: "Hawks take a 2-1 series lead with a strong performance in Game 3",
            imageUrl: "/g3.png",
          },
          nykPlayer: {
            name: "OG Anunoby",
            description: "29 PTS, 56% FG",
            imageUrl: "/players/nyk/og.png",
          },
          sasPlayer: {
            name: "Jonathan Kuminga",
            description: "21 PTS, 62% FG",
            imageUrl: "/players/atl/kuminga.png",
          },
        },
      },
      {
        id: "r1g4",
        round: 1,
        game: 4,
        awayTeam: "NYK",
        homeTeam: "ATL",
        arena: "State Farm Arena, ATL",
        date: "Apr 25",
        time: "6:00 PM",
        courtImageUrl: "/atl-court.png",
        ot: 0,
        spread: 25,
        info: {
          headline: {
            print: "SERIES TIED 2-2",
            text: "Knicks take a commanding 3-2 series lead with a strong performance in Game 5",
            imageUrl: "/g5.png",
          },
          nykPlayer: {
            name: "Karl Anthony Towns",
            description: "20 PTS, triple double",
            imageUrl: "/players/nyk/kat.png",
          },
          sasPlayer: {
            name: "CJ McCollum",
            description: "17 PTS, 53% FG",
            imageUrl: "/players/atl/cj.png",
          },
        },
      },
      {
        id: "r1g5",
        round: 1,
        game: 5,
        awayTeam: "ATL",
        homeTeam: "NYK",
        arena: "Madison Square Garden, NYC",
        date: "Apr 28",
        time: "8:00 PM",
        courtImageUrl: "/nyk-court.png",
        ot: 0,
        spread: 35,
        info: {
          headline: {
            print: "NYK LEADS 3-2",
            text: "Knicks take a commanding 3-2 series lead with a strong performance in Game 5",
            imageUrl: "/g5.png",
          },
          nykPlayer: {
            name: "Jalen Brunson",
            description: "39 PTS, 63% FG",
            imageUrl: "/players/nyk/brunson.png",
          },
          sasPlayer: {
            name: "Jalen Johnson",
            description: "18 PTS, 10 REB",
            imageUrl: "/players/atl/johnson.png",
          },
        },
      },
      {
        id: "r1g6",
        round: 1,
        game: 6,
        awayTeam: "NYK",
        homeTeam: "ATL",
        arena: "State Farm Arena, ATL",
        date: "Apr 30",
        time: "7:00 PM",
        courtImageUrl: "/atl-court.png",
        ot: 0,
        spread: 65,
        info: {
          headline: {
            print: "NYK WINS 4-2",
            text: "Knicks advance to the next round with a strong performance in Game 6",
            imageUrl: "/g6.png",
          },
          nykPlayer: {
            name: "Mikael Bridges",
            description: "24 PTS, 82% FG",
            imageUrl: "/players/nyk/bridges.png",
          },
          sasPlayer: {
            name: "Jalen Johnson",
            description: "21 PTS, 8 REB",
            imageUrl: "/players/atl/johnson.png",
          },
        },
      },
    ],
  },
  {
    id: "round2",
    label: "Round 2",
    opponent: "PHI",
    opponentName: "Philadelphia 76ers",
    games: [
      {
        id: "r2g1",
        round: 2,
        game: 1,
        awayTeam: "PHI",
        homeTeam: "NYK",
        arena: "Madison Square Garden, NYC",
        date: "May 4",
        time: "8:00 PM",
        courtImageUrl: "/nyk-court.png",
        ot: 0,
        spread: 40,
        info: {
          headline: {
            print: "NYK LEADS 1-0",
            text: "Knicks take the first game of the series with a strong performance",
            imageUrl: "/g1.png",
          },
          nykPlayer: {
            name: "Jalen Brunson",
            description: "35 PTS, 67 FG%",
            imageUrl: "/players/nyk/brunson.png",
          },
          sasPlayer: {
            name: "Paul George",
            description: "17 PTS, 4-6 3PT",
            imageUrl: "/players/phi/pg.png",
          },
        },
      },
      {
        id: "r2g2",
        round: 2,
        game: 2,
        awayTeam: "PHI",
        homeTeam: "NYK",
        arena: "Madison Square Garden, NYC",
        date: "May 6",
        time: "7:00 PM",
        courtImageUrl: "/nyk-court.png",
        ot: 0,
        spread: 10,
        info: {
          headline: {
            print: "NYK LEADS 2-0",
            text: "Knicks dominate Game 2 to take a 2-0 series lead",
            imageUrl: "/g4.png",
          },
          nykPlayer: {
            name: "OG Anunoby",
            description: "24 PTS, 53 FG%",
            imageUrl: "/players/nyk/og.png",
          },
          sasPlayer: {
            name: "Tyrese Maxey",
            description: "26 PTS",
            imageUrl: "/players/phi/maxey.png",
          },
        },
      },
      {
        id: "r2g3",
        round: 2,
        game: 3,
        awayTeam: "NYK",
        homeTeam: "PHI",
        arena: "Xfinity Mobile Arena, PHI",
        date: "May 8",
        time: "7:00 PM",
        courtImageUrl: "/phi-court.png",
        ot: 0,
        spread: 20,
        info: {
          headline: {
            print: "NYK LEADS 3-0",
            text: "Knicks dominate Game 3 to take a commanding series lead",
            imageUrl: "/g3.png",
          },
          nykPlayer: {
            name: "Jalen Brunson",
            description: "33 PTS, 50 FG%",
            imageUrl: "/players/nyk/brunson.png",
          },
          sasPlayer: {
            name: "Tyresse Maxey",
            description: "17 PTS, 67% FG",
            imageUrl: "/players/phi/maxey.png",
          },
        },
      },
      {
        id: "r2g4",
        round: 2,
        game: 4,
        awayTeam: "NYK",
        homeTeam: "PHI",
        arena: "Xfinity Mobile Arena, PHI",
        date: "May 10",
        time: "3:30 PM",
        courtImageUrl: "/phi-court.png",
        ot: 0,
        spread: 45,
        info: {
          headline: {
            print: "NYK WINS 4-0",
            text: "Knicks sweep the series with a dominant Game 4 performance",
            imageUrl: "/g4.png",
          },
          nykPlayer: {
            name: "Miles McBride",
            description: "25 PTS, 7-9 3PT",
            imageUrl: "/players/nyk/mcbride.png",
          },
          sasPlayer: {
            name: "Joel Embiid",
            description: "24 PTS, 100% FG",
            imageUrl: "/players/phi/embiid.png",
          },
        },
      },
    ],
  },
  {
    id: "round3",
    label: "Round 3",
    opponent: "CLE",
    opponentName: "Cleveland Cavaliers",
    games: [
      {
        id: "r3g1",
        round: 3,
        game: 1,
        awayTeam: "CLE",
        homeTeam: "NYK",
        arena: "Madison Square Garden, NYC",
        date: "May 19",
        time: "8:00 PM",
        courtImageUrl: "/nyk-court.png",
        ot: 1,
        spread: 25,
        info: {
          headline: {
            print: "NYK LEADS 1-0",
            text: "Knicks take the first game of the series",
            imageUrl: "/g1.png",
          },
          nykPlayer: {
            name: "Jalen Brunson",
            description: "38 PTS, 52 FG%",
            imageUrl: "/players/nyk/brunson.png",
          },
          sasPlayer: {
            name: "Donovan Mitchell",
            description: "29 PTS, 52% FG",
            imageUrl: "/players/cle/spida.png",
          },
        },
      },
      {
        id: "r3g2",
        round: 3,
        game: 2,
        awayTeam: "CLE",
        homeTeam: "NYK",
        arena: "Madison Square Garden, NYC",
        date: "May 21",
        time: "8:00 PM",
        courtImageUrl: "/nyk-court.png",
        ot: 0,
        spread: 20,
        info: {
          headline: {
            print: "NYK LEADS 2-0",
            text: "Knicks dominate Game 2 to take a 2-0 series lead",
            imageUrl: "/g2.png",
          },
          nykPlayer: {
            name: "Josh Hart",
            description: "26 PTS, 6 AST",
            imageUrl: "/players/nyk/hart.png",
          },
          sasPlayer: {
            name: "Donovan Mitchell",
            description: "26 PTS",
            imageUrl: "/players/cle/spida.png",
          },
        },
      },
      {
        id: "r3g3",
        round: 3,
        game: 3,
        awayTeam: "NYK",
        homeTeam: "CLE",
        arena: "Rocket Arena, CLE",
        date: "May 23",
        time: "8:00 PM",
        courtImageUrl: "/cle-court.png",
        ot: 0,
        spread: 20,
        info: {
          headline: {
            print: "NYK LEADS 3-0",
            text: "Knicks dominate Game 3 to take a 3-0 series lead",
            imageUrl: "/g3.png",
          },
          nykPlayer: {
            name: "Jalen Brunson",
            description: "30 PTS, 53 FG%",
            imageUrl: "/players/nyk/brunson.png",
          },
          sasPlayer: {
            name: "Evan Mobley",
            description: "24 PTS, 53% FG",
            imageUrl: "/players/cle/mobley.png",
          },
        },
      },
      {
        id: "r3g4",
        round: 3,
        game: 4,
        awayTeam: "NYK",
        homeTeam: "CLE",
        arena: "Rocket Arena, CLE",
        date: "May 25",
        time: "8:00 PM",
        courtImageUrl: "/cle-court.png",
        ot: 0,
        spread: 45,
        info: {
          headline: {
            print: "NYK WINS 4-0",
            text: "Knicks sweep the series with a dominant Game 4 performance",
            imageUrl: "/g4.png",
          },
          nykPlayer: {
            name: "Karl Anthony Towns",
            description: "19 PTS, 14 REB",
            imageUrl: "/players/nyk/kat.png",
          },
          sasPlayer: {
            name: "Donovan Mitchell",
            description: "31 PTS, 50% FG",
            imageUrl: "/players/cle/spida.png",
          },
        },
      },
    ],
  },
  {
    id: "finals",
    label: "Finals",
    opponent: "SAS",
    opponentName: "San Antonio Spurs",
    games: [
      {
        id: "fg1",
        round: 4,
        game: 1,
        awayTeam: "NYK",
        homeTeam: "SAS",
        arena: "Frost Bank Arena, SAS",
        date: "Jun 3",
        time: "7:30 PM",
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
            description: "30 PTS",
            imageUrl: "/players/nyk/brunson.png",
          },
          sasPlayer: {
            name: "Victor Wembanyama",
            description: "26 PTS",
            imageUrl: "/players/sas/wemby.png",
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
        date: "Jun 5",
        time: "7:30 PM",
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
            description: "21 PTS, 13 REB, 67% FG",
            imageUrl: "/players/nyk/kat.png",
          },
          sasPlayer: {
            name: "Victor Wembanyama",
            description: "29 PTS, 9 REB, 52% FG",
            imageUrl: "/players/sas/wemby.png",
          },
        },
      },
      {
        id: "fg3",
        round: 4,
        game: 3,
        awayTeam: "SAS",
        homeTeam: "NYK",
        arena: "Madison Square Garden, NYC",
        date: "Jun 8",
        time: "8:30 PM",
        courtImageUrl: "/nyk-finals.png",
        ot: 0,
        spread: 15,
        info: {
          headline: {
            print: "NYK LEADS 2-1",
            text: "Spurs claw back into series with gritty Game 3 win at MSG",
            imageUrl: "/g3.png",
          },
          nykPlayer: {
            name: "Jalen Brunson",
            description: "32 PTS, 3-5 3PT, 44% FG",
            imageUrl: "/players/nyk/brunson.png",
          },
          sasPlayer: {
            name: "Victor Wembanyama",
            description: "32 PTS, 8 REB, 69% FG",
            imageUrl: "/players/sas/wemby.png",
          },
        },
      },
      {
        id: "fg4",
        round: 4,
        game: 4,
        awayTeam: "SAS",
        homeTeam: "NYK",
        arena: "Madison Square Garden, NYC",
        date: "Jun 11",
        time: "8:30 PM",
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
            name: "OG Anunoby",
            description: "33 PTS, 67% FG",
            imageUrl: "/players/nyk/og.png",
          },
          sasPlayer: {
            name: "Dylan Harper",
            description: "21 PTS, 67% FG",
            imageUrl: "/players/sas/harper.png",
          },
        },
      },
      {
        id: "fg5",
        round: 4,
        game: 5,
        awayTeam: "NYK",
        homeTeam: "SAS",
        arena: "Frost Bank Arena, SAS",
        date: "Jun 14",
        time: "8:30 PM",
        courtImageUrl: "/sas-finals.png",
        ot: 0,
        spread: 20,
        info: {
          headline: {
            print: "NYK WINS",
            text: "Jalen Brunson goes nuclear as Knicks claim first title since 1973",
            imageUrl: "/g5.png",
          },
          nykPlayer: {
            name: "Jalen Brunson",
            description: "45 PTS, 52% FG",
            imageUrl: "/players/nyk/brunson.png",
          },
          sasPlayer: {
            name: "Dylan Harper",
            description: "25 PTS, 53% FG",
            imageUrl: "/players/sas/harper.png",
          },
        },
      },
    ],
  },
];

export const games: GameMeta[] = rounds.flatMap((round) => round.games);
