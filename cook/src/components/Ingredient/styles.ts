import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 6,
    height: 42,
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderColor: theme.colors.gray_200,
    borderRadius: theme.borderRadius.full,
  },
  image: {
    width: 16,
    height: 16,
  },
  title: {
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.medium,
  },
  selected: {
    borderColor: theme.colors.green_600,
    backgroundColor: theme.colors.green_100,
  },
});