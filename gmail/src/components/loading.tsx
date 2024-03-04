import { ActivityIndicator } from "react-native";

export function Loading() {
  return (
    <ActivityIndicator className="flex-1 bg-gray-900 items-center justify-center color-orange-500" size="large" />
  )
}