import Team from "../team";

const TEAM_NAME = "Super team";

describe("Team", () => {
  let team: Team;

  beforeEach(() => {
    team = new Team(TEAM_NAME);
  });

  test("should create a team with a name and a default score", () => {
    expect(team.getName()).toBe(TEAM_NAME);
    expect(team.getScore()).toBe(0);
  });

  test("should create a team with a name and a custom score", () => {
    team = new Team(TEAM_NAME, 5);
    expect(team.getName()).toBe(TEAM_NAME);
    expect(team.getScore()).toBe(5);
  });

  test("should be able to update the score", () => {
    team.updateScore(3);
    expect(team.getScore()).toBe(3);
    team.updateScore(2);
    expect(team.getScore()).toBe(2);
  });
});
