import { FlatList, RefreshControl, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";

const home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true)
    setRefreshing(false)
  }
  return (
    <SafeAreaView className="bg-background h-full">
      <FlatList
        data={
          [
            { id: 1 }, { id: 2 }, { id: 3 }
          ]
        }
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <Text className="text-4xl">{item.id}</Text>}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex flex-row justify-between items-start mb-6">
              <View>
                <Text
                  className="text-sm text-gray-100"
                  style={{ fontFamily: "Poppins-Medium" }}
                >
                  Welcome Back
                </Text>
                <Text
                  className="text-2xl text-white"
                  style={{ fontFamily: "Poppins-SemiBold" }}
                >
                  Parth
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Latest Videos
              </Text>

              <Trending posts={[{ id: 1 }, { id: 2 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState 
          title="No Videos Found"
          subtitle="Add some videos to get started!"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </SafeAreaView>
  );
};

export default home;
