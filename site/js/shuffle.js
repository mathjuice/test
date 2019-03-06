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
    var L;
    var M = [];
    var k;
    var i;
    if (stype === "ins") {
        L = ins();
    }
    for (i = 1; i <= 52; i += 1) {
        M[[L[[i-1]]-1]] = document.getElementById(""+i).innerHTML;
    }
    for (i = 1; i <= 52; i += 1) {
        document.getElementById(""+i).innerHTML = M[[i-1]];
    }
}

