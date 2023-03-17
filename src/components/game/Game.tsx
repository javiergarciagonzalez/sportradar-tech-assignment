import { FC, useContext } from "react";
import Button from "../ui/button/Button";
import { PublicGame } from "../../lib/football-world-cup/scoreboard";
import { AppContext } from "../../App";

interface Props {
  game: PublicGame;
}

const extractTeamNamesFromGame = (game: string) => {
  const [homeTeam, awayTeam] = game.split(" - ");
  const homeTeamName = homeTeam.substring(0, homeTeam.length - 2);
  const awayTeamName = awayTeam.substring(2, awayTeam.length);

  return {
    homeTeamName,
    awayTeamName,
  };
};

const Game: FC<Props> = ({ game }) => {
  const { scoreboard, setGames } = useContext(AppContext);
  const finishGame = () => {
    scoreboard.finishGame(game.id);
    setGames(scoreboard.getGames());
  };
  debugger;
  return (
    <li>
      <span>{game.text}</span>
      <Button style={{ marginLeft: "40px" }}>Update Game</Button>
      <Button onClick={finishGame}>Finish Game</Button>
    </li>
  );
};

export default Game;
