# ScoreBot

max of 3 games on any courts
need to take in number of courts from cli

queue to track all the teams
each team should have dictionary of number of games played on each court

there are courts, each court will host 2 teams
kings court
queens court
princes court
princess court
courtyard

test what if team played 3rd game in middle
what if 2 teams both played 3rd game in kings court or last court
reverse option

somehow have a state where i can reverse score before publishing stuff

in -> checked in
out -> checked out


partner @id -> formed a team of @id1 @id2 (puts them at end of courtyard) // need to make sure both id1, id2 are checked in, need to destroy the other team id2 is in if it exists

teams -> shows all the teams signed up / check all the teams and unlink any existing one

games -> shows the games played that day of @id and on which court it was played on with the results (need to have some sort of courtyard match?)

rotation -> shows the current rotation on all the courts, and state of the courtyard queue (should i report score if game is already done?)

21-16 -> stores the score with writers score being the first one -> prints recorded win / lose against @id1 @id2

next rotation (admin only) -> explain the process (won so promote, lost so demote etc, played 3 games on some court) shows the new rotations on the courts along with the state of the courtyard queue (need to check if all courts are done)

// first team to be demoted to courtyard is the loser of the last court
// then we start demoting from lower courts, teams which have played 3 games atleast

// then we start promoting from courtyard to highest courts first and then lower courts