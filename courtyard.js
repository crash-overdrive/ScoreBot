class Courtyard {
  constructor() {
    this.queue = [];
  }

  demoteTeamToCourtYard(team) {
    this.queue.push(team);
  }

  promoteTeamFromCourtyard() {
    return this.queue.shift();
  }
}

module.exports = Courtyard;