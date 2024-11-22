import mongoose from "mongoose";

const studentListSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
  },
  RegNo: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("studentList", studentListSchema);
