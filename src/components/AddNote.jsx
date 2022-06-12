/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import NoteContext from "./contexts/Notes/noteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setnote] = useState({ title: "", description: "" ,tag:""});
  const handleclick = (e) => {
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
  };
  const changehandler = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form>
        <h2>Add a note</h2>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            TITLE*
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            onChange={changehandler}
            name="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            DESCRIPTION*
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="description"
            onChange={changehandler}
            name="description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Tag
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="tag"
            onChange={changehandler}
            name="tag"
          />
        </div>

        <button onClick={handleclick} type="submit" className="btn btn-primary">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
