import React from 'react';
import {StyleSheet, ViewStyle, Text, View} from 'react-native';

interface Props {
  children?: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

function Multi({
  children = 'default text',
  style = {backgroundColor: 'green'},
  onPress = () => console.log('hello.'),
}: Props): JSX.Element {
  return (
    <>
      <View>
        <Text style={style} onPress={onPress}>
          {children}
        </Text>
      </View>
      <Text style={textStyles.common}>Text</Text>
      <Text style={[textStyles.common, textStyles.bold]}>Text</Text>
    </>
  );
}

const textStyles = StyleSheet.create({
  common: {
    fontSize: 20,
  },
  bold: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Multi;
