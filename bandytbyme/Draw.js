class Draw {
    constructor() {
        this.options = ['red', 'green', 'blue'];
        //opcje do wyboru przy losowaniu
        let _result = this.drawResult();
        this.getDrawResult = () => _result;
        //otrzymanie tablicy z wynikiem
    }

    drawResult() {
        let colors = [];
        //kontener tablica dla wynikow
        for (let i = 0; i < this.options.length; i++) {
            let i = Math.floor(Math.random() * this.options.length);
            let color = this.options[i]
            colors.push(color)
        }
        // losowanie i dodanie wyniow do talibcy

        return colors
    }
}



// const draw = new Draw()