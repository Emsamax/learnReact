export function TodoItem(completed, id, title, toggleTodo, deleteTodo){
    return(
        <li>
            <label>
                <input type={"checkbox"} checked={completed}
                       onChange={e => toggleTodo(id, e.target.checked)}/>
                {title}
            </label>
            <button className={"btn btn-danger"} onClick={() => deleteTodo(id)}> delete</button>
            {/* onClick={() => deleteTodo(todo.id)} passe la fonction et non le resultat */}
        </li>
    )
}