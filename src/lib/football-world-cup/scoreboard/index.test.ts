import Scoreboard from "../scoreboard";

const HOME_GAME_NAME = "Super team 1";
const AWAY_GAME_NAME = "Super team 2";

describe("Scoreboard tests", () => {
  let scoreboard: Scoreboard;

  beforeEach(() => {
    scoreboard = new Scoreboard();
  });

  test("should return an instance of the class", () => {
    expect(scoreboard).toBeInstanceOf(Scoreboard);
  });

  test("startGame adds a new game to the scoreboard", () => {
    scoreboard.startGame(HOME_GAME_NAME, AWAY_GAME_NAME);
    expect(scoreboard.getGames()).toContain(
      `${HOME_GAME_NAME} 0 - 0 ${AWAY_GAME_NAME}`
    );
  });

  test("finishGame removes an existing game from the scoreboard", () => {
    scoreboard.startGame(HOME_GAME_NAME, AWAY_GAME_NAME);
    scoreboard.finishGame(HOME_GAME_NAME, AWAY_GAME_NAME);
    expect(scoreboard.getGames()).not.toContain(
      `${HOME_GAME_NAME} 0 - 0 ${AWAY_GAME_NAME}`
    );
  });

  test("finishGame throws an error if game doesn't exist", () => {
    expect(() => scoreboard.finishGame(HOME_GAME_NAME, AWAY_GAME_NAME)).toThrow(
      "Error. Game's score could not be finished because game with those team names does not exists"
    );
  });

  test("updateGame updates the score of an existing game", () => {
    scoreboard.startGame(HOME_GAME_NAME, AWAY_GAME_NAME);
    scoreboard.updateGame(HOME_GAME_NAME, AWAY_GAME_NAME, 2, 1);
    expect(scoreboard.getGames()).toContain(
      `${HOME_GAME_NAME} 2 - 1 ${AWAY_GAME_NAME}`
    );
  });

  test("updateGame throws an error if game doesn't exist", () => {
    expect(() =>
      scoreboard.updateGame(HOME_GAME_NAME, AWAY_GAME_NAME, 2, 1)
    ).toThrowError(
      "Error. Game's score could not be updated because game with those team names does not exists"
    );
  });

  test("getGamesByTotalScore returns games sorted by total score", () => {
    scoreboard.startGame("Home1", "Away1");
    scoreboard.startGame("Home2", "Away2");
    scoreboard.startGame("Home3", "Away3");

    scoreboard.updateGame("Home1", "Away1", 1, 0);
    scoreboard.updateGame("Home2", "Away2", 2, 2);
    scoreboard.updateGame("Home3", "Away3", 0, 1);

    const games = scoreboard.getGamesByTotalScore();

    const expectedOrderedGamesList = [
      "Home2 2 - 2 Away2",
      "Home1 1 - 0 Away1",
      "Home3 0 - 1 Away3",
    ];

    expect(games).toStrictEqual(expectedOrderedGamesList);
  });
});
