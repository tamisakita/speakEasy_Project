import { Platform } from "react-native";
import { createTheme } from "@rneui/themed";

const themePalette = {
  primary: "#5C3C8B",
  primaryLighter: "#E0DBE8",
  grey: "#EFEFEF",
  greyDarker: "#444444",
  black: "#000000",
  white: "#FFFFFF",
};

export const seTheme = createTheme({
  components: {
    Text: {
      h1Style: {
        color: themePalette.primary,
        fontWeight: "bold",
        fontFamily: "Poppins_700Bold",
        fontSize: 50,
      },
      h2Style: {
        color: themePalette.primary,
        fontWeight: "bold",
        fontFamily: "Poppins_700Bold",
        fontSize: 40,
      },
      h3Style: {
        color: themePalette.white,
        fontWeight: "semibold",
        fontFamily: "Poppins_600SemiBold",
        fontSize: 30,
      },
      h4Style: {
        color: themePalette.primary,
        fontWeight: "light",
        fontFamily: "Poppins_300Light",
        fontSize: 22,
      },
    },
    Button: {
      buttonStyle: {
        borderRadius: 10,
        padding: 20,
        backgroundColor: themePalette.primary,
      },
      titleStyle: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 20,
      },
    },
  },
});
