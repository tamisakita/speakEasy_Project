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
        fontSize: 30,
      },
    },
  },
});
