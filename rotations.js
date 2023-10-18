// owns all the courts and courtyard and teams and scores are reported here
// somehow needs to keep track of courts -> teams and vice versa as we will get scores here and need to know which court to direct it to

const Court = require('./court');
const Courtyard = require ('./courtyard');

function getRandomIntInclusive(max) {
  min = 1;
  max = Math.floor(max);
  return Math.floor(Math.random() * max + min); // The maximum is inclusive and the minimum is inclusive
}

class Rotations {
  constructor(numCourts, teams, playerToTeam) {
    this.numCourts = numCourts;

    // player -> team dictionary
    this.playerIdToTeam = playerToTeam;

    // teams queue - for just starting games off
    // TODO: change arragement to people having won games and what not

    this.teams = teams;
    // create courts
    this.courts = {};
    this.createCourts();

    // create courtyard
    this.courtyard = new Courtyard();
  }

  createCourts() {
    for (let courtNum = 1; courtNum <= this.numCourts; ++courtNum) {
      this.courts[courtNum] = new Court();
    }
  }

  setStartingPositionForGames() {

  }
}

module.exports = Rotations;