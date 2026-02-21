import { useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import { AREAS } from "../../data";

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          marginBottom: 16,
        }}
      >
        Områden
      </Text>

      <FlatList
        data={AREAS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`/area/${item.id}`)}
            style={{
              padding: 16,
              backgroundColor: "#f2f2f2",
              borderRadius: 12,
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              {item.title}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}