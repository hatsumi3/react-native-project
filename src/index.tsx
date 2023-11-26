import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type MainProps = NativeStackScreenProps<RootStackParamList, 'Main', 'Sub'>;

const Main = ({navigation}: MainProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Sub');
        }}>
        <Text>go to sub</Text>
      </TouchableOpacity>
    </View>
  );
};

const Sub = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Sub</Text>
    </View>
  );
};

type RootStackParamList = {
  Main: undefined;
  Sub: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Sub" component={Sub} />
    </Stack.Navigator>
  );
};

const Index = (): JSX.Element => {
  return (
    <NavigationContainer onStateChange={newState => console.log(newState)}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Index;
