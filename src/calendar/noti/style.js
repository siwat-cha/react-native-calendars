import {StyleSheet} from 'react-native';
import * as defaultStyle from 'react-native-calendars/src/style';

const STYLESHEET_ID = 'stylesheet.noti';

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    noti: {
      position: 'absolute',
      top: -5,
      right: -5,
      width: 16,
      height: 16,
      borderRadius: 8,
      opacity: 0,
      justifyContent: 'center',
      alignItems: 'center',
      ...appStyle.notiStyle
    },
    text: {
      fontSize: 10,
    },
    visibleNoti: {
      opacity: 1,
      backgroundColor: appStyle.notiColor
    },
    selectedNoti: {
      backgroundColor: appStyle.selectedNotiColor
    },
    disabledNoti: {
      backgroundColor: appStyle.disabledNotiColor || appStyle.notiColor
    },
    todayNoti: {
      backgroundColor: appStyle.todayNotiColor || appStyle.notiColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
