import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    bottom: 24,
    padding: 24,
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.black,
  },
  header: {
    marginBottom: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: { 
    color: theme.colors.white,
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.regular,
  },
})