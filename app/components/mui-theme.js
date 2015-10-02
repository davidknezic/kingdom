import {Utils,Styles} from 'material-ui';

const theme = {
  spacing: Styles.Spacing,
  fontFamily: 'Roboto, sans',
  palette: {
    primary1Color: Styles.Colors.cyan500,
    primary2Color: Styles.Colors.cyan700,
    primary3Color: Styles.Colors.lightBlack,
    accent1Color: Styles.Colors.pinkA200,
    accent2Color: Styles.Colors.grey100,
    accent3Color: Styles.Colors.grey500,
    textColor: Styles.Colors.darkBlack,
    alternateTextColor: Styles.Colors.white,
    borderColor: Styles.Colors.grey300,
    disabledColor: Utils.ColorManipulator.fade(Styles.Colors.darkBlack, 0.3),
  },
}

export default theme;
