/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./NoteItem.css";
import NoteContext from "./contexts/Notes/noteContext";
function NoteItem(props) {
  const { note } = props;
  const { deleteNote } = useContext(NoteContext);
  
  return (
    <div>
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note)}}></i>
            <i className="fa-solid fa-edit mx-2"></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
