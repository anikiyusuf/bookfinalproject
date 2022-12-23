
const express = require("express")
const { AddAuthorValidationMW , UpdateAuthorValidationMW }  = require("../validator/author.validator")
const   authorController = require("../Controller/author.controller")
const authorRouter = express.Router()




authorRouter.get('/', authorController.getAllAuthors)

authorRouter.get('/:id', authorController.getAuthorById)

authorRouter.post('/', AddAuthorValidationMW , authorController.addAuthor)

authorRouter.put('/:id', UpdateAuthorValidationMW ,  authorController.updateAuthor)

authorRouter.delete('/:id', authorController.deleteAuthorById)



module.exports = authorRouter 