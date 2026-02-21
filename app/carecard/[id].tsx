import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { CARE_CARDS } from "../../data";

export default function CareCardScreen() {
  const params = useLocalSearchParams<{ id?: string | string[] }>();

  // Säker id-hantering
  const rawId = params.id;
  const id = Array.isArray(rawId) ? rawId[0] : rawId;

  if (!id) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Ingen CareCard vald</Text>
      </View>
    );
  }

  const card = CARE_CARDS.find((c) => c.id === id);

  if (!card) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>CareCard hittades inte</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: card.title }} />

      <ScrollView
        style={{ flex: 1, padding: 16 }}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <Text style={{ fontSize: 16, lineHeight: 22 }}>
          {card.content}
        </Text>
      </ScrollView>
    </>
  );
}