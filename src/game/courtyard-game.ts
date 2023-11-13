import Team = require("../team/team");

class CourtYardGame {
  #team1: Team;
  constructor(team1: Team) {
    this.#team1 = team1;
  }

  finishGame(): void {
    this.#team1.addGameToHistory(this);
    // TODO: should this be here or controlled by controller?
    this.#team1.resetGamesPlayed();
  }
}

export = CourtYardGame;