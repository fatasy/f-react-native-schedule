import React from 'react';
import type { Dayjs } from 'dayjs';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import { defaultCellSettings } from '../constants';

export type onCellPress = (date: Date, event: GestureResponderEvent) => void;
export type onCellLongPress = (
  date: Date,
  event: GestureResponderEvent
) => void;

type CellProps = {
  date: Dayjs;
  onCellPress?: onCellPress;
  onCellLongPress?: onCellLongPress;
} & ViewProps &
  TouchableOpacityProps;

const Cell: React.FC<CellProps> = ({
  date,
  style,
  onCellPress,
  onCellLongPress,
  ...props
}) => {
  const touchableOpacityProps = {
    ...(onCellPress && {
      onPress: (event) => onCellPress && onCellPress(date.toDate(), event),
    }),
    ...(onCellPress && {
      onLongPress: (event) =>
        onCellLongPress && onCellLongPress(date.toDate(), event),
    }),
  } as TouchableOpacityProps;

  return (
    <TouchableOpacity
      {...touchableOpacityProps}
      style={[styles.container, style]}
      {...props}
      onPress={() => {
        console.log('dewde');
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 100,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    ...defaultCellSettings.style,
  },
});

export default Cell;
