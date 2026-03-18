import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getOneNote,
  updateNote,
} from "../controller/noteController.js";

const route = express.Router();

route.get("/", getAllNotes);

route.post("/", createNote);

route.get("/:id", getOneNote);

route.put("/:id", updateNote);

route.delete("/:id", deleteNote);

export default route;
