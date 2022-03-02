import React, { useContext } from 'react';
import type { Dayjs } from 'dayjs';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
  StyleSheet,
  GestureResponderEvent,
  View,
} from 'react-native';
import { defaultCellSettings } from '../constants';
import ScheduleContext from '../ScheduleContext';

export type onCellPress = (date: Dayjs, event: GestureResponderEvent) => void;
export type onCellLongPress = (
  date: Dayjs,
  event: GestureResponderEvent
) => void;

type CellProps = {
  date: Dayjs;
} & ViewProps &
  TouchableOpacityProps;

const Cell: React.FC<CellProps> = ({ date, style: styleProp, ...props }) => {
  const { cellSettings, onCellPress, onCellLongPress } =
    useContext<ScheduleContext>(ScheduleContext);
  const { render, style } = cellSettings;

  const touchableOpacityProps = {
    ...(typeof onCellPress === 'function' && {
      onPress: (event) => onCellPress(date, event),
    }),
    ...(typeof onCellLongPress === 'function' && {
      onLongPress: (event) => onCellLongPress(date, event),
    }),
  } as TouchableOpacityProps;

  return (
    <TouchableOpacity
      style={[styles.container, styleProp]}
      {...props}
      {...touchableOpacityProps}
    >
      <View style={[styles.content, style]}>{render && render(date)}</View>
    </TouchableOpacity>
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
  content: {
    flex: 1,
  },
});

export default Cell;
