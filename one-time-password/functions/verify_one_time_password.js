const admin = require('firebase-admin');
const { token } = require('./twilio_account');

module.exports = function(req,res) {
    // BAD INPUT check
    if(!req.body.phone || ! req.body.code){
        return res.status(422).send({error: 'Bad Input'});
    }
    const phone = String(req.body.phone).replace(/[^\d]/g ,"");
    const code = parseInt(req.body.code);
    // Retrieve user
    admin.auth().getUser(phone)
        .then(user => {
            const ref = admin.database().ref('users/'+ phone);
            ref.on('value', snapshot => {
                ref.off();
                const user = snapshot.val();
                /// CHeck CODE
                if((user.code !== code) || !user.codeValid ){
                    return res.status(422).send({error: 'Bad code.'});
                }
                // UPDATE CODE
                ref.update({ codeValid: false });
                // create OTP Token
                admin.auth().createCustomToken(phone)
                .then(token => res.send({token: token}))
            });
        })
        .catch( (err) => {
            functions.logger.info("AUTH: Error retieving user " + phone, {structuredData: true});
            return res.status(422).send({error: err});
        });
};