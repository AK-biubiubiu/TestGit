const HISTORY_KEY = 'calc_history_v1';

export function saveHistory(expr, result) {
  try {
    const history = loadHistory();
    history.push({ expr, result, ts: Date.now() });
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (e) {
    console.warn('Storage unavailable:', e);
  }
}

export function loadHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
}
