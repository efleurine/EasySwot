import React from 'react';
import {View, Text, Button} from 'react-native';
import {ScreenWrapper} from '../components';
// import {Text, Button} from 'react-native-elements';
import {asyncStorage} from '../lib';

export function LaunchScreen({onComplete}) {
  const go = async () => {
    const d = new Date().toString();
    await asyncStorage.storeData('firstLaunch', d);
    onComplete(d);
  };

  return (
    <ScreenWrapper>
      <View>
        <Text style={{textAlign: 'center'}}>Launch Screen</Text>

        <View style={{marginVertical: 16}} />

        <Text>Thanks for installing Runner App.</Text>

        <View style={{marginVertical: 16}} />

        <Text>
          This screen will appear only on the first launch after the user just
          installs the app
        </Text>

        <View style={{marginVertical: 16}} />

        <Button
          title="Go to application"
          onPress={() => {
            go();
          }}
        />
      </View>
    </ScreenWrapper>
  );
}
