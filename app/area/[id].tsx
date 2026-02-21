import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import { AREAS, CARE_CARDS } from "../../data";

export default function AreaScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const area = AREAS.find((a) => a.id === id);
  const cards = CARE_CARDS.filter((card) => card.area === id);

  if (!area) {
    return (
      <View style={{ flex: 1, padding: 16 }}>
        <Text>Område hittades inte.</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: area.title }} />

      <View style={{ flex: 1, padding: 16 }}>
        <FlatList
          data={cards}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={{
                padding: 16,
                marginBottom: 12,
                backgroundColor: "#fff",
                borderRadius: 12,
              }}
              onPress={() => router.push(`/carecard/${item.id}`)}
            >
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                {item.title}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </>
  );
}