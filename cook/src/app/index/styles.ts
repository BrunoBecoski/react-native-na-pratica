import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    marginTop: 42,
    lineHeight: 44,
    color: theme.colors.black,
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.size.heading.xl,
  },
  subtitle: {
    color: theme.colors.black,
    fontSize: theme.fonts.size.heading.xl,
    fontFamily: theme.fonts.family.regular,
  },
  message: {
    marginTop: 12,
    marginBottom: 38,
    color: theme.colors.gray_400,
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.regular,
  },
  ingredients: {
    gap: 12,
    flexWrap: 'wrap',
    paddingBottom: 200,
    flexDirection: 'row',
  },
});