import { EmptyState } from '@/components/EmptyState';
import { VideoCard } from '@/components/VideoCard';
import { useAppwrite } from '@/lib/useAppwrite';
import { useState } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const posts = [
  {
    $id: '1',
    title: 'Learn React Native in 10 Minutes',
    thumbnail: require('./assets/thumbnails/react_native_10_minutes.jpg'),
    video: require('./assets/videos/react_native_10_minutes.mp4'),
    creator: {
      username: 'ReactDevGuy',
      avatar: require('./assets/avatars/react_dev_guy.jpg'),
    },
  },
  {
    $id: '2',
    title: 'Mastering Redux for State Management',
    thumbnail: require('./assets/thumbnails/mastering_redux.jpg'),
    video: require('./assets/videos/mastering_redux.mp4'),
    creator: {
      username: 'ReduxNinja',
      avatar: require('./assets/avatars/redux_ninja.jpg'),
    },
  },
  {
    $id: '3',
    title: 'Build Your First GraphQL Server with Apollo',
    thumbnail: require('./assets/thumbnails/graphql_with_apollo.jpg'),
    video: require('./assets/videos/graphql_with_apollo.mp4'),
    creator: {
      username: 'GraphQLWizard',
      avatar: require('./assets/avatars/graphql_wizard.jpg'),
    },
  },
];

const Home = () => {
  const { data: poss, loading, refetch } = useAppwrite();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch;
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            avatar={item.creator.avatar}
            creator={item.creator.username}
            thumbnail={item.thumbnail}
            title={item.title}
            video={item.video}
          />
        )}
        ListHeaderComponent={() => <View></View>}
        ListEmptyComponent={() => (
          <EmptyState title="No Videos Found" subtitle="No videos created yet" />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />

      <Text>fff</Text>
    </SafeAreaView>
  );
};

export default Home;
