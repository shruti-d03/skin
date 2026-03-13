import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export function MoodButton({ emoji, label, active, onPress, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, active && { borderColor: color }]}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { flex: 1, borderRadius: 12, borderWidth: 1, borderColor: colors.border, padding: 8, alignItems: 'center' },
  emoji: { fontSize: 18 },
  label: { fontSize: 10, color: colors.textDark, marginTop: 2 },
});
