import React from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button title="Go to Signature" onPress={() => navigation.navigate('SignatureScreen')} />
    </View>
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

export default HomeScreen;