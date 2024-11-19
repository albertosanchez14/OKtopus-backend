const multer = require('multer');
const crypto = require('crypto');

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `file-${crypto.randomUUID()}.png`);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, //10MB
});
// file-${crypto.randomUUID()}${path.extname(file.originalname)}

module.exports = { upload };