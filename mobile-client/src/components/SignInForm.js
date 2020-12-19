import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import {Text, Input, Button } from 'react-native-elements';
import useSignIn from '../hook/useSignIn'

const SignInForm = () => {
    const [ phone, setPhone] = useState('');
    const [ code, setCode] = useState('');
    const [handleSubmit, errorMessage] = useSignIn();

    return (
        <View style={styles.container}>
            <Text h3>Sign in:</Text>
            <Input
                label='Phone number' 
                onChangeText={setPhone}
                value={phone}
            ></Input>
            <Input
                label='Code' 
                onChangeText={setCode}
                value={code}
            ></Input>
            {errorMessage ?  <Text>{errorMessage}</Text> : null}
            <Button 
                title='Submit'
                onPress={() => handleSubmit(phone)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15
    }
});

export default SignInForm;