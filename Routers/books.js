const express=require('express')
const router=express.Router()
const bookController=require('../Controllers/books')
const authentication=require('../middleware/auth')

//Api to get All Books
router.get('/api/books',authentication,bookController.getAllBooks)
//Api to get one Book
router.get('/api/books/:id',authentication,bookController.getOneBooks)
//Api to  delete one  Book
router.delete('/api/books/:id',authentication,bookController.DeleteBooks)
//Api to Update one Book
router.put('/api/books/:id',authentication,bookController.UpdateBooks)
//Api to Add a Book
router.post('/api/books',authentication,bookController.CreateBooks)




module.exports=router