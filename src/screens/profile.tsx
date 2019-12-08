import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Layout,
  Button,
  Icon,
  TopNavigation,
  TopNavigationAction,
  Text,
  Input,
  Avatar,
  Card,
} from '@ui-kitten/components';
import {ScreenWrapper} from '../components';
import useForm from 'react-hook-form';
import {getUser, setUser, asyncStorage} from '../lib';

export function ProfileScreen({navigation}) {
  const [profile, setProfile] = useState(null);
  const {register, setValue, handleSubmit, getValues} = useForm();
  const onSubmit = data => {
    console.log('the values', data);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button appearance="ghost">Save</Button>,
    });

    const bootstrap = async () => {
      const profil = await asyncStorage.getData('@profile');
      if (profil !== null) {
        setProfile(profile);
      }
      console.log('profile is null');
    };
    bootstrap();
  }, []);

  let defaultProfile = {
    firstName: '',
    lastName: '',
  };

  if (profile !== null) {
    defaultProfile = {
      ...profile,
    };
  }

  return (
    <ScreenWrapper styles={{paddingHorizontal: 0}}>
      <Layout style={styles.avatarContainer}>
        <Avatar source={require('../assets/emma-fleufleu.jpg')} size="giant" />
      </Layout>

      <Layout
        style={{
          paddingHorizontal: 16,
          opacity: 1,
          backgroundColor: 'transparent',
        }}>
        <InfoText>First name</InfoText>
        <InfoWrapper>
          <Text>Emmanuel</Text>
        </InfoWrapper>
        {/* <Input
          ref={register({name: 'firstName'})}
          placeholder="Place your Text"
          defaultValue={defaultProfile.firstName}
          onChangeText={text => setValue('firstName', text)}
        /> */}

        <InfoText>Last name</InfoText>
        <InfoWrapper>
          <Text>Fleurine</Text>
        </InfoWrapper>
        {/* <Card appearance="filled">
          <Input
            ref={register({name: 'lastName'})}
            placeholder="Place your Text"
            defaultValue={defaultProfile.lastName}
            onChangeText={text => setValue('lastName', text)}
          />
        </Card> */}
        {/* <Button onPress={handleSubmit(onSubmit)} status="control">
          Save
        </Button> */}
      </Layout>
    </ScreenWrapper>
  );
}

const InfoWrapper = ({children}) => (
  <Card style={styles.infoWrapper}>{children}</Card>
);

const InfoText = ({children, ...rest}) => (
  <Text category="c2" style={styles.infoTex} {...rest}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  infoWrapper: {
    borderWidth: 0,
    paddingVertical: 4,
    // paddingHorizontal: 4,
    marginTop: 4,
    borderRadius: 7,
  },
  infoTex: {
    paddingHorizontal: 7,
    marginTop: 16,
  },
});
