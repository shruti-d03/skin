import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export function NotifToggle({ title, value, onChange }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      <Switch value={value} onValueChange={onChange} thumbColor={value ? colors.pink500 : '#f4f4f4'} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { color: colors.textDark },
});
