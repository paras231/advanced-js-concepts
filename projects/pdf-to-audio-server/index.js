import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";
import generateTextFromPdf from "./lib.js";
const app = express();
const upload = multer({ dest: "uploads/" });

// middlewares
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// api endpoints

/**
 *  handle uploading pdf logic
 *  */
app.post("/upload-pdf", upload.single("pdf"), async (req, res) => {
  try {
    const { pageNum } = req.body;
    console.log(typeof pageNum);
    const pdf_file = req.file;
    console.log(pdf_file);
    
    const filePath = pdf_file.path;

    // Create a read stream from the temporary file
    const readStream = fs.createReadStream(filePath);

   
    const savePath = `uploads/${pdf_file.originalname}`;

    // Create a write stream to save the file
    const writeStream = fs.createWriteStream(savePath);

    // Pipe the read stream to the write stream
    readStream.pipe(writeStream);

    // Event listeners for handling errors and completion of the write operation
    writeStream.on("error", (error) => {
      console.error("Error writing file:", error);
      return res.status(500).json({ msg: "Error saving file" });
    });

    writeStream.on("finish", async () => {
      console.log("File saved successfully");
      const pdf_content = await generateTextFromPdf(savePath, Number(pageNum));
      const text_content =  pdf_content.items?.map((val)=>{
        return val.str;
      }).join(" ");
      fs.unlink(`uploads/${pdf_file.originalname}`,(error)=>{
        console.log(error);
      });
      return res
        .status(200)
        .json({ msg: "File uploaded successfully", text_content });
    });
   
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }

  //    const pdf_content = await generateTextFromPdf()
});

app.listen(3000, () => {
  console.log("app started on 3000");
});
