import clsx from "clsx";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text, View } from "react-native";

import { colors } from "@/styles/colors";

export type IconNameProps = keyof typeof MaterialIcons.glyphMap;

interface DrawerButtonProps extends PressableProps {
  title: string;
  isDivider?: boolean;
  isFocused: boolean;
  iconName: IconNameProps;
  notifications?: number;
} 

export function DrawerButton({ 
  title,
  isDivider,
  isFocused,
  iconName,
  notifications,
  ...rest
}: DrawerButtonProps) {

  return (
    <Pressable
      className={clsx('py-2 w-full', {
        'border-b ml-10 border-gray-500' : isDivider,
      })}
      {...rest}
    >
      <View 
        className={clsx('flex-row items-center gap-4 h-14 px-6 -ml-2 w-full', {
          '-ml-12': isDivider,
          'bg-orange-800 rounded-r-full': isFocused
        })}
      >
        <MaterialIcons 
          name={iconName}
          size={20}
          color={isFocused ? colors.orange[300] : colors.gray[400]}
        />

        <Text
          className={clsx('font-subtitle text-base flex-1', {
            'text-orange-300' : isFocused,
            'text-white': !isFocused,
          })}
        > 
          {title}
        </Text>

        <Text
          className={clsx('text-sm font-body', {
            'text-orange-300' : isFocused,
            'text-gray-400' : !isFocused,
          })}
        >
          {notifications}
        </Text>
      </View>
    </Pressable>
  )
}