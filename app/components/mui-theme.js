import { Utils, Styles, ThemeManager } from 'material-ui';

const theme = {
  spacing: Styles.Spacing,
  fontFamily: 'Roboto, sans',
  palette: {
    primary1Color: Styles.Colors.pink500,
    primary2Color: Styles.Colors.pink00,
    primary3Color: Styles.Colors.lightBlack,
    accent1Color: Styles.Colors.pinkA200,
    accent2Color: Styles.Colors.grey100,
    accent3Color: Styles.Colors.grey500,
    textColor: '#2c3e50',
    alternateTextColor: Styles.Colors.white,
    borderColor: Styles.Colors.grey300,
    disabledColor: Utils.ColorManipulator.fade(Styles.Colors.darkBlack, 0.3),
  },
}

export default theme;
