export function formatResult(value) {
  if (value === null || value === undefined) return 'Error';
  if (typeof value === 'number') {
    return Number.isInteger(value) ? String(value) : value.toFixed(2);
  }
  return String(value);
}

export function formatExpression(expr) {
  return expr.replace(/\s+/g, ' ').trim();
}
