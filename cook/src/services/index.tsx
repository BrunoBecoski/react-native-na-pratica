import * as recipes from "@/services/recipesService";
import * as ingredients from "@/services/ingredientsServices";
import * as preparations from "@/services/preparationsServices";

const imageUrl = process.env.EXPO_PUBLIC_SUPABASE_IMAGE_URL ?? '';

export const services = {
  ingredients,
  recipes,
  preparations,

  storage: {
    imagePath: imageUrl,
  }
}