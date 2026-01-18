import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { CARE_CARDS, CareCard } from "../_data";

export default function KommunikationScreen() {
  const router = useRouter();

  const cards: CareCard[] = CARE_CARDS.filter(
    (card: CareCard) => card.category === "akut"
  );

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 16 }}>
        Kommunikation
      </Text>

      {cards.map((card: CareCard) => (
        <Pressable
          key={card.id}
          onPress={() =>
            router.push({
              pathname: "/carecard/[id]",
              params: { id: card.id },
            })
          }
          style={{
            padding: 16,
            marginBottom: 12,
            borderRadius: 12,
            backgroundColor: "#f2f2f2",
          }}
        >
          <Text style={{ fontSize: 18 }}>{card.title}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
