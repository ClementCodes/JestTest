class Calculator
{
    constructor(result) {
        this.result = this.checkNumber(result);
    }

    add(number) {
        this.result = this.result + this.checkNumber(number);

        return this;
    }

    minus(number) {
        this.result = this.result - this.checkNumber(number);

        return this;
    }

    multiply(number) {
        this.result = this.result * this.checkNumber(number);

        return this;
    }

    dividedBy(number) {
        number = this.checkNumber(number);
        if (number == 0) {
            throw new Error(':face_with_symbols_on_mouth:');
        }
        this.result = this.result / number;

        return this;
    }

    reset() {
        this.result = 0;

        return this;
    }

    checkNumber(value) {
        // Ici on peut essayer de transformer la valeur en nombre si possible
        const number = Number(value)
        if (isNaN(number)) {
            throw new Error(`"${value}" est une valeur invalide.`);
        }

        return number;
    }
}

module.exports = Calculator