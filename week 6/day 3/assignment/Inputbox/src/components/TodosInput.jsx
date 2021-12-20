import { useState } from "react"
import { nanoid } from 'nanoid'

const TodosInput = ({ handleAddTodo }) => {
    const [text, setText] = useState("")
    const handleChange = ({ target }) => {
        setText(target.value);
    }

    const handleClick = () => {
        const data = {
            id: nanoid(4),
            title: text,
            status: false
        }
        handleAddTodo(data)
    }
    return (
        <>
            <div className="p-4">
                <input
                    className="input-task"
                    autoFocus
                    type="text"
                    placeholder="Enter Todo"
                    value={text}
                    onChange={handleChange} />
                <button onClick={handleClick} className="btn-success">Add Task</button>
            </div>
        </>
    )
}

export default TodosInput