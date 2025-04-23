var jwt = require('jsonwebtoken');
var utils=require('../Utilities/RandomString');

class User
{
    constructor(){
    this.isAuthenticated=false;
    this.data={}
    }

    IsAuthenticated(username){
        if(this.data.username==username)
            return this.isAuthenticated;
        if(!username)
            return this.isAuthenticated;
        return false;
    }

    Token(data)
    {
        return jwt.sign(data,process.env.JWT_Secret,{expiresIn:'1h'});
    }

    Verify(req,res,next){
        const token = req.header('Authorization')?.split(' ')[1]  ;
        jwt.verify(token,process.env.JWT_Secret,(err,data)=>{
            if(!err){
                this.isAuthenticated=true;
            }
            this.data=data?data:{};
            req.user=this;
            next();
        });
    }

    RefreshToken(data){
        var randomString=utils.GenerateWithBase64();
        var dataString=btoa(JSON.stringify(data));
        return randomString+"."+dataString;
    }

    Auth(data){
        return {
            token: this.Token(data),
            refreshToken:this.RefreshToken(data)
        }
    }
    AuthWithRefresh(data){
        var obj=JSON.parse(atob(data.split('.')[1]));
        return this.Auth(obj);
    }

}

module.exports=User