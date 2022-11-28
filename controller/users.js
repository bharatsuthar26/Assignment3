const fs= require('fs');

const registration = ((req,res)=>{
    let {name,uname,email,password,rpassword} = req.body;
    if(fs.existsSync(`./users/${email}.txt`)){
        res.render('regis',{errMsg:'Email already registered'})
    }
    else{
        fs.writeFile(`./users/${email}.txt`,`${name}\n ${uname}\n ${email}\n ${password}\n ${rpassword}`,(err)=>{
            if(err){
                res.render('regis',{errMsg:'Something went wrong'});
            }
            else{
                res.render('regis',{succMsg:'Registered Successfully'});
            }
        })
    }
})
const login= ((req,res)=>{

})
module.exports={registration,login};