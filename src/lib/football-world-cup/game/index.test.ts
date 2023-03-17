import Game from "../game";

const HOME_TEAM_NAME = "Home Team";
const AWAY_TEAM_NAME = "Away Team";

const getRandomInt: () => number = () => {
  return new Date().getTime() * 12345;
};

describe("Game tests", () => {
  let game: Game;

  beforeEach(() => {
    game = new Game(getRandomInt(), HOME_TEAM_NAME, AWAY_TEAM_NAME);
  });

  test("should return the correct home team name", () => {
    expect(game.getHomeTeamName()).toBe(HOME_TEAM_NAME);
  });

  test("should return the correct away team name", () => {
    expect(game.getAwayTeamName()).toBe(AWAY_TEAM_NAME);
  });

  test("should update the score correctly", () => {
    game.updateScore(2, 1);
    expect(game.getBeautifiedGameScore()).toBe(
      `${HOME_TEAM_NAME} 2 - 1 ${AWAY_TEAM_NAME}`
    );
  });

  test("should return the correct sum game score", () => {
    game.updateScore(2, 1);
    expect(game.getSumGameScore()).toBe(3);
  });

  test("should return the correct beautified game score", () => {
    game.updateScore(2, 1);
    expect(game.getBeautifiedGameScore()).toBe(
      `${HOME_TEAM_NAME} 2 - 1 ${AWAY_TEAM_NAME}`
    );
  });

  test("should return the correct created time", () => {
    const createdTime = game.getCreatedTime();
    expect(createdTime).toBeInstanceOf(Date);
  });
});
