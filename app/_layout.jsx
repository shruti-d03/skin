import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { colors } from '../constants/colors';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.pink100,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          paddingBottom: 8,
          height: 60,
        },
        tabBarActiveTintColor: colors.pink500,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: { fontSize: 10, fontWeight: '500' },
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: () => <Text>🏠</Text> }} />
      <Tabs.Screen name="routine" options={{ title: 'Routine', tabBarIcon: () => <Text>🌿</Text> }} />
      <Tabs.Screen name="mood" options={{ title: 'Mood', tabBarIcon: () => <Text>💜</Text> }} />
      <Tabs.Screen name="reminders" options={{ title: 'Alerts', tabBarIcon: () => <Text>🔔</Text> }} />
    </Tabs>
  );
}
