import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

import { TextInput } from '../components/Form';
import { Button } from '../components/Button';
import colors from '../constants/colors';

import { validateCredentials } from '../util/auth';
import { useSignUp } from '../util/api';

export const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // Initialise setErrors with state with empty object
  const [errors, setErrors] = useState({});
  const signup = useSignUp();

  const submit = async () => {
    try {
      await validateCredentials({ email, password, confirmPassword });
      signup.mutate(
        { email, password },
        {
          onSuccess: () => {
            navigation.popToTop();
          },
        },
      );
    } catch (error) {
      const nextErrors = {};
      error.inner.forEach(e => {
        nextErrors[e.path] = e.message;
      });
      setErrors(nextErrors);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        label="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
        errorText={errors.email}
      />
      <TextInput
        label="Password"
        secureTextEntry
        onChangeText={setPassword}
        text={password}
        errorText={errors.password}
      />
      <TextInput
        label="Confirm Password"
        secureTextEntry
        onChangeText={setConfirmPassword}
        text={confirmPassword}
        errorText={errors.confirmPassword || signup?.error?.message}
      />

      <Button onPress={submit}>Sign Up</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 20,
  },
});
