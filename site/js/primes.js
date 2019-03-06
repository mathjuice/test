function p(n) {
    "use strict";
    var s = 0;
    var N = Math.sqrt(n) + 1;
    var i;
    var k;
    if (n === 2) {
        document.getElementById("response").innerHTML = n + " is prime";
        return;
    }
    if (n === 1) {
        document.getElementById("response").innerHTML = n + " is neither"
        + "prime not composite";
        return;
    }
    for (i = 2; i < N; i += 1) {
        if (n % i === 0) {
            k = n / i;
            document.getElementById("response").innerHTML = n
            + " is not prime, " + n + "=" + i + "*" + k;
            i += 1;
            s = 1;
            break;
        }
    }
    if (s === 0) {
        document.getElementById("response").innerHTML = n + " is prime";
        return;
    }
}

function ptest() {
    "use strict";
    var num = Number(document.getElementById("number").value);
    if (num !== Math.ceil(num) || num <= 0) {
        alert("You must enter a positive integer.");
        return;
    }

    if (num > Math.pow(10, 11)) {
        if (confirm("This could take a while,"
         + " are you sure you want to continue?")) {
            p(num);
            return;
        } else {
            return;
        }
    }
    p(num);
    return;
}

