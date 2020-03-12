const jwt = require('jsonwebtoken');


//=======================
// Verify token
//=======================

let verifyToken = (req, res, next) =>{

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded)=>{
        
        //console.log(token)

        if( err ){

            return res.status(401).json({
                ok:false,
                err
            });
        
        }

        req.usuario = decoded.usuario;
        next();

    });
    
};

module.exports = {
    verifyToken
}