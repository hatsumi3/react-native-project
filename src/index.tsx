import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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

const Sub1 = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Sub1</Text>
    </View>
  );
};

const Sub2 = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Sub2</Text>
    </View>
  );
};
type RootStackParamList = {
  Main: undefined;
  Sub: undefined;
};

type RootTabParamList = {
  Top: undefined;
  Sub1: undefined;
  Sub2: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const StackNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Sub" component={Sub} />
    </Stack.Navigator>
  );
};

const TabNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Top" component={StackNavigator} />
      <Tab.Screen name="Sub1" component={Sub1} />
      <Tab.Screen name="Sub2" component={Sub2} />
    </Tab.Navigator>
  );
};

const Index = (): JSX.Element => {
  return (
    <NavigationContainer onStateChange={newState => console.log(newState)}>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Index;
