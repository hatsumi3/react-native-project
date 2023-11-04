import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Multi from './src/components/Multi';
import Theme from './src/components/Theme';
import SampleList, {SampleListItem} from './src/components/SampleList';

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
  const data: SampleListItem[] = [
    {id: 'first', title: 'ひとつめ'},
    {id: 'second', title: 'ふたつめ'},
    {id: 'thrid', title: 'みっつめ'},
  ];

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <View style={containerStyles.box1}>
          <Text style={styles.text}>My First component.</Text>
          <Text>{7 + 19 + 16}</Text>
          {false}
          {null}
          {undefined}
          {isNumber ? <Text>42</Text> : <Text>foo</Text>}
          {true && <Text>true</Text>}
          <Multi />
          <Theme />
        </View>
        <View style={containerStyles.box2}>
          <Text>box2</Text>
        </View>
        <View style={containerStyles.box3}>
          <SampleList data={data} />
        </View>
        <View style={containerStyles.box4}>
          <Text>box4</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const containerStyles = StyleSheet.create({
  box1: {
    flex: 2,
    backgroundColor: 'pink',
  },
  box2: {
    flex: 1,
    backgroundColor: 'blue',
  },
  box3: {
    height: 400,
    backgroundColor: 'pink',
  },
  box4: {
    height: 400,
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
