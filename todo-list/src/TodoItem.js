export function TodoItem({completed, id, title, toggleTodo, deleteTodo, editTodo}){
    return(
        <li>
            <label>
                <input type={"checkbox"} checked={completed}
                       onChange={e => toggleTodo(id, e.target.checked)}/>
                {title}
            </label>
            <button className={"btn btn-danger"} onClick={() => deleteTodo(id)}>delete</button>
            <button className={"btn btn-danger"} onClick={() => editTodo(id)}>edit</button>
        </li>
    )
}