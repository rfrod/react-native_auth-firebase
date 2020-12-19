import axios from "axios";

const otp_server = axios.create({
    baseURL: 'https://us-central1-one-time-password-test-37960.cloudfunctions.net'
});

export const createUser = async (phone) => {
    try{
        await otp_server.post('/create_user',{
            phone: phone
        })
    }catch(err){
        throw(err);
    }
};

export const requestOTP = async (phone) => {
    try{
        await otp_server.post('/request_one_time_password',{
            phone: phone
        })
    } catch(err){
        throw(err);
    }
};

export const verifyOTP = async (phone,code) => {
    try{
        const response = await otp_server.post('/verify_one_time_password',{ phone, code });
        return response.data.token;
    } catch(err){
        throw(err);
    }
};

export default otp_server;