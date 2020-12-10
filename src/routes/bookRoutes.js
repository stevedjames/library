const express = require('express');
const booksRouter = express.Router();
function router(nav){

var books= [
    {
        title: 'Tom and Jerry',
        author: 'Joseph Barbera',
        genre: 'Cartoon',
        img:'https://i.pinimg.com/474x/29/ff/77/29ff779f1ececcf46429a30ec6702eed.jpg'
    },
    {
        title: 'Harry Potter',
        author: 'J K Rowling',
        genre: 'Fantasy',
        img:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2Fhpsorcstone.jpg'
    },
    {
        title: 'Pathumayude Aadu',
        author: 'Basheer',
        genre: 'Drama',
        img:'https://images-na.ssl-images-amazon.com/images/I/61isRprUQ+L.jpg'
    }
]
booksRouter.get('/',function(req,res){
    res.render("books",
    {
        nav,
        title:'Library',
        books
    });
});
booksRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('book',{
        nav,
        title:'Library',
        book: books[id]
    })
})
return booksRouter;
}
module.exports = router;
