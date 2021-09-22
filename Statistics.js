class Statistics {
    constructor() {
        this.gameResults = [];
        //tablica przchowujaca wyniki
    }

 
    addGameToStatistics(win, bid) {
        let gameResult = {
            win,
            bid
        }
        this.gameResults.push(gameResult)
        //metoda (boolean, number), dodanie do tablicy wyniku
    }

    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;
        return [games, wins, losses];
        //metoda zwraca statystyki
    }
}



