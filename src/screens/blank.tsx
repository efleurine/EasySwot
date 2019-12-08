import React from 'react';

export function BlankScreen({route, navigation}) {
  const {Renderer, screenOptions} = route.params;

  if (!Renderer) {
    throw new Error('You must provide the component');
  }

  if (screenOptions) {
    navigation.setOptions(screenOptions);
  }

  return <Renderer navigation={navigation} route={route} />;
}
