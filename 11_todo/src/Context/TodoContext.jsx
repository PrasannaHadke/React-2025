import React, { createContext, useState } from "react";

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([])

    const add = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
        };
        setTodos( (prev)=>[...prev, newTodo])
    };
    const remove = (id) => {
        setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
     }

    return (
        <TodoContext.Provider value={{ add, remove, todos }}>
            {children}
        </TodoContext.Provider>
    )
}