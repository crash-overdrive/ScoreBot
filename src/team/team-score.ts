import Player = require("../player/player");
import Team = require("./team");

class TeamScore {
  #team: Team;
  #score: number;
  constructor(team: Team) {
    this.#team = team;
    this.#score = 0;
  }

  getTeam(): Team {
    return this.#team;
  }

  getScore(): number {
    return this.#score;
  }

  setScore(score: number): void {
    this.#score = score;
  }

  isPlayerInTeam(player: Player): boolean {
    return this.getTeam().isPlayerInTeam(player);
  }

  getMaxGamesPlayed(): number {
    return this.#team.getMaxGamesPlayed();
  }

  // getWinner(otherTeam: TeamScore): TeamScore {
  //   if (this.#score > otherTeam.getScore()) {
  //     return this;
  //   }
  //   return otherTeam;
  // }
}

export = TeamScore;