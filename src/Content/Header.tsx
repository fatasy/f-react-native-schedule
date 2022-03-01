/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ScheduleContext from '../ScheduleContext';

const Header: React.FC = () => {
  const { days, cellDimensions } = useContext(ScheduleContext);

  function renderDayWeek(dayNumber: number) {
    const day = dayjs().day(dayNumber);
    const isCurrentDay = dayjs().day() === dayNumber;
    return (
      <View key={dayNumber} style={[styles.card, cellDimensions]}>
        <Text>{day.format('dd')}</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            ...(isCurrentDay && {
              color: 'red',
            }),
          }}
        >
          {day.format('DD')}
        </Text>
      </View>
    );
  }

  return <View style={styles.container}>{days.map(renderDayWeek)}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
  },
  card: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderColor: '#ebedf2',
    backgroundColor: '#f3f6f9',
  },
});

export default Header;
