import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { colors } from '../../constants/colors';

const QUOTES = [
  'Your skin is a love letter to how gently you treat yourself.',
  'Happiness is the best skincare. You deserve both.',
  'Glow from the inside out — your emotions show on your skin.',
  'Small consistent steps create the most beautiful transformations.',
];

export default function HomeScreen() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning 🌸</Text>
            <Text style={styles.name}>Hello, Priya</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={{ fontSize: 20 }}>🌸</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.quoteCard}
          onPress={() => setQuoteIndex((quoteIndex + 1) % QUOTES.length)}
          activeOpacity={0.8}
        >
          <Text style={styles.quoteLabel}>✦ TODAY&apos;S GLOW QUOTE</Text>
          <Text style={styles.quoteText}>&quot;{QUOTES[quoteIndex]}&quot;</Text>
          <Text style={styles.quoteTap}>tap for a new quote</Text>
        </TouchableOpacity>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.statLabel}>✨ Skin score</Text>
            <Text style={styles.statNumber}>7.4</Text>
            <Text style={styles.statUp}>↑ +0.3 today</Text>
          </View>
          <View style={[styles.statCard, { flex: 1 }]}>
            <Text style={styles.statLabel}>💜 Mood</Text>
            <Text style={{ fontSize: 26, marginBottom: 2 }}>😊</Text>
            <Text style={[styles.statUp, { color: colors.purple }]}>Feeling good</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardRow}>
            <Text style={styles.cardTitle}>🌿 Morning routine</Text>
            <View style={styles.pill}>
              <Text style={styles.pillText}>3 / 5 done</Text>
            </View>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '60%' }]} />
          </View>
          <Text style={styles.nextStep}>Next up: Vitamin C serum ✨</Text>
        </View>

        <View style={styles.statsRow}>
          <TouchableOpacity style={[styles.quickCard, { borderColor: colors.teal }]}>
            <Text style={{ fontSize: 20, marginBottom: 4 }}>🌿</Text>
            <Text style={[styles.quickTitle, { color: colors.teal }]}>AM / PM routine</Text>
            <Text style={[styles.quickSub, { color: '#5DCAA5' }]}>Tap to open →</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.quickCard, { borderColor: colors.purple + '60' }]}>
            <Text style={{ fontSize: 20, marginBottom: 4 }}>💜</Text>
            <Text style={[styles.quickTitle, { color: colors.purple }]}>Mood support</Text>
            <Text style={[styles.quickSub, { color: '#9f8fe0' }]}>Tap to open →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bgPrimary },
  scroll: { flex: 1, paddingHorizontal: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 16,
    marginBottom: 14,
  },
  greeting: { fontSize: 11, color: colors.textHint, marginBottom: 2 },
  name: { fontSize: 22, fontWeight: '500', color: colors.textDark },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FBEAF0',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#f0c8d8',
  },
  quoteCard: {
    backgroundColor: '#fdf0f5',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: '#f4c8d8',
    marginBottom: 12,
  },
  quoteLabel: {
    fontSize: 9,
    color: colors.pink500,
    fontWeight: '600',
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  quoteText: { fontSize: 13, color: colors.textMid, lineHeight: 20, fontStyle: 'italic' },
  quoteTap: { fontSize: 9, color: colors.textHint, marginTop: 6 },
  statsRow: { flexDirection: 'row', marginBottom: 10, gap: 8 },
  statCard: {
    backgroundColor: colors.bgCard,
    borderRadius: 18,
    padding: 13,
    borderWidth: 1,
    borderColor: colors.border,
  },
  statLabel: { fontSize: 9, color: colors.textMuted, marginBottom: 5 },
  statNumber: { fontSize: 30, fontWeight: '500', color: colors.pink500 },
  statUp: { fontSize: 9, fontWeight: '500', color: colors.teal },
  card: {
    backgroundColor: colors.bgCard,
    borderRadius: 18,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: { fontSize: 13, fontWeight: '500', color: colors.textDark },
  pill: { backgroundColor: '#FBEAF0', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 },
  pillText: { fontSize: 9, fontWeight: '500', color: colors.pink500 },
  progressBar: { height: 5, backgroundColor: colors.border, borderRadius: 3, marginBottom: 8 },
  progressFill: { height: '100%', backgroundColor: colors.pink500, borderRadius: 3 },
  nextStep: { fontSize: 10, color: colors.textMuted },
  quickCard: { flex: 1, backgroundColor: colors.bgCard, borderRadius: 18, padding: 13, borderWidth: 1 },
  quickTitle: { fontSize: 12, fontWeight: '500', marginBottom: 2 },
  quickSub: { fontSize: 9, marginTop: 2 },
});
