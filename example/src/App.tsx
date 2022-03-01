import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import Schedule from 'f-react-native-schedule';

export default function App() {
  return (
    <View style={styles.container}>
      <Schedule />
    </View>
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
