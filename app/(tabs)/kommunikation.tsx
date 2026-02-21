import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { CARE_CARDS, type CareCard } from "../../data";

export default function KommunikationScreen() {
  const router = useRouter();

  // Filtrera kort som tillhör kommunikation
  const KOMMUNIKATION_CARDS: CareCard[] = CARE_CARDS.filter(
    (card) => card.area === "kommunikation"
  );

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "700",
          marginBottom: 16,
        }}
      >
        Kommunikation
      </Text>

      {KOMMUNIKATION_CARDS.map((item) => (
        <Pressable
          key={item.id}
          onPress={() => router.push(`/carecard/${item.id}`)}
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
      ))}
    </ScrollView>
  );
}