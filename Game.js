class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);

        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        //zwiazalem this zeby dzialal w startGame()

        document.getElementById('b1').addEventListener('click', () => {
            return this.inputBid.value = 1;
        })
        document.getElementById('b2').addEventListener('click', () => {
            return this.inputBid.value = 2;
        })
        document.getElementById('b5').addEventListener('click', () => {
            return this.inputBid.value = 5;
        })
        document.getElementById('b50').addEventListener('click', () => {
            return this.inputBid.value = 50;
        })
        document.getElementById('b100').addEventListener('click', () => {
            return this.inputBid.value = 100;
        })

        document.querySelector('.restart').addEventListener('click', this.add10.bind(this));

        this.spanWallet = document.querySelector('.panel span.wallet');
        this.boards = [...document.querySelectorAll('div.color')];
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number');
        this.spanWins = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');



        this.render();
    }

    render(colors = ['#5d3a', '#5d3a', '#5d3a'], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {


        this.boards.forEach((board, i) => {
            board.style.backgroundColor = colors[i]
        })
        this.spanWallet.textContent = money;
        if (result) {
            result = `WYGRAŁEŚ: ${wonMoney} PLN`
            document.body.style.backgroundColor = '#5d3a'
        } else if (!result && result !== "") {
            result = `PRZEGRAŁEŚ: ${bid} PLN`
            document.body.style.backgroundColor = '#d32e2eaa'
        }
        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
    }

    startGame() {
        let bid = Math.floor(this.inputBid.value);
        if (bid < 1) return alert('Stawka minimalna: 1 PLN');
        //floor zamienia tez z string na number

        if (bid === 96122800750) {
            this.wallet.changeWallet(2345);
            this.spanWallet.textContent = this.wallet.getWalletValue();
            this.inputBid.value = "";
            return;
        } else if (!this.wallet.checkCanPlay(bid)) return alert("Stan Twojego konta nie pozwala ci na ten ruch");

        this.wallet.changeWallet(bid, '-');
        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkWinner(colors);
        const wonMoney = Result.moneyWinInGame(win, bid);
        this.wallet.changeWallet(wonMoney);
        this.stats.addGameToStatistics(win, bid);

        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney);

        if (this.wallet.getWalletValue() == 0) {
            document.querySelector('section.gameover').classList.remove('hide');
        }
    }

    add10() {
        this.wallet.changeWallet(10);
        this.spanWallet.textContent = this.wallet.getWalletValue();
        document.querySelector('section.gameover').classList.add('hide');
    }
}