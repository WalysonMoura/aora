import { Loader } from '@/components/Loader';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageURISource, StyleSheet, Text, View } from 'react-native';

import { TabBarIcon } from '~/components/TabBarIcon';

interface TabIconProps {
  icon?: ImageURISource;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className="flex items-center justify-center gap-2">
      {/*  <Image source={icon} resizeMode="contain" tintColor={color} className="h-6 w-6" /> */}
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
        style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84,
          },
        }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} name="Home" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                /* icon={icons.bookmark} */ color={color}
                name="Bookmark"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon /* icon={icons.plus} */ color={color} name="Create" focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon /* icon={icons.profile} */ color={color} name="Profile" focused={focused} />
            ),
          }}
        />
      </Tabs>

      {/*  <Loader isLoading={isLoading}/> */}
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
}
