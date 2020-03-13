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
                err: {
                    message: 'Invalid Token'
                }
            });
        
        }

        req.usuario = decoded.usuario;
        next();

    });
    
};

//=======================
// Verify ROLE ADMIN
//=======================

let verifyRole_Admin = (req, res, next) =>{



    let usuario = req.usuario;

    if(usuario.role === 'ADMIN_ROLE'){  
        
        next();

    }else{
    

     return res.json({
            ok:false,
            err: {
                message: 'The User has not a role administrator'
            }
        });

    }
    
    


}

module.exports = {
    verifyToken,
    verifyRole_Admin
}