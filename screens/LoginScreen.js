import React, { useState } from 'react';
import { Button, Input, Image } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () => {};
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar styles="light" />
      <Image
        source={{
          uri: '../assets/Number 2 PNG images free download_PNG14925.png',
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
        />
      </View>
      <Button onPress={signIn} containerStyle={styles.button} title="Login" />
      <Button
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
  button: { width: 200, marginTop: 10 },
});
