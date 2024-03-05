import { Tabs } from "expo-router";

import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
        minHeight: 74,
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.orange[500],
      tabBarInactiveTintColor: colors.gray[400],
    }}>
      <Tabs.Screen 
        name="index"
        options={{
          tabBarIcon: ({ size, color  }) => (
            <MaterialIcons name="email" size={size} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="chat-bubble" size={size} color={color} />
          )
        }}
      />
      
      <Tabs.Screen
        name="meeting"
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="videocam" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  )
}