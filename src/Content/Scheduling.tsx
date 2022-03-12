import dayjs, { Dayjs } from 'dayjs';
import React, { useContext } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import type { Scheduling as SchedulingType } from '../types';
import ScheduleContext from '../ScheduleContext';

export type onSchedulingPress = (
  scheduling: SchedulingType,
  event: GestureResponderEvent
) => void;
export type onSchedulingLongPress = (
  scheduling: SchedulingType,
  event: GestureResponderEvent
) => void;

type SchedulingProps = {
  date: Dayjs;
  scheduling: SchedulingType;
} & ViewProps &
  TouchableOpacityProps;

function getSchedulingHeight(
  startTime: string,
  endTime: string,
  height: number
) {
  const time = dayjs(endTime).diff(dayjs(startTime), 'hours', true);
  return height * time;
}

const Scheduling: React.FC<SchedulingProps> = ({
  date,
  scheduling,
  style: styleProp,
  ...props
}) => {
  const {
    cellDimensions,
    schedulingSettings,
    onSchedulingPress,
    onSchedulingLongPress,
  } = useContext<ScheduleContext>(ScheduleContext);
  const { fields, render, style } = schedulingSettings;
  const {
    subject: { name: subjectFieldName, style: subjectStyle },
    startTime: { name: startTimeFieldName },
    endTime: { name: endTimeFieldName },
  } = fields;
  const {
    [subjectFieldName]: subject,
    [startTimeFieldName]: startTime,
    [endTimeFieldName]: endTime,
  } = scheduling;
  const { height: cellHeight } = cellDimensions;

  const touchableOpacityProps = {
    ...(typeof onSchedulingPress === 'function' && {
      onPress: (event) => onSchedulingPress(scheduling, event),
    }),
    ...(typeof onSchedulingLongPress === 'function' && {
      onLongPress: (event) => onSchedulingLongPress(scheduling, event),
    }),
  } as TouchableOpacityProps;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        styleProp,
        {
          height: getSchedulingHeight(startTime, endTime, cellHeight),
        },
      ]}
      {...touchableOpacityProps}
      {...props}
    >
      {render && render(scheduling, date)}
      {!render && (
        <View style={[styles.content, style]}>
          <Text numberOfLines={2} style={[styles.subject, subjectStyle]}>
            {subject}
          </Text>
          <Text numberOfLines={1} style={styles.time}>
            {dayjs(startTime).format('HH:mm')} -{' '}
            {dayjs(endTime).format('HH:mm')}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 80,
    width: 100,
    zIndex: 999,
    elevation: 4,
  },
  content: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
    zIndex: 999,
  },
  subject: {
    color: '#464e5f',
  },
  time: {
    fontSize: 11,
    color: '#464e5f',
  },
});

export default Scheduling;
