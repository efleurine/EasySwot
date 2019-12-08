import React, {useState} from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
  Icon,
} from '@ui-kitten/components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

import {asyncStorage} from './lib';

import {
  SplashScreen,
  LaunchScreen,
  HomeScreen,
  SettingScreen,
  ProfileScreen,
} from './screens';

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="EasySwot" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const SettingStack = createStackNavigator();
export function SettingStackScreen() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Setting" component={SettingScreen} />
    </SettingStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
export function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
    </ProfileStack.Navigator>
  );
}

const TabStack = createBottomTabNavigator();
export function TabStackScreen() {
  return (
    <TabStack.Navigator initialRouteName="Profile">
      <TabStack.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" fill={color} width={size} height={size} />
          ),
        }}
      />
      <TabStack.Screen
        name="Setting"
        component={SettingStackScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="share" fill={color} width={size} height={size} />
          ),
        }}
      />
      <TabStack.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" fill={color} width={size} height={size} />
          ),
        }}
      />
    </TabStack.Navigator>
  );
}

const AppStack = createStackNavigator();
export function Navigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [firstLaunch, setFirstLaunch] = useState('');

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      // We should also handle error for production apps
      const firstLaunchTime = await asyncStorage.getData('firstLaunch');
      let first = '';
      if (firstLaunchTime) {
        first = firstLaunchTime;
      }

      // This will switch to the App screen or Auth screen and this w
      setIsLoading(false);
      setFirstLaunch(first);
    };

    bootstrapAsync();
  }, []);
  return (
    <NavigationNativeContainer>
      <AppStack.Navigator headerMode="none">
        {isLoading ? (
          <AppStack.Screen name="Splash" component={SplashScreen} />
        ) : firstLaunch === '' ? (
          <AppStack.Screen name="Launch">
            {() => <LaunchScreen onComplete={setFirstLaunch} />}
          </AppStack.Screen>
        ) : (
          <>
            <AppStack.Screen name="Tab" component={TabStackScreen} />
          </>
        )}
      </AppStack.Navigator>
    </NavigationNativeContainer>
  );
}
