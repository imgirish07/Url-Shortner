// // Using Session Id concept:-
// const SessionidToUserMap = new Map();

// function setUser(id, user) {
//     SessionidToUserMap.set(id, user);
//     console.log("SessionID to User Map in auth:", SessionidToUserMap);
// }

// function getUser(id) {
//     return SessionidToUserMap.get(id);
// }

// module.exports = {
//     getUser,
//     setUser,
// }

// // Using Json web Token:-
const jwt= require('jsonwebtoken');
// secretKey is very important and it should not be shared publically
const secretKey= process.env.SECRET_KEY;

function setUser(user){
    return jwt.sign({
        _id:user._id,
        email:user.email,
    }, secretKey);
}

function getUser(token){
    if(!token) return null;
    return jwt.verify(token, secretKey);
}

module.exports = {
    getUser,
    setUser,
}