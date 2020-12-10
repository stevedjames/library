const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const nav=[
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Authors'
    }
    
];

const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
const newbooksRouter=require('./src/routes/newbookRoutes')(nav);
const newauthorRouter=require('./src/routes/newauthorRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);


app.use(express.static(__dirname + '/public'));
// app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/newbook',newbooksRouter);
app.use('/newauthor',newauthorRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

app.listen(port,()=>{console.log("Server ready at" + port)});