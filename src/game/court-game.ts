import Player = require('../player/player');
import Team = require('../team/team');
import TeamScore = require('../team/team-score');

class CourtGame {
  #teamScore1: TeamScore;
  #teamScore2: TeamScore;
  #courtNumber: number;

  constructor(team1: Team, team2: Team, courtNumber: number) {
    this.#teamScore1 = new TeamScore(team1);
    this.#teamScore2 = new TeamScore(team2);
    this.#courtNumber = courtNumber;
  }

  setScore(player: Player, selfScore: number, opponentScore: number): void {
    if (this.#teamScore1.isPlayerInTeam(player)) {
      this.#teamScore1.setScore(selfScore);
      this.#teamScore2.setScore(opponentScore);
    } else if (this.#teamScore2.isPlayerInTeam(player)) {
      this.#teamScore2.setScore(selfScore);
      this.#teamScore1.setScore(opponentScore);
    } else {
      throw Error("player not in team");
    }
  }

  finishGame() {
    if (!this.isScoreReported()) {
      throw Error("Cant finish game if scores are not reported");
    }
    // add game to history
    this.#teamScore1.getTeam().addGameToHistory(this);
    this.#teamScore2.getTeam().addGameToHistory(this);
  }

  isScoreReported(): boolean {
    return this.#teamScore1.getScore() !== 0 || this.#teamScore2.getScore() !== 0;
  }

  getWinningTeam(): Team {
    if (!this.isScoreReported()) {
      throw Error("Tried getting winning team when scores were not reported");
    }

    if (this.#teamScore1.getScore() > this.#teamScore2.getScore()) {
      return this.#teamScore1.getTeam();
    } else if (this.#teamScore2.getScore() > this.#teamScore1.getScore()) {
      return this.#teamScore2.getTeam();
    } else {
      throw Error("Can't get winner if scores are same")
    }
  }

  getLosingTeam(): Team {
    if (!this.isScoreReported()) {
      throw Error("Tried getting losing team when scores were not reported");
    }

    if (this.#teamScore1.getScore() > this.#teamScore2.getScore()) {
      return this.#teamScore2.getTeam();
    } else if (this.#teamScore2.getScore() > this.#teamScore1.getScore()) {
      return this.#teamScore1.getTeam();
    } else {
      throw Error("Can't get loser if scores are same")
    }
  }

  toString(): string {
    // return `Game on Court ${this.courtNumber}: ${this.team1.player1.displayName} / ${this.team1.player2.displayName} vs ${this.team2.player1.displayName} / ${this.team2.player1.displayName} : ${this.team1Score} - ${this.team2Score}`;
    return ``;
  }
}

export = CourtGame;