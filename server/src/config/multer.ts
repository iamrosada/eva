import multer from 'multer';
import path from 'path';
import crypto from'crypto';
import aws from 'aws-sdk';
import multerS3 from 'multer-s3';

const storageTypes = {
  local:multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
    },
    filename: (request, file, callback) => {
      crypto.randomBytes(16, (error, hash) => {
        if (error) {
          callback(error, file.filename)
        }
        /* const filename */file.key = `${hash.toString('hex')}-${file.originalname}`;
        
        callback(null, file.key);
      });
    }
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: 'eva2',
    contentType:multerS3.AUTO_CONTENT_TYPE,
    acl:'public-read',
    key:(request , file,callback )=>{
      crypto.randomBytes(16, (error, hash) => {
        if (error) {
          callback(error, file.filename)
        }
        const filename = `${hash.toString('hex')}-${file.originalname}`;
        
        callback(null, filename);
      });
    }
  }),
};
export const multerConfig = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: storageTypes['s3'],
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