import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-sm font-pregular text-gray-900 mt-7 text-center">Hello </Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color:"blue"}}>Profile</Link>
    </View>
  );
}


