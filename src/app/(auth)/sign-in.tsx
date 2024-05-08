import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignIn() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View>
          <Image></Image>
        </View>
      </ScrollView>
      <View>
        <Text className="font-psemibold mt-10 text-2xl font-semibold text-white">
          Sign Up to Aora
        </Text>
      </View>
    </SafeAreaView>
  );
}
