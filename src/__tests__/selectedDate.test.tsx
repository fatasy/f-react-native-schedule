import React from 'react';
import { render } from '@testing-library/react-native';
import Schedule from 'f-react-native-schedule';
import dayjs from 'dayjs';
import { DaysWeek } from '../constants';

test('change selectedDate in day view', () => {
  const { rerender, getByText } = render(<Schedule currentView="day" />);
  getByText(new Date().getDate().toString());

  const selectedDate = new Date('2022-12-11 09:45:00');
  rerender(<Schedule selectedDate={selectedDate} currentView="day" />);
  getByText(selectedDate.getDate().toString());
});

test('change selectedDate in week view', () => {
  const { rerender, getByText } = render(<Schedule currentView="week" />);
  DaysWeek.forEach((day) => getByText(dayjs().day(day).format('DD')));

  const selectedDate = dayjs('2022-12-11 09:45:00');
  rerender(
    <Schedule selectedDate={selectedDate.toDate()} currentView="week" />
  );
  DaysWeek.forEach((day) => getByText(selectedDate.day(day).format('DD')));
});
