export const MOODS = {
  anxious: {
    emoji: '😰',
    label: 'Anxious',
    color: '#7F77DD',
    breath: {
      name: '4-7-8 breathing',
      rounds: 4,
      phases: [
        { p: 'Inhale', t: 4, h: 'through nose' },
        { p: 'Hold', t: 7, h: 'gently' },
        { p: 'Exhale', t: 8, h: 'through mouth' },
      ],
    },
    solutions: [
      { icon: '🌬️', title: '4-7-8 breathing' },
      { icon: '🧊', title: 'Cold water reset' },
      { icon: '👁️', title: '5-4-3-2-1 grounding' },
    ],
    skinTip: 'Anxiety can increase cortisol and oil production. Keep your nighttime routine calming and consistent.',
  },
  low: {
    emoji: '😔',
    label: 'Low energy',
    color: '#378ADD',
    breath: {
      name: 'Box breathing',
      rounds: 5,
      phases: [
        { p: 'Inhale', t: 4, h: 'steady' },
        { p: 'Hold', t: 4, h: 'soft jaw' },
        { p: 'Exhale', t: 4, h: 'slowly' },
      ],
    },
    solutions: [
      { icon: '🚶', title: '10-minute walk' },
      { icon: '💧', title: 'Hydration boost' },
      { icon: '🎵', title: '1 uplifting song' },
    ],
    skinTip: 'Low mood and fatigue can show up as dullness. Focus on hydration + sleep for overnight repair.',
  },
  stressed: {
    emoji: '😵‍💫',
    label: 'Stressed',
    color: '#D85A30',
    breath: {
      name: 'Physiological sigh',
      rounds: 6,
      phases: [
        { p: 'Inhale', t: 2, h: 'short nose inhale' },
        { p: 'Inhale', t: 1, h: 'second top-up inhale' },
        { p: 'Exhale', t: 6, h: 'long mouth exhale' },
      ],
    },
    solutions: [
      { icon: '📝', title: '3-minute brain dump' },
      { icon: '🧘', title: 'Shoulder release stretch' },
      { icon: '📵', title: '2-minute no-screen pause' },
    ],
    skinTip: 'Stress may trigger inflammation and breakouts. Keep products gentle and avoid over-exfoliation.',
  },
};
