const express = require('express');
const exphbs= require('express-handlebars');
const PORT = 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars');
app.set('views', './views');
//routes
const mainRoutes= require('./routes/mainRoutes');
const userRoutes= require('./routes/userRoutes');

app.use("/",mainRoutes);
app.use("/user",userRoutes);
app.use("*",(req,res)=>{
    res.render("notfound");
})
app.get("/",(req,res)=>{
    res.render('index');
})
app.listen(PORT,(err)=>{
    if(err) throw err
    else {
        console.log(`Server works on ${PORT}`);
    }
})