import Expo from 'expo';
import * as ExpoPixi from 'expo-pixi';
import React, { useRef} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "react-navigation-hooks";
delete global.WebGLRenderingContext;
class SignatureWorkaround extends ExpoPixi.Signature {
  constructor(props, context) {
    super(props, context);
    const oldOnContextCreate = this.onContextCreate;
    this.onContextCreate = (gl) => {
      const glView = gl;
      glView.getExtension = () => null;
      glView.getSupportedExtensions = () => [];
      oldOnContextCreate(glView);
    };
  }
}
const SignatureScreen = () => {
  const navigation = useNavigation();
  const sketch = useRef(null);
  const onReady = () => {
    console.log('ready!');
  };
  return(
    <View style={styles.container}>
    <View style={styles.container}>
      <View style={styles.sketchContainer}>
        <SignatureWorkaround
          ref={sketch}
          style={styles.sketch}
          strokeColor={'blue'}
          strokeAlpha={1}
          onReady={onReady}
        />
      </View>
    </View>
    <Button
      color={'blue'}
      title="undo"
      style={styles.button}
      onPress={() => {
        this.sketch.undo();
      }}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sketch: {
    flex: 1,
  },
  sketchContainer: {
    height: '100%',
  },
  image: {
    flex: 1,
  },
  label: {
    width: '100%',
    padding: 5,
    alignItems: 'center',
  },
  button: {
    zIndex: 1,
    padding: 12,
    minWidth: 56,
    minHeight: 48,
  },
});



export default SignatureScreen;
