import Amplify from '@aws-amplify/core';
import {DataStore, Predicates} from '@aws-amplify/datastore';

import {User} from '../../models';
import {logError} from './error';
import {asyncStorage} from './async-storage';

export async function createUser(data: any): Promise<any> {
  try {
    const result = await DataStore.save(new User(data));
    return result;
  } catch (error) {
    logError(error);
    return null;
  }
}

export async function getUserProfile() {
  try {
    const users = await DataStore.query(User);
    console.log(users);
  } catch (error) {
    logError(error);
  }
}

export async function getUser(): Nulllable<string> {
  /**
   * because we are not using external user we need a way to get/set a unique user
   * this method is not production proof
   */

  try {
    const userId = await asyncStorage.getData('@userId');
    return userId;
  } catch (error) {
    logError(error);
  }
  return null;
}

export async function setUser(userId: string) {
  try {
    await asyncStorage.storeData('@userId', userId);
  } catch (error) {
    logError(error);
  }
}
