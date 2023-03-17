import { FC, useContext, useState } from "react";
import Button from "../ui/button/Button";
import { PublicGame } from "../../lib/football-world-cup/scoreboard";
import { AppContext } from "../../App";
import Updater from "../updater";

interface Props {
  game: PublicGame;
}

const Game: FC<Props> = ({ game }) => {
  const { scoreboard, setGames } = useContext(AppContext);
  const [isUpdaterVisible, setIsUpdaterVisible] = useState<boolean>(false);
  const finishGame = () => {
    scoreboard.finishGame(game.id);
    setGames(scoreboard.getGames());
  };
  debugger;
  return (
    <li>
      <span>{game.text}</span>
      {!isUpdaterVisible && (
        <>
          <Button
            style={{ marginLeft: "40px" }}
            onClick={() => setIsUpdaterVisible(!isUpdaterVisible)}
          >
            Update Game
          </Button>
          <Button onClick={finishGame}>Finish Game</Button>
        </>
      )}
      {isUpdaterVisible && (
        <Updater game={game} setIsUpdaterVisible={setIsUpdaterVisible} />
      )}
    </li>
  );
};

export default Game;
