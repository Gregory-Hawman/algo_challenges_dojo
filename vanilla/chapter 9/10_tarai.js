// [] Tarai
// The tarai (Japanese: “to pass around”) function was created to profile recursive performance in various systems and languages. Unlike other functions, numbers don't get particularly large, but the amount of recursion is significant. The tarai function accepts three parameters, and is defined as:

    // 1) tarai(x,y,z) == y, if x <= y (otherwise see rule #2);
    // 2) tarai(x,y,z) == tarai(tarai(x-1,y,z),tarai(y-1,z,x),tarai(z-1,x,y)).

// Calling tarai(10,2,9) should return 9 (after recursing 4145 times!).

