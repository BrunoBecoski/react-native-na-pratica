import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, { BounceOutDown, SlideInDown } from "react-native-reanimated";

import { styles } from "./styles";
import { theme } from "@/theme";

interface SelectedProps {
  quantity: number;
  onClear: () => void;
  onSearch: () => void;
}

export function Selected({ quantity, onClear, onSearch }: SelectedProps) {
  return (
    <Animated.View 
      style={styles.container} 
      entering={SlideInDown.duration(500)}
      exiting={BounceOutDown}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingrediente(s) selecionado(s)</Text>
        <MaterialIcons name="close" size={24} onPress={onClear} color={theme.colors.gray_400} />
      </View>
    </Animated.View>
  )
}