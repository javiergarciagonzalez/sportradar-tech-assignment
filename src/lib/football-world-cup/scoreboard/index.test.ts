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
    const game = scoreboard.startGame(HOME_GAME_NAME, AWAY_GAME_NAME);
    expect(game.text).toContain(`${HOME_GAME_NAME} 0 - 0 ${AWAY_GAME_NAME}`);
  });

  test("finishGame removes an existing game from the scoreboard", () => {
    const { id: gameId, text } = scoreboard.startGame(
      HOME_GAME_NAME,
      AWAY_GAME_NAME
    );
    scoreboard.finishGame(gameId);
    expect(
      scoreboard.getGames().find((game) => game.id === gameId)
    ).toBeUndefined();
  });

  test("finishGame throws an error if game doesn't exist", () => {
    expect(() => scoreboard.finishGame(-1)).toThrow(
      "Error. Can't find a game with the provided ID"
    );
  });

  test("updateGame updates the score of an existing game", () => {
    const { id: gameId } = scoreboard.startGame(HOME_GAME_NAME, AWAY_GAME_NAME);
    const { text: updatedGameText } = scoreboard.updateGame(gameId, 2, 1);
    expect(updatedGameText).toContain(
      `${HOME_GAME_NAME} 2 - 1 ${AWAY_GAME_NAME}`
    );
  });

  test("updateGame throws an error if game doesn't exist", () => {
    const badId = -1;
    expect(() => scoreboard.updateGame(badId, 2, 1)).toThrowError(
      "Error. Can't find a game with the provided ID"
    );
  });

  test("getGamesByTotalScore returns games sorted by total score", () => {
    const { id: gameId1 } = scoreboard.startGame("Home1", "Away1");
    const { id: gameId2 } = scoreboard.startGame("Home2", "Away2");
    const { id: gameId3 } = scoreboard.startGame("Home3", "Away3");

    scoreboard.updateGame(gameId1, 1, 0);
    scoreboard.updateGame(gameId2, 2, 2);
    scoreboard.updateGame(gameId3, 0, 1);

    const games = scoreboard.getGames();

    const expectedOrderedGamesList = [
      {
        id: 2,
        text: "Home2 2 - 2 Away2",
      },
      {
        id: 1,
        text: "Home1 1 - 0 Away1",
      },
      {
        id: 3,
        text: "Home3 0 - 1 Away3",
      },
    ];

    expect(games).toStrictEqual(expectedOrderedGamesList);
  });
});
