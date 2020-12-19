import React, { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import {Text, Input, Button } from 'react-native-elements';
import useSignUp from '../hook/useSignUp'

const SignUpForm = () => {
    const [ phone, setPhone] = useState('');
    const [handleSubmit, errorMessage] = useSignUp();

    return (
        <View style={styles.container}>
            <Text h3>Sign up:</Text>
            <Input
                label='Phone number' 
                onChangeText={(phone) => setPhone(phone)}
                value={phone}
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

export default SignUpForm;