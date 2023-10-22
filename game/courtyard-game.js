const { GAME_TYPE } = import('../constants');

class CourtYardGame {
  constructor(team1) {
    this.team1 = team1;
    this.gameType = GAME_TYPE.COURT_YARD_GAME;
  }
}

module.exports = CourtYardGame;