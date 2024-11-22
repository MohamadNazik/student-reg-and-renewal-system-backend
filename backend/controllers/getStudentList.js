import studentListModel from "../models/studentListModel.js";
import xlsx from "xlsx";

export const uploadStudentDetails = async (req, res) => {
  try {
    const fileBuffer = req.file.buffer;

    const workbook = xlsx.read(fileBuffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const students = sheetData.map((row) => ({
      FullName: row.FullName,
      RegNo: row.RegNo,
    }));

    const result = await studentListModel.insertMany(students);

    res
      .status(200)
      .send({ message: "Data uploaded successfully", data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
