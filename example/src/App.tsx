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
import FAB from 'react-native-fab';

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
        </View>

        <Schedule
          schedules={schedules}
          selectedDate={date}
          currentView={currentView}
        />
        <FAB
          buttonColor="red"
          iconTextColor="#FFFFFF"
          onClickAction={() => {
            console.log('FAB pressed');
          }}
          visible={true}
          iconTextComponent={<Text>+</Text>}
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
