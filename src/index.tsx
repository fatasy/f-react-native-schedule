import React, { useMemo } from 'react';
import { View, ScrollView, ViewStyle } from 'react-native';

import Sidebar from './Sidebar';
import Content from './Content';

import styles from './styles';

import {
  DaysWeek,
  defaultCellDimensions,
  defaultCellSettings,
  defaultHeaderSettings,
  defaultSchedulingSettings,
  defaultSidebarSettings,
} from './constants';
import {
  getCellDimensions,
  getDays,
  getHours,
  getSchedulingSettings,
} from './utils';

import ScheduleContext from './ScheduleContext';
import type {
  CellDimensions,
  CellSettings,
  ScheduleSchedulingSettings,
} from './types';

export type ScheduleProps = {
  style?: ViewStyle;
  schedulingSettings?: Partial<ScheduleSchedulingSettings>;
  cellSettings?: Partial<CellSettings>;
  cellDimensions?: Partial<CellDimensions>;
} & Partial<
  Pick<
    ScheduleContext,
    | 'schedules'
    | 'selectedDate'
    | 'startHour'
    | 'endHour'
    | 'currentView'
    | 'daysWeek'
    | 'headerSettings'
    | 'sidebarSettings'
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
  cellDimensions = defaultCellDimensions,
  headerSettings = defaultHeaderSettings,
  sidebarSettings = defaultSidebarSettings,
  cellSettings = defaultCellSettings,
  schedulingSettings = defaultSchedulingSettings,
  onCellPress,
  onCellLongPress,
  onSchedulePress,
  onScheduleLongPress,
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
      headerSettings: { ...defaultHeaderSettings, ...headerSettings },
      sidebarSettings: { ...defaultSidebarSettings, ...sidebarSettings },
      schedulingSettings: getSchedulingSettings(schedulingSettings),
      cellDimensions: getCellDimensions(currentView, {
        ...defaultCellDimensions,
        ...cellDimensions,
      }),
      cellSettings,
      onCellPress,
      onCellLongPress,
      onSchedulePress,
      onScheduleLongPress,
    }),
    [
      schedules,
      startHour,
      endHour,
      daysWeek,
      selectedDate,
      currentView,
      cellDimensions,
      headerSettings,
      sidebarSettings,
      cellSettings,
      schedulingSettings,
      onCellPress,
      onCellLongPress,
      onSchedulePress,
      onScheduleLongPress,
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
