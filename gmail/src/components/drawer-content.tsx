import { Image, ScrollView, View } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

import { DrawerButton } from "@/components/drawer-button";
import { CustomOptions } from "@/@types/navigation";

export function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View className="flex-1 bg-gray-600 overflow-hidden">
      <View className="mt-20 w-full pb-6 border-b border-gray-500">
        <Image 
          className="w-28 ml-5"
          resizeMode="contain"
          source={require("@/assets/logo.png")}
        />
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        <View className="mt-2">
          {drawerProps.state.routes.map((route, index) => {
            const isFocused = drawerProps.state.index === index;
            const options = drawerProps.descriptors[route.key].options as CustomOptions;

            if (options.title === undefined) {
              return
            }

            return (
              <View key={route.key}>
                <DrawerButton
                  title={options.title}
                  isDivider={options.isDivider}
                  isFocused={isFocused}
                  iconName={options.iconName}
                  notifications={options.notifications}
                />
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}