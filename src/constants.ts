import type {
  CellDimensions,
  CellSettings,
  HeaderSettings,
  SidebarSettings,
} from './types';

export const DaysWeek = [0, 1, 2, 3, 4, 5, 6];
export const Hours = Array.from(Array(24).keys());

export const defaultSchedulingSettings = {
  fields: {
    subject: {
      name: 'subject',
    },
    startTime: {
      name: 'start_time',
    },
    endTime: {
      name: 'end_time',
    },
  },
};

export const defaultCellDimensions: CellDimensions = {
  height: 80,
  width: 100,
};

export const defaultSidebarSettings: SidebarSettings = {
  hourColor: '#b5b5c3',
  hourFormat: 'HH:00',
};

export const defaultHeaderSettings: HeaderSettings = {
  currentDayColor: '#1a73e8',
};

export const defaultCellSettings: CellSettings = {
  style: {
    borderColor: '#ebedf2',
    backgroundColor: '#f3f6f9',
  },
};
