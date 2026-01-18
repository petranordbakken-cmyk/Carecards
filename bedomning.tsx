import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { CARE_CARDS } from "../../_data/careCards";

export default function BedomningScreen() {
  const router = useRouter();

  const cards = CARE_CARDS.filter(
    (card) => card.category === "bedomning"
  );

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 16 }}>
        Bedömning
      </Text>

      {cards.map((card) => (
        <Pressable
          key={card.id}
          onPress={() => router.push(`/card/${card.id}`)}
          style={{
            padding: 16,
            borderRadius: 12,
            backgroundColor: "#f2f2f2",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            {card.title}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
