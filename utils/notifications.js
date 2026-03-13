import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function requestPermissions() {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

export async function scheduleDailyReminder({ title, body, hour, minute }) {
  await Notifications.scheduleNotificationAsync({
    content: { title, body, sound: true },
    trigger: { hour, minute, repeats: true },
  });
}

export async function cancelReminder(id) {
  await Notifications.cancelScheduledNotificationAsync(id);
}

export async function scheduleAllReminders() {
  const reminders = [
    { title: '✦ Daily glow quote', body: 'Your morning dose of happiness is here 🌸', hour: 6, minute: 30 },
    { title: '🍋 Warm lemon water', body: 'Start your morning glow right!', hour: 7, minute: 0 },
    { title: '🫧 Morning skincare', body: 'Cleanse → Tone → Serum → SPF. You\'ve got this! ✨', hour: 7, minute: 15 },
    { title: '☀️ Reapply your SPF', body: 'Even indoors! Blue light causes pigmentation 🌸', hour: 13, minute: 0 },
    { title: '💜 Mood check-in', body: 'How are you feeling right now?', hour: 17, minute: 0 },
    { title: '🌙 Night skincare ritual', body: 'Double cleanse → Gua sha → Serums → Night cream ✨', hour: 20, minute: 0 },
  ];

  for (const reminder of reminders) {
    await scheduleDailyReminder(reminder);
  }
}
