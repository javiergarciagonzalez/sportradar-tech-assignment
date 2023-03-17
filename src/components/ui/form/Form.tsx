import { FC, useContext, useState } from "react";
import TextInput from "../input/Input";
import Button from "../button";
import { AppContext } from "../../../App";
import Title from "../title/Title";

const Form: FC = () => {
  const { scoreboard, setGames } = useContext(AppContext);

  const [homeTeamName, setHomeTeamName] = useState<string>("");
  const [awayTeamName, setAwayTeamName] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (homeTeamName === "" || awayTeamName === "") {
      return;
    }

    scoreboard.startGame(homeTeamName, awayTeamName);

    setGames(scoreboard.getGames());
    setHomeTeamName("");
    setAwayTeamName("");
  };

  const handleHomeTeamChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHomeTeamName(event.currentTarget.value);
  };

  const handleAwayTeamChange = (event: React.FormEvent<HTMLInputElement>) => {
    setAwayTeamName(event.currentTarget.value);
  };

  return (
    <>
      <Title>Add a new game:</Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          placeholder="Home team name"
          handleChange={handleHomeTeamChange}
          value={homeTeamName}
        />
        <br />
        <TextInput
          placeholder="Away team name"
          handleChange={handleAwayTeamChange}
          value={awayTeamName}
        />
        <br />
        <Button type="submit">Add a new game</Button>
      </form>
    </>
  );
};

export default Form;
