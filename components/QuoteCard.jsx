import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export function QuoteCard({ quote, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.label}>✦ TODAY&apos;S GLOW QUOTE</Text>
      <Text style={styles.quote}>&quot;{quote}&quot;</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.bgSoft, borderWidth: 1, borderColor: colors.border, borderRadius: 16, padding: 12 },
  label: { fontSize: 9, color: colors.pink500, marginBottom: 4 },
  quote: { fontSize: 12, color: colors.textMid, fontStyle: 'italic' },
});
