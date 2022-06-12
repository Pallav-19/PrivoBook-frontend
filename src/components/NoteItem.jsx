/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import "./NoteItem.css";
import NoteContext from "./contexts/Notes/noteContext";
function NoteItem(props) {
  const { note } = props;
  const { deleteNote, editNote } = useContext(NoteContext);

  return (
    <div>
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            >
              Delete
            </i>
            <i
              className="fa-solid fa-edit mx-2"
              onClick={() => {
                props.update(note);
              }}
            >
              Edit
            </i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
