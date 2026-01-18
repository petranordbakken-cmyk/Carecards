import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { CARE_CARDS } from "../../_data/careCards";

const PRAKTISKA_CARDS = CARE_CARDS.filter(
  (card) => card.category === "praktisk"
);

export default function PraktiskaScreen() {
  const router = useRouter();

  return (
    <ScrollView style={{ padding: 16 }}>
      {PRAKTISKA_CARDS.map((card) => (
        <Pressable
          key={card.id}
          onPress={() => router.push(`/card/${card.id}`)}
          style={{ marginBottom: 12 }}
        >
          <Text style={{ fontSize: 18 }}>
            {card.title}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
