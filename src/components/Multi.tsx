import React from 'react';
import {
  StyleSheet,
  ViewStyle,
  Text,
  View,
  Image,
  ActivityIndicator,
  Switch,
  PermissionsAndroid,
  Alert,
} from 'react-native';

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
  const [value, setValue] = React.useState(false);
  const onValueChange = (newValue: boolean) => setValue(newValue);

  const requestCameraPermission = async () => {
    try {
      const isGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log(isGranted);
      if (isGranted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('許可ありがとうございます');
      } else {
        Alert.alert('カメラを使うと便利');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  React.useEffect(() => {
    requestCameraPermission();
  }, [value]);

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
      <Switch value={value} onValueChange={onValueChange} />
      <View style={indicatorStyles.container}>
        {value && <ActivityIndicator size="large" color="white" />}
      </View>
    </>
  );
}

const indicatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

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
