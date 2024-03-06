import { router } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Ingredients } from "@/components/Ingredientes";
import { Recipe } from "@/components/Recipe";
import { styles } from "./styles";

export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />

        <Text style={styles.title}>Ingredientes</Text>
      </View>

      <FlatList
          data={["1"]}
          keyExtractor={item => item}
          renderItem={() => 
            <Recipe recipe={{
              name: 'Omelete',
              image: 'https://www.kitano.com.br/wp-content/uploads/2019/07/SSP_1993-Omelete-de-pizza-mussarela-ore%E2%95%A0%C3%BCgano-e-tomate.jpg',
              minutes: 10,
            }} />
          }
        />
    </View>
  )
}