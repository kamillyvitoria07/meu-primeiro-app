import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Appearance } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Home from "./src/Home";
import MyComponent from "./src/MyComponent";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
    primary: "#131313",
    accent: "#550000",
    danger: "#ed1c24",
  },
};
const dark = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: "#131313",
    primary: "#fff",
    accent: "#550000",
    danger: "#ed1c24",
  },
};
const colorScheme = Appearance.getColorScheme(); //Verica qual o tema que esta sendo usado
export default function App() {
  return (
    <View>
      <PaperProvider theme={colorScheme == "dark" ? dark : theme}>
        <Home />
      </PaperProvider>
        <MyComponent />
    </View>
  );
}
