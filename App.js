import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import InnerStack from './InnerStack';
import { enableScreens } from 'react-native-screens';

enableScreens();

const AppContainer = createAppContainer(InnerStack);

const App = () => {
  return (  
    <AppContainer>
      <view style={styles.container}>
        <HomeScreen />
      </view>
    </AppContainer>
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

export default App;