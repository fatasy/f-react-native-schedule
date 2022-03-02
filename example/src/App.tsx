import dayjs from 'dayjs';
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Schedule from '../../src';

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

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Schedule
          schedules={schedules}
          selectedDate={new Date('2022-03-07')}
          onCellPress={(date) => {
            console.log({ date });
          }}
          onSchedulePress={(scheduling) => {
            console.log({ scheduling });
          }}
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
