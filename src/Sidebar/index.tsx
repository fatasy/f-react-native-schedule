import React from 'react';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import ScheduleContext from '../ScheduleContext';

import styles from './styles';

const Sidebar: React.FC = () => {
  const { hours, sidebarSettings, cellDimensions } =
    useContext(ScheduleContext);
  const { hourColor, hourFormat, cellRender } = sidebarSettings;
  const { height } = cellDimensions;
  function renderHour(hour: number) {
    return (
      <View key={hour} style={[styles.card, { height }]}>
        {cellRender && cellRender(hour)}
        {!cellRender && (
          <React.Fragment>
            <Text style={{ color: hourColor }}>
              {dayjs().hour(hour).format(hourFormat)}
            </Text>
          </React.Fragment>
        )}
      </View>
    );
  }

  return (
    <View style={[styles.container, { marginTop: height }]}>
      {hours?.map(renderHour)}
    </View>
  );
};

export default Sidebar;
