const express = require('express');
const authorsRouter = express.Router();
function router(nav){

var authors= [
    {
        title: 'William Shakespeare',
        author: '1554 - 1616',
        genre: 'Drama',
        img:'https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg'
    },
    {
        title: 'Arthur Conan Doyle',
        author: '1859 - 1930',
        genre: 'Novels and Short Stories',
        img:'https://upload.wikimedia.org/wikipedia/commons/b/bb/Conan_doyle.jpg'
    },
    {
        title: 'Leo Tolstoy',
        author: '1847 - 1910',
        genre: 'Novels',
        img:'https://cdn.britannica.com/94/4694-050-CABE0BB0/Leo-Tolstoy.jpg'
    }
]
authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
        nav,
        title:'Authors',
        authors
    });
});
authorsRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('author',{
        nav,
        title:'Author',
        author: authors[id]
    })
})
return authorsRouter;
}
module.exports = router;
