class Result {
    static moneyWinInGame(result, bid) {
        if (result) return 3 * bid
        else return 0
    }
    //wygral - pomnoz *3 bid, przegral (false) - zwieksz o 0;

    static checkWinner(draw) {
        if (draw[0] === draw[1] && draw[1] === draw[2]) return true
        else return false
        //zasady gry: 3 takie same lub 3 rozne np ([1, 1, 1])
    }

}