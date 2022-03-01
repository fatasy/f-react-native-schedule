import React from 'react';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import ScheduleContext from '../ScheduleContext';

import styles from './styles';

const Sidebar: React.FC = () => {
  const { hours } = useContext(ScheduleContext);

  function renderHour(hour: number) {
    return (
      <View key={hour} style={styles.card}>
        <Text style={styles.hour}>{dayjs().hour(hour).format('HH:00')}</Text>
      </View>
    );
  }

  return <View style={styles.container}>{hours?.map(renderHour)}</View>;
};

export default Sidebar;
