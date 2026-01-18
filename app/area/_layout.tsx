import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{ title: "Akut" }}
      />

      <Tabs.Screen
        name="explore"
        options={{ title: "Explore" }}
      />

      <Tabs.Screen
        name="kommunikation"
        options={{ title: "Kommunikation" }}
      />
    </Tabs>
  );
}
