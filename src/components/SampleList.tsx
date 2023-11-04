import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

type SampleListItem = {
  id: String;
  title: String;
};

interface SampleListProps {
  data: SampleListItem[];
}

function SampleList({data}: SampleListProps): JSX.Element {
  return (
    <>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Text style={textStyles.text}>{item.title}</Text>
        )}
      />
    </>
  );
}

const textStyles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default SampleList;
export type {SampleListItem};
