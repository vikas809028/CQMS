var express= require('express');
var mongoose= require('mongoose');
const cors = require('cors');
const Qrouter = require('./routes/queryRoute');
const Router = require('./routes/custRoute');
const router2 = require('./routes/queRoute');
const router3 = require('./routes/getRoutes');

var app=express();
const port=8000;
// middleware

app.use(express.json());
app.use(cors());
app.use((req,res,next)=>{
    if(req.originalUrl=='/favicon.ico')
    {
        res.end();
    }
    next();
})




// connection 
mongoose.connect('mongodb://127.0.0.1:27017/cqm')
.then(()=>console.log("Connection Done 👍"))
.catch(err=>console.log("error 😒",err));


app.use(router3);
app.use(Router);
app.use(Qrouter);
app.use(router2);



app.listen(port,()=>console.log(`your server is running at port no ${port}`))