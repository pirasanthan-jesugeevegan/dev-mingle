import React, { useLayoutEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Login',
    });
  }, [navigation]);

  const signUp = () => {};
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Mignal Account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Image URL (Optional)"
          type="text"
          value={image}
          onChangeText={(text) => setImage(text)}
          onSubmitEditing={signUp}
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        onPress={signUp}
        title="Sign Up"
      />
      <View style={{ height: 200 }} />
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

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
