import React from 'react';
import {View, Text} from 'react-native';
import styleConstructor from './style';
import PropTypes from 'prop-types';

const Noti = ({theme, isNoti, isDisabled, notiColor, textNotiColor, isToday, isSelected, sumNoti}) => {

  const style = styleConstructor(theme);
  const notiStyle = [style.noti];
  const notiTextStyle = [style.text, {color: textNotiColor || '#ffffff'}]

  if (isNoti) {
    notiStyle.push(style.visibleNoti);

    if (isToday) {
      notiStyle.push(style.todayNoti);
    }

    if (isDisabled) {
      notiStyle.push(style.disabledNoti);
    }

    if (isSelected) {
      notiStyle.push(style.selectedNoti);
    }

    if (notiColor) {
      notiStyle.push({backgroundColor: notiColor});
    }
  }

  return (
    <View style={notiStyle}>
      <Text numberOfLines={1} style={notiTextStyle}>{sumNoti}</Text>
    </View>
  );
};

export default Noti;

Noti.propTypes = {
  theme: PropTypes.object,
  isMarked: PropTypes.bool,
  notiColor: PropTypes.string,
  isSelected: PropTypes.bool,
  isToday: PropTypes.bool,
  isDisabled: PropTypes.bool
};
