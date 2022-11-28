const { default: mongoose } = require("mongoose");


const todosSchema = mongoose.Schema ({
    title: {
        type: String,
        require: true,
    },
    completed: {
        type: Boolean,
        default: false
    }
})


const Todo = mongoose.model("Todo", todosSchema);

module.exports = Todo