import {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Game from "../game";
import Title from "../ui/title/Title";
import { PublicGame } from "../../lib/football-world-cup/scoreboard";
import TextInput from "../ui/input/Input";
import { AppContext } from "../../App";
import Button from "../ui/button";

interface Props {
  game: PublicGame;
  setIsUpdaterVisible: Dispatch<SetStateAction<boolean>>;
}

const Updater: FC<Props> = ({ game, setIsUpdaterVisible }) => {
  const { scoreboard, setGames } = useContext(AppContext);

  const [homeTeamScore, setHomeTeamScore] = useState<number>(
    game.homeTeamScore
  );
  const [awayTeamScore, setAwayTeamScore] = useState<number>(
    game.awayTeamScore
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsUpdaterVisible(false);

    if (homeTeamScore === 0 && awayTeamScore === 0) {
      return;
    }

    scoreboard.updateGame(game.id, homeTeamScore, awayTeamScore);

    setGames(scoreboard.getGames());
  };

  const handleHomeTeamChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHomeTeamScore(parseInt(event.currentTarget.value));
  };

  const handleAwayTeamChange = (event: React.FormEvent<HTMLInputElement>) => {
    setAwayTeamScore(parseInt(event.currentTarget.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Home team new score: </span>
      <TextInput
        placeholder="Home team score"
        handleChange={handleHomeTeamChange}
        value={homeTeamScore.toString()}
        type="number"
      />
      <br />
      <span>Away team new score: </span>
      <TextInput
        placeholder="Away team score"
        handleChange={handleAwayTeamChange}
        value={awayTeamScore.toString()}
        type="number"
      />
      <br />
      <Button type="submit">Update this game</Button>
    </form>
  );
};

export default Updater;
