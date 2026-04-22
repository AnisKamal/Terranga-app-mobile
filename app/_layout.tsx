import { useThemeColors } from "@/hooks/useThemeColors";
import { Ionicons } from "@expo/vector-icons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Tabs } from "expo-router";

const queryClient = new QueryClient();

export default function TabsLayout() {
  const colors = useThemeColors(); 
return (
  <QueryClientProvider client={queryClient} >
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: colors.green,
      tabBarInactiveTintColor: colors.gray,
      headerShown: false,
    }}
    >
      <Tabs.Screen
                name="index"
                options={{
                    title: "Accueil",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />

      <Tabs.Screen
                name="news"
                options={{
                    title: "actualite",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />

  </Tabs>
  </QueryClientProvider>
);

}
