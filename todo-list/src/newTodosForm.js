import {useState} from "react";

export function NewTodosForm({onSubmit}){
    const [newItem, setNewItem] = useState("")
    function handelSubmit(e) {
        e.preventDefault()
        if(newItem === "") return
        onSubmit(newItem)
        setNewItem("")
    }

    function handleSubmitEdit(e){
        e.preventDefault()
        setNewItem("")
    }

    return (
    <form className={"new-item-form"} onSubmit={handelSubmit}>
        <div className={"form-row"}>
            <label htmlFor={"item"}>New Item</label>
            <input className={"inputText"} value={newItem} onChange={e => setNewItem(e.target.value)} type={"text"} id={"item"}/>
        </div>
        <button className={"btn"}>Add</button>
    </form>
    )
}