const express = require("express")
const { AddBookValidationMW , UpdateBookValidationMW } = require("../validator/book.validator")
const  bookController = require("../Controller/book.controller")
const bookRouter = express.Router()


bookRouter.get("/" , bookController.getAllBooks)
bookRouter.get('/:id', bookController.getBookById)
bookRouter.post('/' , AddBookValidationMW, bookController.addBook)
bookRouter.put('/:id' , UpdateBookValidationMW, bookController.upDateBook)
bookRouter.delete('/:id',  bookController.deleteBookById)



module.exports = bookRouter