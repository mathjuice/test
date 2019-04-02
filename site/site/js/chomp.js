
var state = [];

var board = [[],[],[],[]];

var game = "over";

var turn = "0";

function newgame() {
    "use strict"
    state[0] = document.getElementById("type").value;
    /*state[1] = document.getElementById("assist").value;*/
    game = "on";
    var i
    for (i = 1; i <= 28; i += 1) {
        if (i != 22) {
            document.getElementById(""+i).style.backgroundColor = "var(--primary2)";
            document.getElementById(""+i).value = "nc";
        }
    }
    for (i = 1; i <= 4; i += 1) {
        var j;
        for (j =1; j <= 7; j += 1) {
            board[i-1][j-1] = 1;
        }
    }
    if (state[0] === "2player") {
        document.getElementById("update").innerHTML = "Player 1 turn";
        turn = "1";
    }
    if (state[0] === "compeasy" || state[0] === "comphard") {
        document.getElementById("update").innerHTML = "Your turn";
        turn = "1";
    }

}

function ch(x,stall = 0) {
    if (stall == 1) {
        turn = "2";
    }
    if (document.getElementById(""+x).value === "nc" && turn !== '0') {
        var i;
        for (i = 1; i <= 28; i += 1) {
            if (i < (x+7) && (((x-1) % 7) <= (i-1) % 7)) {
                    document.getElementById(""+i).style.backgroundColor = "var(--primary1)";
                    document.getElementById(""+i).value = "c";
                    board[(i-1)/7 - (i-1)/7 % 1][(i-1) % 7] = 0;
            }
        }
        var s = 0;
        for (i = 1; i <=28; i += 1) {
            if (document.getElementById(""+i).value === "nc") {
                s += 1;
            }
        }
        if (s == 0) {
            if (state[0] === "2player") {
                if (turn === "1") {
                    document.getElementById("update").innerHTML = "Player 1 wins!";
                    game = "over";
                    return
                }
                if (turn === "2") {
                    document.getElementById("update").innerHTML = "Player 2 wins!";
                    game = "over";
                    return
                }
            }
            if (state[0] === "compeasy" || state[0] === "comphard") {
                if (turn === "1") {
                    document.getElementById("update").innerHTML = "You win!";
                    game = "over";
                    return
                }
                if (turn === "2") {
                    document.getElementById("update").innerHTML = "Computer wins.";
                    game = "over";
                    return
                }
            }
        }
        if (state[0] === "2player") {
            if (turn === "1") {
                document.getElementById("update").innerHTML = "Player 2 turn";
                turn = "2";
                return
            }
            if (turn === "2") {
                document.getElementById("update").innerHTML = "Player 1 turn";
                turn = "1";
                return
            }
        }
        if (state[0] === "compeasy") {
            if (turn == "1") {
                document.getElementById("update").innerHTML = "Computer turn";
                turn = "2";
                var M = [];
                var i;
                for (i = 0; i < 4; i += 1) {
                    var j;
                    for (j=0; j < 7; j += 1) {
                        if (board[i][j] == 1 && (i != 3 || j != 0)) {
                            var k = i*7 + j + 1; 
                            M.push(k);
                        }
                    }
                }
                var p = M[Math.floor(Math.random()*(M.length ))];
                turn = "0";
                setTimeout(function() {ch(p,1);}, 2000);
                return
            }
            if (turn == "2") {
                turn = "1";
                document.getElementById("update").innerHTML = "Your turn";
                return
            }
        }
    }
}

function typ() {
    "use strict"
    state[0] = document.getElementById("type").value;
    /*state[1] = document.getElementById("assist").value;*/
    if (game === "on") {
        return
    }
    if (state[0] === "2player") {
        document.getElementById("type").value = "compeasy";
        document.getElementById("type").innerHTML = "CPU: Easy";
    }
    if (state[0] === "compeasy") {
        document.getElementById("type").value = "comphard";
        document.getElementById("type").innerHTML = "CPU: Hard";
    }
    if (state[0] === "comphard") {
        document.getElementById("type").value = "2player";
        document.getElementById("type").innerHTML = "2 Player";
    }
    state[0] = document.getElementById("type").value;
    /*state[1] = document.getElementById("assist").value; */   
}

/*function ass() {
    "use strict"
    state[0] = document.getElementById("type").value;
    state[1] = document.getElementById("assist").value;
    if (state[1] === "off") {
        document.getElementById("assist").value = "on";
        document.getElementById("assist").innerHTML = "Assist on";
    }
    if (state[1] === "on") {
        document.getElementById("assist").value = "off";
        document.getElementById("assist").innerHTML = "Assist off";
    }
    state[0] = document.getElementById("type").value;
    state[1] = document.getElementById("assist").value;
}*/
