import React, { useState } from "react";

function CreateNote(props) {

    const [note, setNote] = useState({
        title : "",
        content : ""
    });

    function handleChange(e) {
        setNote(prevNote => {
            return {
                ...prevNote,
                [e.target.name] : e.target.value
            };
        });
    }

    function handleSubmit(e) {
        props.onSubmit(note)
        setNote({
            title : "",
            content : ""
        })
        e.preventDefault();
    }

    return (
        <div>
            <form>
                <input 
                    name="title" 
                    placeholder="Tiltle" 
                    value={note.title}
                    onChange={handleChange}
                />
                <textarea 
                    name="content" 
                    placeholder="Take a note..." 
                    value={note.content}
                    rows="3" 
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Add</button> 
            </form>
        </div>
    )
}

export default CreateNote;