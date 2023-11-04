import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

function Theme(): JSX.Element {
  const [theme, setTheme] = React.useState(lightTheme);
  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <TouchableHighlight style={theme.container}>
          <>
            <Text
              onPress={() => {
                setTheme(theme === lightTheme ? darkTheme : lightTheme);
              }}
              style={theme.label}>
              切り替え
            </Text>
            <Profile name="journal" />
          </>
        </TouchableHighlight>
      </ThemeContext.Provider>
    </>
  );
}

interface ProfileProps {
  name: String;
}

function Profile(props: ProfileProps) {
  const {theme} = React.useContext(ThemeContext);
  return <Text style={theme.label}>{props.name}</Text>;
}

const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
  },
  label: {
    backgroundColor: 'white',
    color: 'black',
  },
});

const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
  },
  label: {
    backgroundColor: 'black',
    color: 'white',
  },
});

type Theme = typeof lightTheme | typeof darkTheme;

interface Context {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

const ThemeContext = React.createContext<Context>({
  theme: lightTheme,
  setTheme: (_: Theme) => {},
});

export default Theme;
