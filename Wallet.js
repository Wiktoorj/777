class Wallet {
    constructor(money) {
        let _money = money
        this.getWalletValue = () => _money
        // stworzylem zmienna zeby ukryc dane, stworzylem metode do pobieranie aktualnej wartosci portfela

 
        this.checkCanPlay = value => {
            if (_money >= value) return true
            return false
        }
        //sprawdzilem czy uzytkownik ma odpowiednia ilosc srodkow 

        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error('nie wiem czy wygrałeś czy przegrałeś')
                }
            } else {
          
                throw new Error('nieprawidlowa liczba')
            }
        }
        //dodanie wygranej do portfela lub odebranie postawionej stawki
    }
}
