const { Router } = require("express");
const { todosController } = require("../controllers/todos.controller");

const router = Router()

router.get('/', todosController.getTodos);
router.get('/:id');
router.post('/', todosController.addTodo);
router.patch('/:id', todosController.editTodo);
router.delete('/:id', todosController.deleteTodo);


module.exports = router;