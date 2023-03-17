import Team from "../team";

export default class Game {
  private createdTime: Date;
  private homeTeam: Team;
  private awayTeam: Team;

  constructor(homeTeamName: string, awayTeamName: string) {
    this.createdTime = new Date();
    this.homeTeam = new Team(homeTeamName);
    this.awayTeam = new Team(awayTeamName);
  }

  getHomeTeamName(): string {
    return this.homeTeam.getName();
  }

  getAwayTeamName(): string {
    return this.awayTeam.getName();
  }

  updateScore(homeTeamScore: number, awayTeamScore: number): void {
    this.homeTeam.updateScore(homeTeamScore);
    this.awayTeam.updateScore(awayTeamScore);
  }

  getSumGameScore(): number {
    return this.homeTeam.getScore() + this.awayTeam.getScore();
  }

  getBeautifiedGameScore(): string {
    return `${this.homeTeam.getName()} ${this.homeTeam.getScore()} - ${this.awayTeam.getScore()} ${this.awayTeam.getName()}`;
  }

  getCreatedTime(): Date {
    return this.createdTime;
  }
}
