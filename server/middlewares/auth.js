const { getUser } = require('../service/auth');

async function restrictToLoggedinUserOnly( req, res, next) {

    const token = req.cookies.uid;
    // console.log("userUid  in middleware auth: ", token);

    if(!token){
        return res.status(404).json({msg: "Login falied due to wrong token"});
    }

    const user = await getUser(token)

    if (!user) {
        return res.status(404).json({msg: "wrong user"});
    }

    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedinUserOnly
}