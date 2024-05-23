// Enum-like strategy implementation
const PriceStrategy = {
    ADULT: {
    calculatePrice: (basePrice) => basePrice
    },
    CHILD: {
    calculatePrice: (basePrice) => basePrice * 0.5
    },
    STUDENT: {
    calculatePrice: (basePrice) => basePrice * 0.8
    }
   };
   // Context
   class TicketPriceCalculator {
    constructor(strategy) {
    this.strategy = strategy;
    }
    setStrategy(strategy) {
    this.strategy = strategy;
    }
    calculate(basePrice) {
    return this.strategy.calculatePrice(basePrice);
    }
   }

   // Usage
const calculator = new TicketPriceCalculator(PriceStrategy.ADULT);
console.log('Adult price:',
calculator.calculate(100));
calculator.setStrategy(PriceStrategy.CHILD);
console.log('Child price:',
calculator.calculate(100));
calculator.setStrategy(PriceStrategy.STUDENT);
console.log('Student price:',
calculator.calculate(100));
