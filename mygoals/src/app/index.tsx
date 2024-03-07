import { View } from "react-native";

import { Header } from "@/components/Header";

export default function Home() {
  return (
    <View className="flex-1 p-8">
      <Header
        title="Suas metas"
         subtitle="Poupe hoje para colher os frutos amanhã"
      />
    </View>
  )
}
