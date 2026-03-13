import { useMemo } from 'react';

export function useRoutineProgress(checkedMap = {}, total = 0) {
  return useMemo(() => {
    const done = Object.values(checkedMap).filter(Boolean).length;
    return {
      done,
      total,
      percent: total ? Math.round((done / total) * 100) : 0,
    };
  }, [checkedMap, total]);
}
