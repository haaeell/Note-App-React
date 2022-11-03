import React from "react";
import InputNote from "../components/InputNote";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate("/");
  }

  return <InputNote addNote={onAddNoteHandler} />;
}

export default AddPage;
