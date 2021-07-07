class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.say = function (string) {
            document.getElementById('say').innerHTML += (`${this.name} say: "${string}" <br>`);
        }
        this.gender = gender;
        this.weight = weight;


    }
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    checkApple(apple) {
        return apple.getWeight();
    }

    setApple(apple) {
        apple.decrease();
    }


}