const express = require('express');
const newbooksRouter = express.Router();
function router(nav){

newbooksRouter.get('/',function(req,res){
    res.render("newbook",
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
return newbooksRouter;
}
module.exports = router;
