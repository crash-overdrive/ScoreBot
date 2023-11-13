import CourtGame = require("../game/court-game");
import CourtYardGame = require("../game/courtyard-game");
import Player = require("../player/player");

class Team {
  #player1: Player;
  #player2: Player;

  constructor(player1: Player, player2: Player) {
    this.#player1 = player1;
    this.#player2 = player2;
  }

  isPlayerInTeam(player: Player): boolean {
    if (this.#player1 === player || this.#player2 === player) {
      return true;
    }
    return false;
  }

  getMaxGamesPlayed(): number {
    return Math.max(this.#player1.getMaxGamesPlayed(), this.#player2.getMaxGamesPlayed());
  }

  addGameToHistory(game: (CourtGame | CourtYardGame)) {
    this.#player1.addGameToHistory(game);
    this.#player2.addGameToHistory(game);
  }

  resetGamesPlayed(): void {
    this.#player1.resetGamesPlayed();
    this.#player2.resetGamesPlayed();
  }

}

export = Team;