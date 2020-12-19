import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import SignUpForm from './src/components/SignUpForm'
import SignInForm from './src/components/SignInForm'
import OTPFirebase from './src/api/otp_firebase';

export default function App() {

  useEffect(()=>{
    OTPFirebase();
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <SignUpForm />
      <SignInForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
