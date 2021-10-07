import { useState } from "react";
import Nav from "../components/Nav/Nav.js";
import Games from "../components/Games/Games.js";
import Reviews from "../components/Reviews/Reviews.js";
import Footer from "../components/Footer/Footer.js";

const allGames = [
  {
    image: "/images/games/game-one.png",
    caption: {
      white: "by Deadalic Entertainment",
      blue: "Gragon Strom",
    },
  },
  {
    image: "/images/games/game-two.png",
    caption: {
      white: "by Deadalic Entertainment",
      blue: "Gragon Strom",
    },
  },
  {
    image: "/images/games/game-three.png",
    caption: {
      white: "Deadalic Entertainment",
      blue: "Battle Arena Heroes Adventure by",
    },
  },
];

export default function Home({ allGames }) {
  const [games, setGames] = useState(allGames);

  return (
    <>
      <Nav lang={true} title="Portfolio" />
      <Games games={games} />
      <Reviews />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allGames,
    },
  };
}
