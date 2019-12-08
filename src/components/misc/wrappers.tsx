import React, {ReactNode} from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import {StyleSheet, StyleProp} from 'react-native';
import {Layout} from '@ui-kitten/components';

interface ScreenWrapperProps {
  children: ReactNode;
  styles?: StyleProp;
}

export const ScreenWrapper = ({children, styles}: ScreenWrapperProps) => {
  return (
    <SafeAreaView style={localStyles.safeView}>
      <Layout style={[localStyles.background, styles]}>{children}</Layout>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  background: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#E2E7E7',
  },
  wrapper: {
    backgroundColor: 'transparent',
  },
});
