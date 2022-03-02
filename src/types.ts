import type { Dayjs } from 'dayjs';
import type { TextStyle, ViewStyle } from 'react-native';

export type Scheduling = {
  [startTimeFieldName: string]: string;
} & {
  [endTimeFieldName: string]: string;
} & {
  [titleFieldName: string]: string;
} & any;

export type StartHour = string;
export type EndHour = string;
export type Hours = Array<number>;
export type SelectedDate = Date;
export type ScheduleView = 'day' | 'week';
export type DaysWeek = Array<number>;
export type CellDimensions = {
  height: number;
  width: number;
};

export type CellSettings = {
  style?: ViewStyle;
  render?: (date: Dayjs) => JSX.Element;
};

export type SchedulingField = {
  name: string;
  style?: TextStyle;
  render?: (value: string, scheduling: Scheduling) => JSX.Element;
};

export type SchedulingFields = {
  subject: SchedulingField;
  startTime: SchedulingField;
  endTime: SchedulingField;
};

export type SchedulingSettings = {
  fields: SchedulingFields;
  style?: ViewStyle;
  render?: (scheduling: Scheduling, date: Dayjs) => JSX.Element;
};

export type HeaderSettings = {
  cellRender?: (date: Dayjs) => JSX.Element;
  /**
   * Current day color
   *
   * @default '#1a73e8'
   */
  currentDayColor?: string;
};

export type SidebarSettings = {
  cellRender?: (hour: number) => JSX.Element;
  /**
   * @default '#b5b5c3'
   */
  hourColor?: string;
  /**
   * if you want to display the period, set 'HH:00 A'
   * @link https://day.js.org/docs/en/display/format
   * @default 'HH:00'
   */
  hourFormat?: string;
};

export type ScheduleSchedulingSettings = {
  fields: Partial<SchedulingFields>;
} & Omit<SchedulingSettings, 'fields'>;
