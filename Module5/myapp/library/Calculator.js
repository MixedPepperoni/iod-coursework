const Logger = require('./Logger')

class Calculator {
    constructor() {
        this.id = Date.now()
        this.id = Math.floor(Math.random() * 100000);
        this.logger = new Logger('Calculator', this.id); //#log was pointless. Remove. Daniel suggested.
    }
    add(num1, num2) {
        const value = num1 + num2
        this.logger.log(value)
        return value;
    }
    sub(num1, num2) {
        const value = num1 - num2
        this.logger.log(value)
        return value;
    }
    multiply(num1, num2) { /// should itt be multuply?// I think I foudn the issue. SOme of these codes were matching in the older folders. this should fix it.
        const value = num1 * num2
        this.logger.log(value)
        return value;
    }
    divide(num1, num2) {
        const value = num1 / num2
        this.logger.log(value)
        return value;
    }    
}

module.exports = Calculator