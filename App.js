import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';

import store from './src/store';

import MapScreen from './src/components/screens/MapScreen';

export default function App() {
  return (
      <Provider store={ store }>
        <View style={styles.container}>
          <MapScreen />
        </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
