import { FC, useEffect } from "react";
import Game from "../game";
import Title from "../ui/title/Title";
import { PublicGame } from "../../lib/football-world-cup/scoreboard";

interface Props {
  games: PublicGame[];
}

const List: FC<Props> = ({ games }) => (
  <>
    <Title>List of games:</Title>
    {games.length !== 0 && (
      <ul>
        {games.map((game, index) => (
          <Game key={`${game}-${index}`} game={game} />
        ))}
      </ul>
    )}

    {games.length === 0 && (
      <p>Please, start adding new games to the score board! ⬇️</p>
    )}
  </>
);

export default List;
