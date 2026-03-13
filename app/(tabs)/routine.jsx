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
import { ROUTINES } from '../../data/routines';

export default function RoutineScreen() {
  const [tab, setTab] = useState(0);
  const [checked, setChecked] = useState({ 0: {}, 1: {}, 2: {} });

  const tabs = ['🌅 Morning', '☀️ Afternoon', '🌙 Night'];
  const tabColors = [colors.pink500, colors.amber, colors.purple];
  const routine = ROUTINES[tab];
  const done = Object.values(checked[tab]).filter(Boolean).length;
  const total = routine.steps.length;

  const toggle = (i) => {
    setChecked((prev) => ({
      ...prev,
      [tab]: { ...prev[tab], [i]: !prev[tab][i] },
    }));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Skincare routine 🌸</Text>
        <Text style={styles.subtitle}>Your personalised daily steps</Text>

        <View style={styles.tabRow}>
          {tabs.map((t, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.tab, tab === i && { backgroundColor: tabColors[i] }]}
              onPress={() => setTab(i)}
            >
              <Text style={[styles.tabText, tab === i && { color: '#fff' }]}>{t}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.progressRow}>
          <Text style={styles.timeText}>{routine.time}</Text>
          <Text style={[styles.doneText, { color: tabColors[tab] }]}>
            {done}/{total} done
          </Text>
        </View>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${Math.round((done / total) * 100)}%`,
                backgroundColor: tabColors[tab],
              },
            ]}
          />
        </View>

        {routine.steps.map((step, i) => {
          const isDone = !!checked[tab][i];
          return (
            <TouchableOpacity
              key={i}
              style={[styles.stepCard, isDone && styles.stepDone]}
              onPress={() => toggle(i)}
              activeOpacity={0.7}
            >
              <View style={[styles.stepIcon, { backgroundColor: routine.bg }]}>
                <Text style={{ fontSize: 20 }}>{step.icon}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.stepHeader}>
                  <Text style={[styles.stepName, isDone && styles.stepNameDone]}>{step.name}</Text>
                  <Text style={styles.stepTime}>{step.time}</Text>
                </View>
                <Text style={styles.stepDetail}>{step.detail}</Text>
              </View>
              <View style={[styles.checkCircle, isDone && styles.checkDone]}>
                {isDone && <Text style={{ fontSize: 11, color: '#fff' }}>✓</Text>}
              </View>
            </TouchableOpacity>
          );
        })}

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bgPrimary },
  scroll: { flex: 1, paddingHorizontal: 16 },
  title: { fontSize: 20, fontWeight: '500', color: colors.textDark, marginTop: 16 },
  subtitle: { fontSize: 11, color: colors.textMuted, marginBottom: 14, marginTop: 3 },
  tabRow: {
    flexDirection: 'row',
    backgroundColor: '#fdf0f4',
    borderRadius: 14,
    padding: 4,
    gap: 3,
    marginBottom: 14,
  },
  tab: { flex: 1, paddingVertical: 8, borderRadius: 11, alignItems: 'center' },
  tabText: { fontSize: 11, fontWeight: '500', color: colors.textMuted },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  timeText: { fontSize: 10, color: colors.textMuted },
  doneText: { fontSize: 10, fontWeight: '500' },
  progressBar: { height: 5, backgroundColor: colors.border, borderRadius: 3, marginBottom: 12 },
  progressFill: { height: '100%', borderRadius: 3 },
  stepCard: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
    padding: 12,
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  stepDone: { backgroundColor: '#f0faf5', borderColor: '#b0e8d0' },
  stepIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 3 },
  stepName: { fontSize: 12, fontWeight: '500', color: colors.textDark, flex: 1 },
  stepNameDone: { color: colors.teal, textDecorationLine: 'line-through' },
  stepTime: { fontSize: 9, color: colors.textMuted, marginLeft: 6 },
  stepDetail: { fontSize: 10, color: '#a08090', lineHeight: 15 },
  checkCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: '#f0c0d0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkDone: { backgroundColor: colors.pink500, borderColor: colors.pink500 },
});
