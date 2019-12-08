import React from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
// import {Text} from 'react-native-ele';

type ScreenLoaderProps = {} & typeof defaultProps;

const defaultProps = {
  text: 'Loading',
};
export const ScreenLoader = (props: ScreenLoaderProps) => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>{props.text}</Text>
    </View>
  );
};

ScreenLoader.defaultProps = defaultProps;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
