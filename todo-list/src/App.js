import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {NewTodosForm} from "./newTodosForm";
import {TodoList} from "./todoList";


function App() {
    const [editTodoTitle, setEditTodoTitle] = useState("")
    const [todos, setTodos] = useState(() =>{
        const localValue = localStorage.getItem("ITEMS")
        if(localValue == null) return[]
        return JSON.parse(localValue)
    })
    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos])



    function toggleTodo(id, completed){
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if(todo.id === id){
                    return{...todo, completed}
                }
                return todo
            })
        })
    }

    function deleteTodo(id){
        setTodos(currentTodos => {
            return currentTodos.filter(todo =>todo.id !== id)
        })
    }

    function addTodo(title){
        setTodos(currentTodos => {
            return  [
                ...currentTodos,
                {id: crypto.randomUUID(), title, completed: false},
            ]
        })

    }

     function editTodo(id){
        setTodos(currentTodos => {
            // eslint-disable-next-line array-callback-return
            return currentTodos.map(todo => {
                if(todo.id === id){
                    currentTodos.filter(todo => todo.id !== id)
                    setEditTodoTitle(todo.title)
                    return todo
                }
            })
        })
    }


    return (
        <>
            <NewTodosForm onSubmit={addTodo} editTodo={editTodo}/>
            <h1 className={"header"}>Todo list</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>

        </>
    )
}

export default App;
