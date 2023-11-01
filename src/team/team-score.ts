import Team = require("./team");

class TeamScore {
  #team: Team;
  #score: number;
  constructor(team: Team, score: number) {
    this.#team = team;
    this.#score = score;
  }

  getTeam(): Team {
    return this.#team;
  }

  getScore(): number {
    return this.#score;
  }

  getWinner(otherTeam: TeamScore): TeamScore {
    if (this.#score > otherTeam.getScore()) {
      return this;
    }
    return otherTeam;
  }
}

export = TeamScore;