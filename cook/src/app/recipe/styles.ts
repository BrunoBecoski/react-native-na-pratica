import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    height: 192,
    width: '100%',
    backgroundColor: theme.colors.gray_300,
  },
  body: {
    marginTop: -24,
    backgroundColor: theme.colors.white,
    borderTopEndRadius: theme.borderRadius.lg,
    borderTopStartRadius: theme.borderRadius.lg,
  },
  header: {
    padding: 32,
  },
  content: {
    padding: 32,
  },
  name: {
    marginTop: 22,
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.md,
  },
  preparation: {
    marginBottom: 16,
    fontSize: theme.fonts.size.heading.sm,
    fontFamily: theme.fonts.family.medium,
  },
  time: {
    color: theme.colors.gray_400,
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.regular,
  },
  ingredients: {
    marginLeft: 32,
    marginBottom: 12,
    color: theme.colors.black,
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.medium,
  }
})