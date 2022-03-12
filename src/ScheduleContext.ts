import { createContext } from 'react';

import type { onCellLongPress, onCellPress } from './Content/Cell';
import type {
  onSchedulingLongPress,
  onSchedulingPress,
} from './Content/Scheduling';
import type {
  CellDimensions,
  CellSettings,
  DaysWeek,
  EndHour,
  HeaderSettings,
  Hours,
  ScheduleView,
  Scheduling,
  SchedulingSettings,
  SelectedDate,
  SidebarSettings,
  StartHour,
} from './types';

type ScheduleContext = {
  /**
   * To mark the active (current) date in the schedule.
   * The default is the current system date.
   *
   * @default 'new Date()'
   */
  selectedDate: SelectedDate;
  /**
   * It is used to specify the start time, from which the Schedule starts to be displayed.
   *
   * @default '00:00'
   */
  startHour: StartHour;
  /**
   * It is used to specify the end time at which the schedule ends. It also accepts a time string.
   *
   * @default '24:00'
   */
  endHour: EndHour;
  /**
   * To set the active view on the schedule
   *
   * * day
   * * week
   *
   * @default 'week'
   */
  currentView: ScheduleView;
  schedules: Array<Scheduling>;
  rawSchedules: Array<Scheduling>;
  days: Array<number>;
  hours: Hours;
  daysWeek: DaysWeek;
  cellDimensions: CellDimensions;
  headerSettings: HeaderSettings;
  sidebarSettings: SidebarSettings;
  cellSettings: CellSettings;
  schedulingSettings: SchedulingSettings;
  onCellPress?: onCellPress;
  onCellLongPress?: onCellLongPress;
  onSchedulingPress?: onSchedulingPress;
  onSchedulingLongPress?: onSchedulingLongPress;
};

const ScheduleContext = createContext({} as ScheduleContext);

export default ScheduleContext;
