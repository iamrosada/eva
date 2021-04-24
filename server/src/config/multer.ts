
import multer from 'multer';
import path from 'path'
import crypto from'crypto'

export const multerConfig = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
    },
    filename: (request, file, callback) => {
      crypto.randomBytes(16, (error, hash) => {
        if (error) {
          callback(error, file.filename)
        }
        const filename = `${hash.toString('hex')}-${file.originalname}`;
        
        callback(null, filename);
      })
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  },
  fileFilter: (request, file, callback) => {
    const formats = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif'
    ];

    if (formats.includes(file.mimetype)) {
      callback(null, true)
    }  else {
      callback(new Error('Format not accepted'))
    }
  }
} 