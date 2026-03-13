import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Switch, SafeAreaView } from 'react-native';
import { colors } from '../../constants/colors';
import { REMINDERS } from '../../data/notifications';

export default function RemindersScreen() {
  const [active, setActive] = useState(
    Object.fromEntries(REMINDERS.map((item) => [item.id, true]))
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Daily reminders 🔔</Text>
        <Text style={styles.subtitle}>Enable the nudges that keep your glow routine on track.</Text>

        {REMINDERS.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardBody}>{item.body}</Text>
              <Text style={styles.time}>Every day at {item.time}</Text>
            </View>
            <Switch
              value={active[item.id]}
              onValueChange={(value) => setActive((prev) => ({ ...prev, [item.id]: value }))}
              trackColor={{ false: '#ddd', true: '#e5b2c4' }}
              thumbColor={active[item.id] ? colors.pink500 : '#f4f4f4'}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bgPrimary },
  scroll: { flex: 1, paddingHorizontal: 16 },
  title: { fontSize: 20, fontWeight: '500', color: colors.textDark, marginTop: 16 },
  subtitle: { fontSize: 11, color: colors.textMuted, marginBottom: 14, marginTop: 3 },
  card: {
    backgroundColor: colors.bgCard,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardTitle: { fontSize: 12, fontWeight: '600', color: colors.textDark },
  cardBody: { fontSize: 10, color: colors.textMid, marginTop: 3 },
  time: { fontSize: 9, color: colors.textMuted, marginTop: 5 },
});
