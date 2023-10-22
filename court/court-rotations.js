// owns all the courts and courtyard and teams and scores are reported here
// somehow needs to keep track of courts -> teams and vice versa as we will get scores here and need to know which court to direct it to

const Court = require('./court');
const CourtYard = require ('./court-yard');
const { MAX_GAME_LIMIT } = require('../constants');

function getRandomIntExclusive(max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * max); // The maximum is exclusive, minimum is 0
}

class CourtRotations {
  constructor(numberOfCourts, teams, playerToTeam) {
    this.numberOfCourts = numberOfCourts;

    // player -> team dictionary
    this.playerIdToTeam = playerToTeam;

    // teams queue - for just starting games off
    // TODO: change arragement to people having won games and what not
    this.teams = teams;

    // create courts
    this.courts = {};
    this.createCourts();

    // create courtYard
    this.courtYard = new CourtYard();

    this.setStartingPositionForGames();
  }

  createCourts() {
    for (let courtNumber = 1; courtNumber <= this.numberOfCourts; ++courtNumber) {
      this.courts[courtNumber] = new Court();
    }
  }

  initializeCourtYard() {

  }

  setStartingPositionForGames() {

  }

  // // check all court's courtGames to see if the game is over
  // areCourtsReadyForRotation() {
  //   for (let courtNumber=1; courtNumber <= this.numberOfCourts ; ++courtNumber) {
  //     if (!this.courts[courtNumber].courtGame.isGameFinished()) {
  //       return false;
  //     }
  //   }
  // }

  promoteWinnersDemoteLosers() {
    if (this.numberOfCourts === 1) {
      // TODO: write out for 1 court
    } else {
      // highest court
      const highestWinningTeam = this.courts[1].getWinningTeam();
      const highestLosingTeam = this.courts[1].getLosingTeam();

      this.courts[1].addToNextGameTeamList(highestWinningTeam);
      this.courts[2].addToNextGameTeamList(highestLosingTeam);

      // lowest court
      const lowestWinningTeam = this.courts[this.numberOfCourts].getWinningTeam();
      const lowestLosingTeam = this.courts[this.numberOfCourts].getLosingTeam();

      this.courts[this.numberOfCourts-1].addToNextGameTeamList(lowestWinningTeam);
      this.courtYard.demoteTeamToCourtYard(lowestLosingTeam);

      // rest of the courts
      for (let courtNumber = 2; courtNumber < this.numberOfCourts ; ++courtNumber) {
        const winningTeam = this.courts[courtNumber].getWinningTeam();
        const losingTeam = this.courts[courtNumber].getLosingTeam();

        this.courts[courtNumber-1].addToNextGameTeamList(winningTeam);
        this.courts[courtNumber+1].addToNextGameTeamList(losingTeam);
      }
    }
  }

  demoteTeamsWithTooManyGamesPlayed() {
    for (let courtNumber = this.numberOfCourts; courtNumber >= 1 ; --courtNumber) {
      const teamList = this.courts[courtNumber].nextGameTeamList;

      for (let teamNumber = teamList.length - 1; teamNumber >= 0; --teamNumber) {
        const team = teamList[teamNumber];

        if (team.getMaxGamesPlayed() >= MAX_GAME_LIMIT) {
          teamList.splice(teamNumber, 1);
          this.courtYard.demoteTeamToCourtYard(team);
        }
      }
    }
  }

  PromoteTeamsFromCourtyard() {

  }

  // TODO: add 1 to each teams game played, add Match history for court and courtyard, add Match to each court etc.., add
  finalizeCourtRotation() {

  }
}

module.exports = CourtRotations;