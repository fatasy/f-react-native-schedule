import dayjs from 'dayjs';
import { defaultSchedulingSettings, Hours } from './constants';

import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { Dimensions } from 'react-native';
import type {
  CellDimensions,
  DaysWeek,
  EndHour,
  ScheduleSchedulingSettings,
  ScheduleView,
  SchedulingSettings,
  SelectedDate,
  StartHour,
} from './types';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export function getHours(startHourRaw: StartHour, endHourRaw: EndHour) {
  const [startHour, startMinute = '00'] = startHourRaw.split(':');
  const [endHour, endMinute = '00'] = endHourRaw.split(':');

  const start = dayjs()
    .hour(parseInt(startHour, 10))
    .minute(parseInt(startMinute, 10));
  const end = dayjs()
    .hour(parseInt(endHour, 10))
    .minute(parseInt(endMinute, 10));

  const hours = Hours;

  Hours.forEach((hour, key) => {
    const hourMoment = dayjs().hour(hour);

    if (!hourMoment.isSameOrAfter(start, 'hour')) {
      delete hours[key];
    }

    if (!hourMoment.isSameOrBefore(end, 'hour')) {
      delete hours[key];
    }
  });

  return hours;
}

export function getDays(
  selectedDate: SelectedDate,
  currentView: ScheduleView,
  daysWeek: DaysWeek
): DaysWeek {
  if (currentView === 'day') return [dayjs(selectedDate).day()];
  return daysWeek;
}

export function getCellDimensions(
  view: ScheduleView,
  settings: CellDimensions
): CellDimensions {
  if (view === 'day') {
    return {
      width: Dimensions.get('window').width - 50,
      height: settings.height,
    };
  }

  return settings;
}

export function getScrollViewContainerWidth(
  view: ScheduleView,
  days: DaysWeek,
  cellWidth: number
) {
  if (view === 'day') return Dimensions.get('window').width - 80;
  return cellWidth * days.length;
}

export function isUndefined(value: any): boolean {
  return value === undefined;
}

export function getSchedulingSettings(
  settings: Partial<ScheduleSchedulingSettings>
): SchedulingSettings {
  const { fields, style, render } = settings;
  return {
    fields: {
      subject: {
        ...defaultSchedulingSettings.fields.subject,
        ...(fields?.subject && {
          ...fields.subject,
        }),
      },
      startTime: {
        ...defaultSchedulingSettings.fields.startTime,
        ...(fields?.startTime && {
          ...fields.startTime,
        }),
      },
      endTime: {
        ...defaultSchedulingSettings.fields.endTime,
        ...(fields?.endTime && {
          ...fields.endTime,
        }),
      },
    },
    style,
    render,
  } as SchedulingSettings;
}
