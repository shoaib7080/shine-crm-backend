// // server/config/multer.js
// import multer from "multer";

// const storage = multer.memoryStorage(); // IMPORTANT

// const upload = multer({ storage });

// export default upload;

import multer from "multer";
import path from "path";
import os from "os";

// Use diskStorage so we have a tempFilePath string
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, os.tmpdir()),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = file.fieldname + "-" + Date.now() + ext;
    cb(null, name);
  },
});

const upload = multer({ storage });
export default upload;
