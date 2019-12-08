import AsyncStorage from '@react-native-community/async-storage';

import {logError} from './error';

const storeData = async (key: string, value: any) => {
  try {
    // await AsyncStorage.setItem('@storage_Key', 'stored value')
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    // saving error
    logError(e);
    return false;
  }
};

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
      return JSON.parse(value);
    }
    return null;
  } catch (e) {
    // error reading value
    logError(e);
  }
};

export const asyncStorage = {
  storeData,
  getData,
};
