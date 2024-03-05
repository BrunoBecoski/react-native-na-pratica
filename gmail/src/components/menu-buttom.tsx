import { Pressable } from "react-native";
import { useNavigation } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

import { colors } from "@/styles/colors";

export function MenuButton() {
  const navigation = useNavigation();
  const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer());

  return (
    <Pressable onPress={toggleMenu}>
      <MaterialIcons name="menu" size={22} color={colors.white} />
    </Pressable>
  )
}