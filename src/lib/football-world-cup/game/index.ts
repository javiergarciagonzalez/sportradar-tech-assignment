import Team from "../team";

export default class Game {
  private createdTime: Date;
  private homeTeam: Team;
  private awayTeam: Team;
  private id: number;

  constructor(id: number, homeTeamName: string, awayTeamName: string) {
    this.id = id;
    this.createdTime = new Date();
    this.homeTeam = new Team(homeTeamName);
    this.awayTeam = new Team(awayTeamName);
  }

  getId(): number {
    return this.id;
  }

  getHomeTeamName(): string {
    return this.homeTeam.getName();
  }

  getAwayTeamName(): string {
    return this.awayTeam.getName();
  }

  getHomeTeamScore(): number {
    return this.homeTeam.getScore();
  }
  getAwayTeamScore(): number {
    return this.awayTeam.getScore();
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
