import { Calculator } from './components/calculator.js';
import { formatResult } from './utils/formatter.js';
import { saveHistory } from './utils/storage.js';

const calc = new Calculator();

function handleInput(expr) {
  const result = calc.evaluate(expr);
  const formatted = formatResult(result);
  saveHistory(expr, formatted);
  return formatted;
}

// Simulate app lifecycle
window.addEventListener('load', () => {
  console.log('Demo Calculator Ready');
  console.log('2 + 3 =', handleInput('2 + 3'));
  console.log('10 * 5 =', handleInput('10 * 5'));
});

export { handleInput };
