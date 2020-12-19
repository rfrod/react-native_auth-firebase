const twilio = require('twilio');
const twilio_account = require('./twilio_account');

module.exports = new twilio.Twilio(twilio_account.sid,twilio_account.token);
