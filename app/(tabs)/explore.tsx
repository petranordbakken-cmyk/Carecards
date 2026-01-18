import { useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import { AREAS } from "../_data";

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "600", marginBottom: 16 }}>
        Explore
      </Text>

      <FlatList
        data={AREAS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/area/${item.id}`)}
            style={{
              padding: 16,
              marginBottom: 12,
              borderRadius: 10,
              backgroundColor: "#f2f2f2",
            }}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
