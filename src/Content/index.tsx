import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import ScheduleContext from '../ScheduleContext';
import Header from './Header';
import Cell from './Cell';
import dayjs, { Dayjs } from 'dayjs';
import styles from './styles';

import isBetween from 'dayjs/plugin/isBetween';
import Scheduling from './Scheduling';
import { getScrollViewContainerWidth, isUndefined } from '../utils';

dayjs.extend(isBetween);

const Content: React.FC = () => {
  const {
    rawSchedules,
    days,
    hours,
    currentView,
    cellDimensions,
    schedulingSettings,
    onCellPress,
    onCellLongPress,
  } = useContext<ScheduleContext>(ScheduleContext);
  const [schedules, setSchedules] = useState<Array<any>>([]);
  const { fields } = schedulingSettings;
  const {
    startTime: { name: startTimeFieldName },
    endTime: { name: endTimeFieldName },
  } = fields;

  const dates = useMemo(() => {
    return hours
      .map((hour) => {
        return days.map((day) => {
          return dayjs().day(day).hour(hour).minute(0).second(0);
        });
      })
      .flat();
  }, [days, hours]);

  function getItemStyle(day: number, hour: number) {
    return {
      ...cellDimensions,
      left:
        currentView === 'day' ? 0 : day > 0 ? cellDimensions.width * day : 0,
      top: hour > 0 ? cellDimensions.height * (hour + 1) : 80,
    } as ViewStyle;
  }

  function renderItem(date: Dayjs, index: number) {
    const scheduling = schedules[date.valueOf()];

    if (isUndefined(scheduling)) {
      return (
        <Cell
          key={index}
          date={date}
          style={getItemStyle(date.day(), date.hour())}
          onCellPress={onCellPress}
          onCellLongPress={onCellLongPress}
        />
      );
    }

    return (
      <Scheduling
        key={index}
        date={date}
        scheduling={scheduling}
        style={getItemStyle(date.day(), date.hour())}
      />
    );
  }

  useEffect(() => {
    const nextSchedules = [] as Array<any>;
    rawSchedules?.forEach((scheduling) => {
      const { [startTimeFieldName]: startTime, [endTimeFieldName]: endTime } =
        scheduling;
      const date = dates.find((d) => d.isBetween(startTime, endTime));

      if (date === undefined) return;
      nextSchedules[date.valueOf()] = scheduling;
    });
    setSchedules(nextSchedules);
  }, [startTimeFieldName, endTimeFieldName, dates, rawSchedules]);

  return (
    <ScrollView
      showsHorizontalScrollIndicator
      horizontal
      style={[styles.container]}
      contentContainerStyle={{
        width: getScrollViewContainerWidth(
          currentView,
          days,
          cellDimensions.width
        ),
      }}
      decelerationRate="fast"
    >
      <Header />
      {dates.map(renderItem)}
    </ScrollView>
  );
};

export default Content;
