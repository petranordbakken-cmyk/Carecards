import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function DepressionAssessmentStart() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 12 }}>
        Självskattning – Depression
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 24 }}>
        Detta formulär hjälper till att bedöma depressiva symtom.
        Resultatet ersätter inte klinisk bedömning.
      </Text>

      <Pressable
        onPress={() =>
          router.push("/assessments/depression/questionnaire")
        }
        style={{
          backgroundColor: "#000",
          padding: 14,
          borderRadius: 8,
          marginBottom: 16,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
          Starta självskattning
        </Text>
      </Pressable>

      <Pressable onPress={() => router.back()}>
        <Text style={{ color: "#666", textAlign: "center" }}>
          Tillbaka
        </Text>
      </Pressable>
    </View>
  );
}
