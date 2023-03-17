import Game from "../game";
import Team from "../team";

export default class Scoreboard {
  private games: Game[] = [];

  getGames(): string[] {
    return this.getGamesByTotalScore();
  }

  startGame(homeTeamName: string, awayTeamName: string): void {
    const newGame = new Game(homeTeamName, awayTeamName);
    this.games.push(newGame);
  }

  finishGame(homeTeamName: string, awayTeamName: string): void {
    const game = this.getGameByTeamNames(homeTeamName, awayTeamName);

    if (!game) {
      throw new Error(
        "Error. Game's score could not be finished because game with those team names does not exists"
      );
    }

    const index = this.games.indexOf(game);
    if (index !== -1) {
      this.games.splice(index, 1);
    }
  }

  updateGame(
    homeTeamName: string,
    awayTeamName: string,
    homeTeamScore: number,
    awayTeamScore: number
  ): Game {
    const gameToUpdate = this.getGameByTeamNames(homeTeamName, awayTeamName);

    if (!gameToUpdate) {
      throw new Error(
        "Error. Game's score could not be updated because game with those team names does not exists"
      );
    }
    gameToUpdate.updateScore(homeTeamScore, awayTeamScore);
    return gameToUpdate;
  }

  getGamesByTotalScore(): string[] {
    const sortedGames: Game[] = this.games.sort((gameA, gameB) => {
      const scoreA = gameA.getSumGameScore();
      const scoreB = gameB.getSumGameScore();

      if (scoreA === scoreB) {
        return (
          gameB.getCreatedTime().getTime() - gameA.getCreatedTime().getTime()
        );
      }

      return scoreB - scoreA;
    });

    const result = sortedGames.map((game) => game.getBeautifiedGameScore());

    return result;
  }

  private getGameByTeamNames(
    homeTeamName: string,
    awayTeamName: string
  ): Game | null {
    const game = this.games.find(
      (game: Game) =>
        game.getHomeTeamName() === homeTeamName &&
        game.getAwayTeamName() === awayTeamName
    );

    if (!game) {
      return null;
    }

    return game;
  }
}
