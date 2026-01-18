import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { CARE_CARDS, type CareCard } from "../_data/careCards";

// Filtrera akuta kort
const AKUT_CARDS: CareCard[] = CARE_CARDS.filter(
  (card) => card.category === "akut"
);

export default function AkutScreen() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      {AKUT_CARDS.map((card) => (
        <Pressable
          key={card.id}
          onPress={() => router.push(`/carecard/${card.id}`)}
          style={{ marginBottom: 12 }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            {card.title}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
