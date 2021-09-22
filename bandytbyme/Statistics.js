class Statistics {
    constructor() {
        this.gameStats = [];
    }

    addGameToStatistics(win, bid) {
        let stats = {
            win,
            bid
        }

        this.gameStats.push(stats)
        //(boolean, number)
    }

    showGameStats() {
        let games = this.gameStats.length;
        let wins = this.gameStats.filter(game => game.win).length;
        let losses = this.gameStats.filter(game => !game.win).length;
        return [games, wins, losses];
        //metoda zwraca statystyki
    }
}


// const stats = new Statistics();