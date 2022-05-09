import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);
  function Addnote(note) {
    setnotes((prevnotes) => {
      return [...prevnotes, note];
    });
  }
  function deleteNote(id) {
    setnotes((prevnotes) => {
      return prevnotes.filter((noteitem, index) => {
        return id !== index;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={Addnote} />
      {notes.map((noteitem, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={noteitem.title}
            onDel={deleteNote}
            content={noteitem.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
