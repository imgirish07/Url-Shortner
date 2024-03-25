// import uuid from npm package
// const { v4: uuidv4 } = require('uuid');

// // encrypting the password
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const { setUser } = require('../service/auth');

// // function to validate the email using Regular Expression (Regex)
const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

async function handleUserSignup(req, res) {

    // get all the data from frontend
    const { userName, email, password } = req.body;

    //validate the email if it is in correct format
    const validEmailBool = validateEmail(email);
    if(!validEmailBool){
        return res.status(400).json({message:"invalid format of email"});
    }

    // set a encrypted password
    let x;
    await bcrypt
        .hash(password, 10)
        .then(hashPassword => {
            // x will store the resolved promise i.e the value of hashPassword
            x = hashPassword;
        })
    const encryptedPassword = x;

    const user = await User.create({
        userName,
        email,
        password: encryptedPassword,
    })

    // making a token for this encrypted password
    const jwtToken = setUser(user);

    // now append the token into user
    user.jwtToken = jwtToken;

    // i dont want to send the password to  the frontend but it is stored in DB.
    user.password = undefined;

    return res.status(201).json({ user, boolValue: true });
}

async function handleUserlogin(req, res) {

    // get all the data from frontend
    const { email, password } = req.body;

    // check if enterd fields are correct
    if (!(email && password)) {
        return res.status(400).json({ msg: "send email and password" });
    }

    // find the user in DB
    const user = await User.findOne({ email })

    // if the user does not exist in DB
    if (!user) {
        return res.status(400).json({ msg: "Invalid email or password" });
    }

    // // matching the password
    // this function will comapre the password with the password stored in DB
    const boolPasswordMatched = await bcrypt.compare(password, user.password)
    if (boolPasswordMatched) {
        const jwtToken = setUser(user);
        // // using cookies t store the token
        res.cookie("uid", jwtToken, { path: "/" });
        res.setHeader('Access-Control-Allow-Credentials',true);
        return res.status(200).json({ msg: 'Login Successful', boolValue: true });
    }

    // const sessionID = uuidv4();
    // console.log("sessionID : ", sessionID)

}

module.exports = {
    handleUserSignup,
    handleUserlogin,
}