/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "./contexts/Notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function Notes() {
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;

  const [note, setnote] = useState({ title: "", description: "", tag: "" });

  const changehandler = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const handleclick = (e) => {
    e.preventDefault();
    editNote(note.title, note.description, note.tag);
  };
  const ref = useRef(null);
  const updateNote = (note) => {
    ref.toggle();
  };
  useEffect(() => {
    return () => {
      getNotes();
    };
  }, []);
  return (
    <>
      <AddNote />
      <div className="modal" tabIndex="-1" ref={ref}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Note</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
                    id="etitle"
                    aria-describedby="emailHelp"
                    onChange={changehandler}
                    name="etitle"
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
                    id="edescription"
                    onChange={changehandler}
                    name="edescription"
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
                    id="etag"
                    onChange={changehandler}
                    name="etag"
                  />
                </div>

                <button
                  onClick={handleclick}
                  type="submit"
                  className="btn btn-primary"
                >
                  Add Note
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="col-sm-4">
          {notes.map((note) => {
            return (
              <NoteItem key={note._id} updateNote={updateNote} note={note} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Notes;
