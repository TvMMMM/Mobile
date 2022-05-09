import * as React from "react";
import { Text, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import SearchBar from "../components/SearchBar";
import useDebounce from "../hooks/use-debounce";
import EventList from "../components/EventList";

const HomeScreen = () => {
  const [input, setInput] = React.useState("a");
  const [refresh, setRefresh] = React.useState(false);
  const searchTerm = useDebounce(input, 500);

  React.useEffect(() => {
    setRefresh(true);
    setInput("");
  }, []);

  return (
    <SafeAreaView>
      <View m={6}>
        <Text fontSize="3xl" fontWeight="bold" color={Colors.primary.text}>
          Events 🎯
        </Text>
        <SearchBar input={input} setInput={setInput} />

        <EventList searchTerm={searchTerm} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
