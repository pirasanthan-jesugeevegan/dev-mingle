import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Image, Button } from 'react-native-elements';
import { KeyboardAvoidingView } from 'react-native';
import { auth } from '../firebase';

const ProfileScreen = ({ route, navigation }) => {
  const [user] = useState(route.params.route.params.authUser);

  // TODO: update user profile  = //firebase.google.com/docs/auth/web/manage-users#update_a_users_profile

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace('Login');
    });
  };
  const deleteUser = () => {
    auth.currentUser
      .delete()
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar styles="light" />
      <Image
        source={{ uri: user.photoURL }}
        style={{ width: 200, height: 200, marginTop: 20 }}
      />
      <Text style={{ fontSize: 25, paddingTop: 25 }}>{user.displayName}</Text>
      <Text style={{ fontSize: 15, paddingTop: 10 }}>{user.email}</Text>
      <Button
        buttonStyle={{ backgroundColor: '#068399', marginTop: 25 }}
        onPress={signOutUser}
        containerStyle={styles.button}
        title="Log out"
      />
      <Button
        buttonStyle={{ backgroundColor: 'red' }}
        onPress={deleteUser}
        containerStyle={styles.button}
        title="Delete Account"
      />
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  button: { width: 300, marginTop: 10, color: 'white' },
});
