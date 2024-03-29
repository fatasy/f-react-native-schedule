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
  showVerticalScrollbar?: boolean;
  showHorizontalScrollbar?: boolean;
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
    | 'onSchedulingPress'
    | 'onSchedulingLongPress'
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
  showVerticalScrollbar = true,
  showHorizontalScrollbar = true,
  onCellPress,
  onCellLongPress,
  onSchedulingPress,
  onSchedulingLongPress,
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
      days: getDays(selectedDate, currentView, daysWeek),
      hours: getHours(startHour, endHour),
      daysWeek,
      headerSettings: { ...defaultHeaderSettings, ...headerSettings },
      sidebarSettings: { ...defaultSidebarSettings, ...sidebarSettings },
      schedulingSettings: getSchedulingSettings(schedulingSettings),
      showVerticalScrollbar,
      showHorizontalScrollbar,
      cellDimensions: getCellDimensions(currentView, {
        ...defaultCellDimensions,
        ...cellDimensions,
      }),
      cellSettings,
      onCellPress,
      onCellLongPress,
      onSchedulingPress,
      onSchedulingLongPress,
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
      showVerticalScrollbar,
      showHorizontalScrollbar,
      onCellPress,
      onCellLongPress,
      onSchedulingPress,
      onSchedulingLongPress,
    ]
  );

  return (
    <ScheduleContext.Provider value={value}>
      <ScrollView
        style={[styles.container, style]}
        showsVerticalScrollIndicator={showVerticalScrollbar}
        showsHorizontalScrollIndicator={showHorizontalScrollbar}
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
