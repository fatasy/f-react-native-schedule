/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ScheduleContext from '../ScheduleContext';

const Header: React.FC = () => {
  const { selectedDate, days, headerSettings, cellDimensions } =
    useContext(ScheduleContext);
  const { cellRender, currentDayColor } = headerSettings;

  function renderDayWeek(dayNumber: number) {
    const day = dayjs(selectedDate).day(dayNumber);
    const isCurrentDay = day.format('DD-MM') === dayjs().format('DD-MM');

    return (
      <View key={dayNumber} style={[styles.card, cellDimensions]}>
        {cellRender && cellRender(day)}
        {!cellRender && (
          <View style={styles.content}>
            <Text
              style={{
                color: isCurrentDay ? currentDayColor : '#000',
              }}
            >
              {day.format('dd')}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: isCurrentDay ? currentDayColor : '#000',
              }}
            >
              {day.format('DD')}
            </Text>
          </View>
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {days.map((day) => renderDayWeek(day))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  card: {
    height: 50,
    width: 100,
  },
  content: {
    flex: 1,
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderColor: '#ebedf2',
    backgroundColor: '#f3f6f9',
  },
});

export default Header;
