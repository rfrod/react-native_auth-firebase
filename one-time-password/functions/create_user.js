const admin = require('firebase-admin')

module.exports = function(req, res) {
    //Verify user phone
    if(!req.body.phone){
        return res.status(422).send({error: 'Bad Input'});
    }
    //verify phone numer syntax
    const phone = String(req.body.phone).replace(/[^\d]/g ,"")

    //create a new account
    
    //respond the user
    admin.auth().createUser({uid: phone})
        .then(user => res.send(user))
        .catch( err => res.status(422).send({error: err}));
}