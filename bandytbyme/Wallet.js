class Wallet {
    constructor(money) {
        let _money = money;
        this.getWalletValue = () => _money;
        //zwraca type number (ilosc srodkow na koncie)

        this.changeWallet = (value, result = "+") => {
            if (result == '+') return _money += value;
            else if (result == '-') return _money -= value;
            else throw new Error('PRO8bleM');
        }
        //w zaleznosci czy win czy lose dodaje wartosc lub odejmuje
        //(number, '-')

        this.checkCanPlay = value => {
            if (money >= value) return true;
            else return false;
        }
        //moze grac czy nie,
        //true/false
    }
}

const wallet = new Wallet(100);
//przy wywowalniu podac ilosc srodkow na koncie