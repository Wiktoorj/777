class Draw {
    constructor() {
        this.options = ['red', 'green', 'blue'];
        //przechowuje nazwy kolorow wylosowanych
        let _result = this.drawResult();
        //przechopwuje wynik
        this.getDrawResult = () => _result;
        //pobranie wyniku
    }
    drawResult() {
        let colors = [];
        //uzupelniane przez losowanie
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length);
            const color = this.options[index];
            colors.push(color)
        }
        return colors;
        //zwraca w tablicy 3 wylosowane kolory np ([])
    }
}

// const draw = new Draw()

