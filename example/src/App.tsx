/* eslint-disable react-native/no-inline-styles */
import dayjs from 'dayjs';
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePicker from 'react-native-datepicker';
import Schedule from '../../src';
import type { ScheduleView } from '../../src/types';
import { useState } from 'react';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import NumericInput from 'react-native-numeric-input';

const dates = [
  dayjs().subtract(1, 'hour'),
  dayjs().add(1, 'day').add(1, 'hour'),
  dayjs().add(2, 'day').subtract(2, 'hour'),
  dayjs().add(4, 'day').subtract(6, 'hour'),
];

const schedules = dates.map((date) => ({
  id: date.day(),
  subject: `scheduling ${date.day()}`,
  start_time: date.format('YYYY-MM-DD HH:mm:ss'),
  end_time: date.add(1, 'hour').format('YYYY-MM-DD HH:mm:ss'),
}));

const typeOfViewOptions: RadioButtonProps[] = [
  {
    id: '1',
    label: 'Day',
    value: 'day',
  },
  {
    id: '2',
    label: 'Week',
    value: 'week',
    selected: true,
  },
];

export default function App() {
  const [date, setDate] = useState(new Date());
  const [radioButtons, setRadioButtons] = useState(typeOfViewOptions);
  const [currentView, setCurrentView] = useState<ScheduleView>('week');
  const [startHour, setStartHour] = useState<number>(0);
  const [endHour, setEndHour] = useState<number>(24);

  function onCurrentViewChange(nextRadioButtons: RadioButtonProps[]) {
    const nextCurrentView = nextRadioButtons.find(({ selected }) => selected);
    setCurrentView(nextCurrentView.value as ScheduleView);
    setRadioButtons(nextRadioButtons);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={{ padding: 8, width: '100%' }}>
          <Text>Selected Date</Text>
          <DatePicker
            style={{ width: '100%', marginBottom: 8 }}
            date={date}
            placeholder="select date"
            onDateChange={setDate}
          />

          <Text>Type of View</Text>
          <RadioGroup
            containerStyle={{ marginBottom: 8 }}
            radioButtons={radioButtons}
            onPress={onCurrentViewChange}
            layout="row"
          />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <View>
              <Text>Start Hour</Text>
              <NumericInput
                value={startHour}
                minValue={0}
                maxValue={endHour}
                type="up-down"
                onChange={setStartHour}
              />
            </View>

            <View>
              <Text>End Hour</Text>
              <NumericInput
                value={endHour}
                minValue={startHour}
                maxValue={24}
                type="up-down"
                onChange={setEndHour}
              />
            </View>
          </View>
        </View>

        <Schedule
          schedules={schedules}
          selectedDate={date}
          currentView={currentView}
          startHour={startHour.toString()}
          endHour={endHour.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
