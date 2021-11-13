const Calculator = require('./../calculator');

test('La Calculatrice doit gérer la valeur par défaut', () => {
    calc = new Calculator(10)
    expect(calc.result).toBe(10)
});

test('[Addition] 2 + 2 doit être égal à 4', () => {
    calc = new Calculator(2)
    expect(calc.add(2).result).toBe(4)
});

test('[Soustraction] 10 - 2 doit être égal à 8', () => {
    calc = new Calculator(10)
    expect(calc.minus(2).result).toBe(8)
});

test('[Multiplication] 5 * 2 doit être égal à 10', () => {
    calc = new Calculator(5)
    expect(calc.multiply(2).result).toBe(10)
});

test('[Division] 10 / 2 doit être égal à 5', () => {
    calc = new Calculator(10)
    expect(calc.dividedBy(2).result).toBe(5)
});

test('[Division] 10 / 0 doit retourner une erreur', () => {
    calc = new Calculator(10)
    expect(() => calc.dividedBy(0)).toThrow(':face_with_symbols_on_mouth:')
});

test('Les valeurs passées doivent être des nombres', () => {
    expect(() => new Calculator('deux')).toThrow('"deux" est une valeur invalide.')
});

test('"2" + "2" = 4', () => {
    calc = new Calculator('2')
    expect(calc.add('2').result).toBe(4)
});

test('"2,3" + "2,7" = 5', () => {
    calc = new Calculator('2,3')
    expect(calc.add('2,7').result).toBe(5)
});