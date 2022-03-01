import React, { useMemo } from 'react';
import { View, ScrollView, ViewStyle } from 'react-native';

import Sidebar from './Sidebar';
import Content from './Content';

import styles from './styles';

import {
  DaysWeek,
  defaultCellDimensions,
  defaultSchedulingSettings,
} from './constants';
import {
  getCellDimensions,
  getDays,
  getHours,
  getSchedulingSettings,
} from './utils';

import ScheduleContext from './ScheduleContext';
import type { ScheduleSchedulingSettings } from './types';

export type ScheduleProps = {
  style?: ViewStyle;
  schedulingSettings?: ScheduleSchedulingSettings;
} & Partial<
  Pick<
    ScheduleContext,
    | 'schedules'
    | 'selectedDate'
    | 'startHour'
    | 'endHour'
    | 'currentView'
    | 'daysWeek'
    | 'cellDimensions'
    | 'onCellPress'
    | 'onCellLongPress'
    | 'onSchedulePress'
    | 'onScheduleLongPress'
  >
>;

const Schedule: React.FC<ScheduleProps> = ({
  schedules = [],
  currentView = 'week',
  selectedDate = new Date(),
  startHour = '00:00',
  endHour = '24:00',
  daysWeek = DaysWeek,
  schedulingSettings = defaultSchedulingSettings,
  cellDimensions = defaultCellDimensions,
  style,
}) => {
  const value = useMemo(
    () => ({
      schedules,
      currentView,
      selectedDate,
      rawSchedules: schedules,
      startHour,
      endHour,
      days: getDays(currentView, daysWeek),
      hours: getHours(startHour, endHour),
      daysWeek,
      schedulingSettings: getSchedulingSettings(schedulingSettings),
      cellDimensions: getCellDimensions(currentView, {
        ...defaultCellDimensions,
        ...cellDimensions,
      }),
    }),
    [
      schedules,
      startHour,
      endHour,
      daysWeek,
      selectedDate,
      currentView,
      schedulingSettings,
      cellDimensions,
    ]
  );

  return (
    <ScheduleContext.Provider value={value}>
      <ScrollView
        style={[styles.container, style]}
        showsVerticalScrollIndicator
        showsHorizontalScrollIndicator
      >
        <View style={styles.content}>
          <Sidebar />
          <Content />
        </View>
      </ScrollView>
    </ScheduleContext.Provider>
  );
};

export default Schedule;
