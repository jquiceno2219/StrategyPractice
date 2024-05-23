class TicketPriceCalculator {
    constructor() {
        // Implementaciones concretas: Estrategias de precio definidas como funciones
        this.strategies = {
            adult: basePrice => basePrice,
            child: basePrice => basePrice * 0.5,
            student: basePrice => basePrice * 0.8
        };
    }

    // Contexto: Método para calcular el precio
    calculate(basePrice, userType) {
        const strategy = this.strategies[userType];
        if (!strategy) {
            throw new Error(`Unknown user type: ${userType}`);
        }
        return strategy(basePrice);
    }
}

// Ejemplo de uso - client
const calculator = new TicketPriceCalculator();

console.log(`Adult Price: ${calculator.calculate(100, 'adult')}`);
console.log(`Child Price: ${calculator.calculate(20, 'child')}`);
console.log(`Student Price: ${calculator.calculate(30, 'student')}`);

