import * as ingredients from "@/services/ingredientsServices";

const imageUrl = process.env.EXPO_PUBLIC_SUPABASE_IMAGE_URL ?? '';

export const services = {
  ingredients,

  storage: {
    imagePath: imageUrl,
  }
}