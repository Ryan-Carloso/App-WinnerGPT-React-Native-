import { Stack } from 'expo-router';
import { LanguageProvider } from '../components/globalize/context';


export default function AppLayout() {
  return (
    <LanguageProvider>
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="team/[teamId]"
        options={{ headerShown: true }}
      />
    </Stack>
    </LanguageProvider>

  );
}