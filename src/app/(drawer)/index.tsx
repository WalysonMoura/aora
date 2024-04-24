import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <Link href="/sign-in" className="font-psemibold text-secondary text-lg">
          Login
        </Link>
        <Text>ou</Text>
        <ScreenContent path="app/(drawer)/(tabs)/index.tsx" title="Home" />
      </Container>
    </>
  );
}
