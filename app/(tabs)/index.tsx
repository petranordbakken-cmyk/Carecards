import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AREAS = [
  { id: "akut", title: "Akut" },
  { id: "ortopedi", title: "Ortopedi" },
  { id: "kirurgi", title: "Kirurgi" },
  { id: "prover", title: "Prover" },
  { id: "kommunikation", title: "Kommunikation" },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>CareCards</Text>

      <FlatList
        data={AREAS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    margin: 20,
  },
  list: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 14,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "600",
  },
});