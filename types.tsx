import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  Upload: undefined;
  Setting: undefined;
  TabOne: undefined;
  TabTwo: undefined;
  UploadScreen: undefined;
  EventDetailScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type HomeParamList = {
  HomeScreen: undefined;
  EventDetailScreen: undefined;
  UpdateEventScreen: undefined;
};

export type UploadParamList = {
  UploadScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type AuthStackParamList = {
  Landing: undefined;
  TabLogin: undefined;
  TabSignUp: undefined;
};

export type AuthTabParamList = {
  Landing: undefined;
  TabLogin: undefined;
  TabSignUp: undefined;
};

export type TabSettingParamList = {
  SettingScreen: undefined;
};
