const admin = require('firebase-admin')
const twilio = require('./twilio');
const functions = require('firebase-functions');

module.exports = function(req,res) {
    if(!req.body.phone){
        return res.status(422).send({error: 'Bad phone number.'});
    }

    const phone = String(req.body.phone).replace(/[^\d]/g ,"");

    admin.auth().getUser(phone)
        .then(user => {
            // Generate the code
            const code = Math.floor((Math.random() * 8999 + 1000));
            const to = '+' + phone

            //Send SMS
            twilio.messages.create({
                body: 'Your code is ' + code,
                to: to,
                from: '+14437207993'

            }, (err) => {
                if(err){
                    functions.logger.info("Twilio: Error sending SMS: " + to, {structuredData: true});
                    return res.status(422).send({error: 'Twilio' + err});
                }
                admin.database().ref('users/'+ phone)
                    .update({code: code, codeValid: true}, (err) => {
                        if(err) {
                            functions.logger.info("UPDATE: Error updating user " + phone, {structuredData: true});
                            res.status(422).send({error: err});
                        }
                        res.send({success: true});
                    });
            });
        })
        .catch( (err) => {
            functions.logger.info("AUTH: Error retieving user " + phone, {structuredData: true});
            res.status(422).send({error: err});
        });
}