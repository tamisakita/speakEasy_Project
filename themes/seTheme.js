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
        fontWeight: "regular",
        fontFamily: "Poppins_700Bold",
        fontSize: 40,
      },
      h2Style: {
        color: themePalette.primary,
        fontWeight: "regular",
        fontFamily: "Poppins_700Bold",
        fontSize: 35,
      },
      h3Style: {
        color: themePalette.white,
        fontWeight: "regular",
        fontFamily: "Poppins_600SemiBold",
        fontSize: 30,
      },
      h4Style: {
        color: themePalette.primary,
        fontWeight: "regular",
        fontFamily: "Poppins_400Regular",
        fontSize: 20,
      },
      style: {
        fontWeight: "regular",
        fontFamily: "Poppins_400Regular",
        fontSize: 20,
      },
    },
    Button: {
      buttonStyle: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: themePalette.primary,
      },
      titleStyle: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 20,
      },
    },
  },
});
