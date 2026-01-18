import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";

import ortopedi from "../../_data/areas/ortopedi";
import { CARE_CARDS } from "../../_data/careCards";

export default function OrtopediScreen() {
  const router = useRouter();

  const cards = CARE_CARDS.filter((card) =>
    ortopedi.includes(card.id)
  );

  return (
    <ScrollView style={{ padding: 16 }}>
      {cards.map((card) => (
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
