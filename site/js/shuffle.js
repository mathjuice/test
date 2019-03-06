var C = Array.from(new Array(52), (x,i) => i + 1);

function ins() {
    "use strict";
    var L = [];
    var i;
    var k;
        for (i = 1; i <= 52; i += 1) {
            k = (2 * i) % 53;
            L[[k-1]] = i;
        }
    return L;
}

function shuffle() {
    "use strict";
    var stype = document.getElementById("shuffle").value;
    var L = [];
    var M = [];
    var Ct = [];
    var k;
    var i;
    if (stype === "ins") {
        L = ins();
    }
    for (i = 1; i <= 52; i += 1) {
        k = L[[i-1]];
        M[[i-1]] = document.getElementById(""+k).innerHTML;
        Ct[[i-1]] = C[[L[[i-1]]-1]];
    }
    for (i = 1; i <= 52; i += 1) {
        document.getElementById(""+i).innerHTML = M[[i-1]];
    }
    C = Ct;
}

function reset() {
    "use strict";
    var M = [];
    var i;
    for (i = 1; i <= 52; i += 1) {
        M[[C[[i-1]]-1]] = document.getElementById(""+i).innerHTML;
    }
    for (i = 1; i <= 52; i += 1) {
        document.getElementById(""+i).innerHTML = M[[i-1]];
    }
    C = Array.from(new Array(52), (x,i) => i + 1);
}