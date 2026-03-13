import { useCallback, useState } from 'react';

export function useMoodHistory(initialHistory = []) {
  const [history, setHistory] = useState(initialHistory);

  const addMood = useCallback((moodKey) => {
    setHistory((prev) => [...prev, { moodKey, at: new Date().toISOString() }]);
  }, []);

  return { history, addMood };
}
