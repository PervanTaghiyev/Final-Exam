const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Schema = mongoose.Schema;
const port = 8080;
const DB_URL =
  "mongodb+srv://Final:azmp101@cluster0.hiwuhak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;"

// parse application/json
app.use(express.json());

const ColoshopSchema = new Schema({
  imageUrl: { type: String, require: true },
  title: { type: String, require: true },
  price: { type: Number, require: true },
  Description: { type: String, require: true },
});

const ColoshopModel = mongoose.model("Coloshop", ColoshopSchema);


app.get("/api/coloshop", async (req, res) => {
  try {
    const coloshop = await ColoshopModel.find({});
    if (coloshop.length === 0) {
      res.status(200).send({ message: "success", data: coloshop });
    } else {
      res.status(204).send({
        message: "data is empty",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.get("/api/coloshop/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const coloshop = await coloshop.findById(id);
    if (coloshop) {
      res.status(200).send({
        message: "success",
        data: "null",
      });
    } else {
      res.status(404).send({ message: "not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.delete("/api/coloshop/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedColoshop = await ColoshopModel.findByIdAndDelete(id);
    res.status(200).send({
      message: "deleted successfully",
      data: deletedColoshop,
    });
  } catch (error) {
    res.status(404).send({ message: "not found" });
  }
});
app.post("/api/coloshop", async (req, res) => {
  try {
    const newColoshop = new ColoshopModel({ ...req.body });
    await newColoshop.save();
    res.status(201).send({
      message: "created successfully",
      data: newColoshop,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`Link: http://localhost:${port}`);
  });
});