import express from 'express';
import{
    listTodo,
    addPage,
    addTodo,
    deleteTodo,
    updatePage,
    updateTodo
}from '../controllers/todoController.js';

const router=express.Router();

router.get('/', listTodo);
router.get('/add', addPage);
router.post('/add', addTodo);
router.get('/delete/:id', deleteTodo);
router.get('/update/:id', updatePage);
router.post('/update/:id', updateTodo);

export default router;