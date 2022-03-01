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
  style: ViewStyle;
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

export type ScheduleSchedulingSettings = {
  fields: Partial<SchedulingFields>;
} & Omit<SchedulingSettings, 'fields'>;
