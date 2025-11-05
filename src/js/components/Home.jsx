// ...existing code...
import React, { useState } from "react";
import "../../styles/index.css";

//create your first component
const Home = () => {

    const [inputValue, setInputValue] = useState("")
    const [tasks, setTasks] = useState([])

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyup = (e) => {
        if (e.key === "Enter") {
            const texto = inputValue.trim()
            if (texto === "") return
            const nuevaTarea = {
                id: Date.now().toString() + Math.random().toString(36).slice(2),
                text: texto
            }
            setTasks(prev => [...prev, nuevaTarea])
            setInputValue("")
        }
    }

    const handleDelete = (id) => {
        setTasks(prev => prev.filter(t => t.id !== id))
    }

    return (
        <div className="container">
            <label className="form-label" htmlFor="todo">Escribe una tarea</label>
            <input
                className="form-control"
                id="todo"
                name="name"
                type="text"
                value={inputValue}
                onChange={onInputChange}
                onKeyUp={handleKeyup}
            />

            {tasks.length === 0 ? (
                <div className="card">
                    <div className="card-body">No hay tareas aún</div>
                </div>
            ) : (
                <div className="cards-list">
                    {tasks.map(task => (
                        <div className="card" key={task.id} style={{ maxWidth: "720px" }}>
                            <div className="card-body">
                                <div className="task-text">{task.text}</div>
                                <i
                                    className="fa-solid fa-trash fa-bounce trash-btn"
                                    title="Eliminar tarea"
                                    onClick={() => handleDelete(task.id)}
                                ></i>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
