import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {mapping, dark as darkTheme, light as lightTheme} from '@eva-design/eva';
import {default as appTheme} from './custom-theme.json'; // <-- Import app theme

import {Navigator} from './stack';

enableScreens();
const theme = {...lightTheme, ...appTheme};

export function App() {
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </ApplicationProvider>
    </React.Fragment>
  );
}
