import { useState } from 'react';
import {verifyOTP} from '../api/one_time_password'
import firebase from 'firebase'; 

export default () => {
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit =  async (phone, code) => {
        try{
            const token = await verifyOTP(phone, code);
            firebase.auth().signInWithCustomToken(token);
        }catch(err){
            setErrorMessage('Error validating code.');
        }
    };
    return [handleSubmit, errorMessage];
};