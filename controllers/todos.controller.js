const Todo = require("../model/Todo.model")

module.exports.todosController = {
    getTodos: async (req, res) => {
        try {
            const todos = await Todo.find();
            res.json(todos);
        } catch (error) {
            res.json({error: error.massage})
        }
    },
    addTodo: async (req, res) => {
        try {
            const todo = await Todo.create({
                title: req.body.title,
            });
            res.json(todo)
        } catch (error) {
            res.json({error: error.massage})
        }
    },
    editTodo: async (req, res) => {
        try {
            const todo = await Todo.findByIdAndUpdate(req.params.id, {
                completed: req.body.completed,
            },
            {new: true}
            );
            res.json(todo)
        } catch (error) {
            res.json({error: error.massage})

        }
    },
    deleteTodo: async(req, res) => {
        try {
             const todo = await Todo.findByIdAndDelete(req.params.id,{})
             res.json(todo)
        } catch (error) {
            res.json({error: error.massage})

        }
    }

}