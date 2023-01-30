// [] Without peeking at previous code, how many bugs can you find in the recursive code below?

function rFib(num) {
    if (num <= 1) { 
        return 1; 
    }
    return rFib(num) + rFib(num - 1);
}

function rListLength(node) {
    if (!node) {
        return 0;
    }
    else {
        return rListLength(node.next);
    }
    return rListLength(node) + 1;
}

function rSigma(num) {
    if (num == 0) { 
        return 0; 
    }
    return num + rSigma(num - 1);
}

function rFactorial(num) {
    if (num === 0) {
        return 0; 
    }
    return rFactorial(num + 1) * num;
}