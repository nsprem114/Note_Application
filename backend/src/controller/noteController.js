import Note from "../model/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in Get All Note Controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const createdNote = await newNote.save();
    res.status(201).json(createdNote);
  } catch (error) {
    console.log("Error in Create Note Controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getOneNote = async (req, res) => {
  try {
    const { id } = req.params;
    const getSingleNote = await Note.findById(id);
    res.status(200).json(getSingleNote);
  } catch (error) {
    console.log("Error in Find One Note Controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true },
    );
    res.status(200).json(updatedNote);
  } catch (error) {
    console.log("Error in Update Note Controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNote = await Note.findByIdAndDelete(id);
    res.status(200).json(deleteNote);
  } catch (error) {
    console.log("Error in Delete Note Controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
