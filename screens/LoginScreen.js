import React, { useState, useEffect } from 'react';
import { Button, Input, Image } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { auth } from '../firebase';
import Icon from '../assets/icon.png';
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace('Home');
      }
    });
    return unsubscribe;
  }, []);
  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar styles="light" />
      <Image
        source={{
          uri: Icon,
        }}
        style={{ width: 200, height: 200, marginBottom: 50 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <Button
        buttonStyle={{ backgroundColor: '#068399' }}
        onPress={signIn}
        containerStyle={styles.button}
        title="Login"
      />
      <Button
        buttonStyle={{ borderColor: '#068399' }}
        onPress={() => navigation.navigate('SignUp')}
        containerStyle={styles.button}
        type="outline"
        title="Sign Up"
      />
      <View style={{ height: 200 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  inputContainer: { width: 300 },
  button: { width: 300, marginTop: 10, color: 'white' },
});
