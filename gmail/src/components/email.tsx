import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { EmailDataProps } from "@/utils/emails";
import { colors } from "@/styles/colors";
import { Avatar } from "./avatar";

interface EmailProps {
  data : EmailDataProps;
}

export function Email({ data }: EmailProps) {
  const { avatar, name, date, subject, message, start, marker } = data;

  return (
    <View className="w-full flex-row gap-4">
      <Avatar source={{ uri: avatar }} />

      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          {
            marker && 
              <MaterialIcons name="label-important" size={16} color={colors.yellow[600]} />
          }

          <Text className="text-lg font-subtitle text-gray-400 flex-1">
            {name}
          </Text>

          <Text className="text-sm font-body text-gray-400">
            {date}
          </Text>
        </View>

        <Text 
          className="text-base font-body text-gray-400" 
          numberOfLines={1}
          lineBreakMode="tail"
        >
          [{subject}]
        </Text>

        <View className="flex-row items-center gap-4">
          <Text 
            className="text-base font-body text-gray-400 flex-1"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            {message}
          </Text>

          <MaterialIcons 
            name={start ? "star" : "star-border"}
            size={22} 
            color={start ? colors.yellow[600] : colors.blue[600]}
          />     
        </View>
      </View>
      
    </View>
  )
}