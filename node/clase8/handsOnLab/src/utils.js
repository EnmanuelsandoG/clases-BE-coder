import multer from "multer";

//cb = callback
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/img");
  },
  filename: function (req, file, cb) {
    const timestamp = Date.now();
    const originalName = file.originalname.replace(/\s/g, "-");
    const concatName = timestamp + "-" + originalName;
    cb(null, concatName);
  },
});

export const uploader = multer({ storage });
