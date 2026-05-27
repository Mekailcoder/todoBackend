// const express = require("express");
// const NoteModel = require("./models/todo.model");

// const app = express();

// app.use(express.json()

// module.exports = app;

// app.post("/api/note", async (req, res) => {
//   try {
//     let { title, description } = req.body;

//     if (!title)
//       return res.status(400).json({
//         message: "title is required",
//       });

//     if (!description)
//       return res.status(400).json({
//         message: "description is required",
//       });

//     if (title.trim().length < 3)
//       return res.status(400).json({
//         message: "minimum length is 3",
//       });

//     const newNote = await NoteModel.create({
//       title,
//       description,
//     });

//     return res.status(201).json({
//       message: "Note created successfully",
//       data: newNote,
//     });
//   } catch (error) {
//     console.log(error);

//     return res.status(500).json({
//       message: "Server Error",
//     });
//   }
// });


















const express = require("express");
const NoteModel = require("./models/todo.model");

const app = express();

app.use(express.json());

/* =========================
   CREATE NOTE
========================= */
app.post("/api/note", async (req, res) => {
  try {
    let { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const newNote = await NoteModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "Note created successfully",
      data: newNote,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
});

/* =========================
   GET ALL NOTES
========================= */
app.get("/api/note/", async (req, res) => {
  try {
    const notes = await NoteModel.find();

    return res.status(200).json({
      message: "All notes fetched successfully",
      data: notes,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
});

/* =========================
   GET SINGLE NOTE
========================= */
app.get("/api/note/:id", async (req, res) => {
  try {
    let { id } = req.params;

    const note = await NoteModel.findById(id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    return res.status(200).json({
      message: "Single note fetched successfully",
      data: note,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
});

/* =========================
   UPDATE NOTE
========================= */
app.patch("/api/note/:id", async (req, res) => {
  try {
    let { id } = req.params;

    const updatedNote = await NoteModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    return res.status(200).json({
      message: "Note updated successfully",
      data: updatedNote,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = app;