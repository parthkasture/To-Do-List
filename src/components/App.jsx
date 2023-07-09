import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from './Note';
import CreateNote from "./CreateNote";
import notes from "../notes";

function App(){

    const [notes,setNotes] = useState([]);

    function addNote(note){
        setNotes(prevNotes => {
            return [...prevNotes, note];
        });
    }   

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) =>{
                return index !== id;
            })
        })
    }

    return(
        <div>
            <Header />
            <CreateNote onSubmit={addNote}/>
            {notes.map((note, index) => {
                return <Note 
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                />
            })}
            <Footer />
        </div>
    )
}

export default App;