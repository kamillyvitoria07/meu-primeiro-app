import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
export default function Home() {
  const { colors } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text style={{ color: colors.primary }}>React Native Paper</Text>
      <Text style={{ color: colors.accent }}>Prof Ingrid Mendonça</Text>
      <Button icon="camera" mode="contained" onPress={() => {}}>
        tirar foto
      </Button>
    </View>
  );
}
