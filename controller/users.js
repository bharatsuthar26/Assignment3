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
    const {email,password}= req.body;
    console.log(req.body)
    if(fs.existsSync(`./users/${email}.txt`)){

    
   let data= fs.readFileSync(`./users/${email}.txt`);
        var array = data.toString().split("\n");
        for(i in array){
            if(password==array[3])
         {
            res.render('user',{email:email}); 
          
         }
         else{
            res.render('login',{errmsg:"password  not matched"});
         }
        }
}
else{
    res.render('login',{errmsg:"file is not in our system"});
}

})
module.exports={registration,login};