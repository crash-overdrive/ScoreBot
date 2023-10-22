const { GAME_TYPE } = import('../constants');

class CourtGame {
  constructor(team1, team2, courtNumber) {
    this.gameType = GAME_TYPE.COURT_GAME;
    this.team1 = team1;
    this.team2 = team2;
    this.courtNumber = courtNumber;
    this.team1Score = 0;
    this.team2Score = 0;
    this.winner = null;
    this.loser = null;
  }

  setScore(id, selfScore, opponentScore) {
    // TODO: check id with whatever and declare winner and loser
  }

  // isGameFinished() {
  //   return this.team1Score !== 0 || this.team2Score !== 0;
  // }

  getWinningTeam() {
    if (this.winner === null) {
      throw Error(`Can't get winner for ${this}`);
    }
    return this.winner;
  }

  getLosingTeam() {
    if (this.loser === null) {
      throw Error(`Can't get winner for ${this}`);
    }
    return this.loser;
  }

  toString() {
    return `Game on Court ${this.courtNumber}: ${this.team1.player1.displayName} / ${this.team1.player2.displayName} vs ${this.team2.player1.displayName} / ${this.team2.player1.displayName} : ${this.team1Score} - ${this.team2Score}`;
  }
}

module.exports = CourtGame;