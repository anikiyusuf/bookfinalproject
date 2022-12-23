const bookModel = require("../models/book")


function getAllBooks(req,res){
    bookModel.find()
    .then(books =>{
        res.send(books)
    })
.catch(err =>{
    console.log(err)
    res.send(err)
})
}

function getBookById(req,res){
    const id = req.params.id
    bookModel.findById(id)
       .then(book =>{
        res.status(200).send(book)
       }).catch(err =>{
        console.log(err)
        res.status(400).send(err)
       })
}


function addBook(req, res){
    const book = req.body
    book.lastUpdateAt = new Date()
    bookModel.create(book)
    .then(book =>{
        res.status(201).send(book)
    }).catch(err =>{
        console.log(err)
        res.status(500).send(err)
    })
}


function upDateBook(req, res){
    const id = req.params.id
    const book = req.body
    book.lastUpdateAt = new Date()
    bookModel.findByIdAndUpdate(id , book , { new: true})
    .then(newBook =>{
        res.status(200).send(newBook)
    })
    .catch(err =>{
        console.log(err)
        res.status(500).send(err)
    })

}


function deleteBookById(req,res){
    const id = req.params.id
    bookModel.findByIdAndRemove(id)
    .then(book =>{
        res.status(200).send(book)
    }).catch(err =>{
        console.log(err)
        res.status(500).send(err)
    })
}

module.exports = { 
    getAllBooks,
    getBookById,
    addBook,
    upDateBook,
    deleteBookById
}