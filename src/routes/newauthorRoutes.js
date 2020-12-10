const express = require('express');
const newauthorRouter = express.Router();
function router(nav){

newauthorRouter.get('/',function(req,res){
    res.render("newauthor",
    {
        nav,
        title:'Authors'
    });
});
// authorsRouter.get('/:id',function(req,res){
//     const id = req.params.id
//     res.render('author',{
//         nav,
//         title:'Author',
//         author: authors[id]
//     })
// })
return newauthorRouter;
}
module.exports = router;
