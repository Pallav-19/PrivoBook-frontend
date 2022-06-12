/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const host = "http://localhost:8080/";
  const [notes, setNotes] = useState([{
    _id:1,
    title:"mytitle",
    description:"description"
  }]);

  //getAllNotes
  const getNotes = async () => {
    const response = await fetch(
      `http://localhost:8080/api/note/fetchAllNotes`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const json = await response.json();
    // console.log(json.payload)
    setNotes(json.payload);
  };
  // add a note
  const addNote = async (title, description, tag) => {
    const note = {
      _id: 1,
      title: title,
      description: description,
      tag: tag,
    };

    const response = await fetch(`${host}api/notes/addNotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // setNotes(notes.concat(note));
  };
  // delete a note
  const deleteNote = async (id) => {
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    const response = await fetch(`${host}api/notes/updateNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setNotes(notes.concat(newNotes));
  };
  // edit note
  const editNote = async (id, title, description, tag) => {
    notes.forEach((note) => {
      if (id === note._id) {
        note.title = title;
        note.description = description;
        note.tag = tag;
      }
    });
    const response = await fetch(`${host}api/notes/updateNote/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, tag }),
    });
  };
  return (
    <NoteContext.Provider
      value={{ notes:notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
