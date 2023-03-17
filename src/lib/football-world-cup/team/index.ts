export default class Team {
  private name: string;
  private score: number;

  constructor(name: string, score: number = 0) {
    this.name = name;
    this.score = score;
  }

  getName(): string {
    return this.name;
  }
  
  getScore(): number {
    return this.score;
  }

  updateScore(score: number): void {
    this.score = score
  }
}