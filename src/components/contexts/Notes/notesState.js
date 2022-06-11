/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const [notes, setNotes] = useState([
    {
      title: "Note 1",
      description: "note number 1",
    },
  ]);
  // add a note
  const addNote = (title, description, tag) => {
    const note = {
      title: title,
      description: description,
      tag: tag,
    };
    setNotes(notes.concat(note));
  };
  // delete a note
  const deleteNote = () => {};
  // edit note
  const editNote = () => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
