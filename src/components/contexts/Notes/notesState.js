/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NoteContext from "./noteContext";
import { useNavigate } from "react-router-dom";
const NoteState = (props) => {
  const navigate = useNavigate();
  const host = "http://localhost:8080/";
  const [notes, setNotes] = useState([{}]);

  //getAllNotes
  const getNotes = async () => {
    if (localStorage.getItem("token")) {
      const response = await fetch(
        `http://localhost:8080/api/note/fetchAllNotes`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            authorization: localStorage.getItem("token"),
          },
        }
      );
      const json = await response.json();

      setNotes(json.payload);
      if (json.success) {
        props.showAlert(json.message, "success");
      } else {
        props.showAlert(json.message, "danger");
      }
    }
  };
  // add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}api/note/addNotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    if (json.success) {
      props.showAlert(json.message, "success");
    } else {
      props.showAlert(json.message, "danger");
    }
    navigate("/");
  };
  // delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}api/note/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
    });
    const json = response.json();
    if (json.success) {
      props.showAlert(json.message, "success");
    } else {
      props.showAlert(json.message, "danger");
    }
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
    const response = await fetch(`${host}api/note/updateNote/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    if (json.success) {
      props.showAlert(json.message, "success");
    } else {
      props.showAlert(json.message, "danger");
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes: notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
