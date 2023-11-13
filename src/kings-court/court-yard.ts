class CourtYard {
  constructor() {
    this.teamQueue = [];
  }

  demoteTeamToCourtYard(team) {
    team.resetGamesPlayed();
    this.teamQueue.push(team);
    // TODO: add courtyard-game to team's game history
    // TODO: clear game history of team being demoted to courtyard
  }

  promoteTeamFromCourtyard() {
    return this.teamQueue.shift();
  }
}

module.exports = CourtYard;