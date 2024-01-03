import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ProductPage() {
  const { slug } = useLocalSearchParams();

  return (
    <View>
      <Text>Hello {slug}</Text>
    </View>
  );
}
