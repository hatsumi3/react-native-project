import React from 'react';
import {StyleSheet, ViewStyle, Text, View, Image} from 'react-native';

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
      <Image
        source={{uri: 'kafka_icon'}}
        style={imageStyles.icon}
        // resizeMode 検証
        resizeMode="contain"
        // resizeMode="cover"
        // resizeMode="stretch"
      />
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

const imageStyles = StyleSheet.create({
  icon: {width: 400, height: 200},
});

export default Multi;
