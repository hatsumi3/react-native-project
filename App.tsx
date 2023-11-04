import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Multi from './src/components/Multi';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle: ViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    // flex check.
    // flexDirection: 'row',
    //flexDirection: 'column-reverse',
  };

  const isNumber = 0;

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={containerStyles.box1}>
        <Text style={styles.text}>My First component.</Text>
        <Text>{7 + 19 + 16}</Text>
        {false}
        {null}
        {undefined}
        {isNumber ? <Text>42</Text> : <Text>foo</Text>}
        {true && <Text>true</Text>}
        <Multi />
      </View>
      <View style={containerStyles.box2}>
        <Text>box2</Text>
      </View>
    </SafeAreaView>
  );
}

const containerStyles = StyleSheet.create({
  box1: {
    flex: 1,
    backgroundColor: 'pink',
  },
  box2: {
    flex: 2,
    backgroundColor: 'blue',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
