import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export function BreathingRing({ phase }) {
  return (
    <View style={styles.ring}>
      <Text style={styles.text}>{phase}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ring: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 10,
    borderColor: colors.pink300,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: { color: colors.textDark, fontWeight: '600' },
});
