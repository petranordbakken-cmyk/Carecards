import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";

import { AREAS, CARE_CARDS } from "../_data";

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
              onPress={() =>
                router.push({
                  pathname: "/carecard/[id]",
                  params: { id: item.id },
                })
              }
              style={{
                padding: 16,
                marginBottom: 12,
                borderRadius: 12,
                backgroundColor: "#f2f2f2",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                {item.title}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </>
  );
}
