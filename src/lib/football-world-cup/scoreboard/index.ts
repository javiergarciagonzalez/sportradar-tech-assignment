import Game from "../game";

export interface PublicGame {
  id: number;
  text: string;
}

export default class Scoreboard {
  private games: Game[] = [];
  private lastUsedId: number = 0;

  getGames(): PublicGame[] {
    const games = this.getGamesByTotalScore();
    return games.map((game) => this.toPublic(game));
  }

  startGame(homeTeamName: string, awayTeamName: string): PublicGame {
    const newGame = new Game(++this.lastUsedId, homeTeamName, awayTeamName);
    this.games.push(newGame);

    return this.toPublic(newGame);
  }

  finishGame(gameId: number): PublicGame[] {
    const game = this.getGameById(gameId);

    const index = this.games.indexOf(game);
    if (index !== -1) {
      this.games.splice(index, 1);
    }

    return this.getGames();
  }

  updateGame(
    gameId: number,
    homeTeamScore: number,
    awayTeamScore: number
  ): PublicGame {
    const game = this.getGameById(gameId);

    game.updateScore(homeTeamScore, awayTeamScore);
    return this.toPublic(game);
  }

  private getGamesByTotalScore(): Game[] {
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

    return sortedGames;
  }

  private getGameById(id: number): Game {
    const game = this.games.find((game) => game.getId() === id);
    if (!game) {
      throw new Error("Error. Can't find a game with the provided ID");
    }
    return game;
  }

  private toPublic(game: Game): PublicGame {
    return {
      id: game.getId(),
      text: game.getBeautifiedGameScore(),
    };
  }
}
