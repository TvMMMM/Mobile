import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Box, Text, VStack, Avatar } from "native-base";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { TabSettingParamList } from "../types";
import Colors from "../constants/Colors";
import { useAuth } from "../hooks/useAuth";
import { TouchableOpacity } from "react-native";

export interface LoginForm {
  email: string;
  password: string;
}

const SettingScreen = () => {
  const {
    state: { user },
    signout,
  }: any = useAuth();
  const navigation =
    useNavigation<StackNavigationProp<TabSettingParamList, "SettingScreen">>();

  return (
    <VStack flex={1} justifyContent="flex-start" mt={20} mx={10}>
      <Box>
        <Text fontSize="3xl" fontWeight="bold" color={Colors.primary.text}>
          Setting
        </Text>
      </Box>
    </VStack>
  );
};

export default SettingScreen;
