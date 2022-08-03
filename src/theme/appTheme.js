import palette from "./palette";
const appTheme = (color, mode) => ({
  palette: {
    type: mode,
    primary: palette[color].palette.primary,
    secondary: palette[color].palette.secondary,
  },
});

export default appTheme;
