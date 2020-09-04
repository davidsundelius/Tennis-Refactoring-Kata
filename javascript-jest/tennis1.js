'use strict';

function scoreWhenEqual(player1points) {
    let score = "";
    switch (player1points) {
        case 0:
            score = "Love-All";
            break;
        case 1:
            score = "Fifteen-All";
            break;
        case 2:
            score = "Thirty-All";
            break;
        default:
            score = "Deuce";
            break;
    }
    return score;
}

function calculateAdvantageOrWin(player1points, player2points) {
    let score = "",
        leader = "";
    if (player1points > player2points) {
        leader = "player1";
    } else {
        leader = "player2";
    }
    if (Math.abs(player1points - player2points) === 1) {
        score = "Advantage " + leader;
    } else {
        score = "Win for " + leader;
    }
    return score;
}

function calculateEarlyGameScore(player1points, player2points) {
    let score = "";
    let tempScore = 0;

    tempScore = player1points;
    switch (tempScore) {
        case 0:
            score += "Love";
            break;
        case 1:
            score += "Fifteen";
            break;
        case 2:
            score += "Thirty";
            break;
        case 3:
            score += "Forty";
            break;
    }

    score += "-";
    tempScore = player2points;
    switch (tempScore) {
        case 0:
            score += "Love";
            break;
        case 1:
            score += "Fifteen";
            break;
        case 2:
            score += "Thirty";
            break;
        case 3:
            score += "Forty";
            break;
    }

    return score;
}

function getScore(player1points, player2points) {
    var score = "";
    if (player1points === player2points) {
        score = scoreWhenEqual(player1points);
    } else if (player1points >= 4 || player2points >= 4) {
        score = calculateAdvantageOrWin(player1points, player2points);
    } else {
        score = calculateEarlyGameScore(player1points, player2points);
    }
    return score;
}

module.exports = getScore;
