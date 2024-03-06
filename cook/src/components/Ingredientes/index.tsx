import { ScrollView } from "react-native";

import { Ingredient, IngredientProps } from "@/components/Ingredient";
import { services } from "@/services";
import { styles } from "./styles";

type IngredientsProps = {
  ingredients: IngredientProps[]
}

export function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={styles.ingredientsContent}
      showsHorizontalScrollIndicator={false}
    >
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.name}
          name={ingredient.name}
          image={`${services.storage.imagePath}/${ingredient.image}`}
        />
      ))}
    </ScrollView>
  )
}