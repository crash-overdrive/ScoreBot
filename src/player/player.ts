// for stats track wins and losses on each courts along with score, partner and team played against
// points are only given for winning on kings courts

import CourtGame = require("../game/court-game");
import CourtYardGame = require("../game/courtyard-game");
import Person = require("./person");

class Player extends Person {
  #numberOfCourts: number;
  #points: { [courtNumber: number]: number};
  #gamesPlayed: { [courtNumber: number]: number};
  #gamesHistory: (CourtGame|CourtYardGame)[];

  constructor(id: string, number: string, displayName: string, isGuest: boolean, numCourts: number) {
    super(id, number, displayName, isGuest);
    this.#numberOfCourts = numCourts;
    this.#points = {};
    this.#gamesPlayed = {};
    this.#gamesHistory = [];
    this.#initPlayer();
  }

  #initPlayer(): void {
    for (let courtNumber = 1; courtNumber <= this.#numberOfCourts; ++courtNumber) {
      this.#points[courtNumber] = 0;
      this.#gamesPlayed[courtNumber] = 0;
    }
  }

  resetGamesPlayed(): void {
    for (let courtNumber = 1; courtNumber <= this.#numberOfCourts; ++courtNumber) {
      this.#gamesPlayed[courtNumber] = 0;
    }
  }

  getMaxGamesPlayed(): number {
    return Math.max(...Object.values(this.#gamesPlayed));
  }

  #addGamePlayed(courtNum: number): void {
    this.#gamesPlayed[courtNum] += 1;
  }

  addGameToHistory(game: (CourtGame | CourtYardGame)) {
    this.#gamesHistory.push(game);

    // TODO: add to points as well
    // TODO: add game played as well
  }
}

export = Player;