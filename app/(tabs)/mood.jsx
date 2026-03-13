import React, { useMemo, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { colors } from '../../constants/colors';
import { MOODS } from '../../data/moods';

export default function MoodScreen() {
  const moodKeys = useMemo(() => Object.keys(MOODS), []);
  const [selected, setSelected] = useState(moodKeys[0]);
  const mood = MOODS[selected];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Mood support 💜</Text>
        <Text style={styles.subtitle}>Pick how you feel and follow the guided support tools.</Text>

        <View style={styles.row}>
          {moodKeys.map((key) => (
            <TouchableOpacity
              key={key}
              style={[styles.moodButton, selected === key && { borderColor: MOODS[key].color }]}
              onPress={() => setSelected(key)}
            >
              <Text style={styles.moodEmoji}>{MOODS[key].emoji}</Text>
              <Text style={styles.moodLabel}>{MOODS[key].label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{mood.breath.name}</Text>
          <Text style={styles.cardSub}>Rounds: {mood.breath.rounds}</Text>
          {mood.breath.phases.map((phase) => (
            <Text key={phase.p} style={styles.line}>• {phase.p}: {phase.t}s ({phase.h})</Text>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Helpful actions</Text>
          {mood.solutions.map((solution) => (
            <Text key={solution.title} style={styles.line}>
              {solution.icon} {solution.title}
            </Text>
          ))}
        </View>

        <View style={styles.tip}>
          <Text style={styles.tipTitle}>Skin tip</Text>
          <Text style={styles.tipText}>{mood.skinTip}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bgPrimary },
  scroll: { flex: 1, paddingHorizontal: 16 },
  title: { fontSize: 20, fontWeight: '500', color: colors.textDark, marginTop: 16 },
  subtitle: { fontSize: 11, color: colors.textMuted, marginBottom: 14, marginTop: 3 },
  row: { flexDirection: 'row', gap: 8, marginBottom: 10 },
  moodButton: {
    flex: 1,
    backgroundColor: colors.bgCard,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 10,
    alignItems: 'center',
  },
  moodEmoji: { fontSize: 20 },
  moodLabel: { fontSize: 10, color: colors.textDark, marginTop: 4, textAlign: 'center' },
  card: {
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 10,
  },
  cardTitle: { fontSize: 13, fontWeight: '600', color: colors.textDark },
  cardSub: { fontSize: 10, color: colors.textMuted, marginTop: 2, marginBottom: 5 },
  line: { fontSize: 11, color: colors.textMid, marginBottom: 4 },
  tip: { backgroundColor: colors.purpleLight, borderRadius: 16, padding: 12, marginBottom: 20 },
  tipTitle: { fontSize: 11, fontWeight: '600', color: colors.purple, marginBottom: 4 },
  tipText: { fontSize: 11, color: colors.textMid },
});
