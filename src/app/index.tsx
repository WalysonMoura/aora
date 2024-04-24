import { Loader } from '@/components/Loader';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      {/*  <Loader isLoading={true} /> */}
      <ScrollView
        contentContainerStyle={{
          height: '100%',
        }}>
        <View className="flex w-full ">
          <Image />
        </View>
        <Text className="mt-7 text-center font-pregular text-sm text-gray-100">
          Onde a criatividade encontra a inovação: embarque em uma jornada ilimitada Exploração com
          Aora
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
