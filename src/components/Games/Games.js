import { useContext } from "react";
import { Container, MenuList, GamesGrid, GameCard, Img, Text } from "./Games.styles";
import GameMenuItem from "../GameMenuItem/GameMenuItem.js";
import Image from "next/image";
import { useState } from "react";

import GameModalContext from "../../context/GameModalContext";

function Games({ games, setGames }) {
  const { openGameModal, setSelectedGame } = useContext(GameModalContext);

  const [showAll, setShow] = useState(false);
  const [openMenu, setOpen] = useState(false);

  function openModal(event) {
    event.preventDefault();
    setSelectedGame(games[parseInt(event.currentTarget.dataset.index)]);
    openGameModal(true);
  }

  function toggle(index) {
    openMenu === index ? setOpen(false) : setOpen(index);
  }

  return (
    <Container>
      <MenuList>
        <GameMenuItem
          openMenu={openMenu === 0}
          setOpen={() => toggle(0)}
          items={["All", "Mobile", "PC", "Cross-platform"]}>
          Platform
        </GameMenuItem>
        <GameMenuItem
          openMenu={openMenu === 1}
          setOpen={() => toggle(1)}
          items={[
            "All",
            "Match 3",
            "Strategy",
            "Racing",
            "Action",
            "Survivor Horror",
            "Arcade",
            "Sports game",
            "RPG",
            "MMORPG",
            "City builder",
            "Puzzle",
          ]}>
          Genre
        </GameMenuItem>
        <GameMenuItem openMenu={openMenu === 2} setOpen={() => toggle(2)}>
          Type of project
        </GameMenuItem>
      </MenuList>
      <GamesGrid show={showAll}>
        {Array(5)
          .fill(games)
          .reduce((a, c) => [...a, ...c], [])
          .slice(0, showAll ? 100 : 6)
          .map((e, i) => (
            <GameCard key={i} delay={i > 5 ? i - 5 : 0} data-index={i} onClick={openModal}>
              <Img>
                <Image
                  src={e.images[0]}
                  alt="review Image"
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={e.images[0]}
                  quality={25}
                  objectFit="cover"
                  objectPosition="center"
                />
              </Img>
              <Text>
                <Text as="span" className="blue">
                  {e.title}
                </Text>{" "}
                {e.publisher}
              </Text>
            </GameCard>
          ))}
      </GamesGrid>
      <Text className="button blue" onClick={() => setShow(!showAll)}>
        {showAll ? <span>Load less &#8593;</span> : "Load more ↓"}
      </Text>
    </Container>
  );
}

export default Games;
