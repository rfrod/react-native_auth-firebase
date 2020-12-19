import { useState } from 'react';
import {createUser, requestOTP} from '../api/one_time_password' 

export default () => {
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit =  async (phone) => {
        try{
            await createUser(phone);
            try{
                await requestOTP(phone);
            }catch(err){
                setErrorMessage('Error sending confirmation code.');
            }
        }catch(err){
            setErrorMessage('Error creating user');
        }
    };
    return [handleSubmit, errorMessage];
};