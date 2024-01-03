import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View>
      <Link href="/about">About</Link>
      <Link href="/image-picker" push>
        Pick an Image
      </Link>

      <Link
        href={{
          pathname: "/user/[id]",
          params: { id: "bacon" },
        }}
      >
        View user
      </Link>
      <Link href="/other" asChild>
        <Pressable>
          <Text>Home</Text>
        </Pressable>
      </Link>
      <Link href="/login" asChild replace>
        <Pressable>
          <Text>Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}
