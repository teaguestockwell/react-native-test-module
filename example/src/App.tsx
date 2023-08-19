import * as React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { createCalendarEvent, multiply } from 'react-native-test-module';

const Multiply = () => {
  const [result, setResult] = React.useState(2);

  return (
    <Button
      title={result + ''}
      onPress={() => {
        multiply(result, 1.2).then(setResult);
      }}
    />
  );
};

const Calendar = () => {
  return (
    <Button
      title="create Calendar event"
      onPress={() => createCalendarEvent('event name', 'event location')}
    />
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Multiply />
      <Calendar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
