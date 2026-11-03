export class Calculator {
  constructor() {
    this.history = [];
  }

  evaluate(expression) {
    this.history.push(expression);
    // Simple expression parser
    const tokens = expression.split(' ');
    if (tokens.length !== 3) return null;
    
    const [left, op, right] = tokens;
    const a = parseFloat(left);
    const b = parseFloat(right);
    
    switch (op) {
      case '+': return this.#add(a, b);
      case '-': return this.#subtract(a, b);
      case '*': return this.#multiply(a, b);
      case '/': return this.#divide(a, b);
      default: return null;
    }
  }

  #add(a, b) { return a + b; }
  #subtract(a, b) { return a - b; }
  #multiply(a, b) { return a * b; }
  #divide(a, b) { 
    if (b === 0) throw new Error('Division by zero');
    return a / b; 
  }

  getHistory() {
    return this.history.slice();
  }
}
