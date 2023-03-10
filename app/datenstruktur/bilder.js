const database = require('../util/database');
const multer = require('multer');


const Bilder =  multer({
    dest: './frontend/public/images'
    limits: {
        fileSize: 1000000,
        },
        fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)){
        cb(new Error('Bitte laden Sie ein Bild hoch!'))
        }
        cb(undefined, true)
        }
     });

module.exports = Bilder;
    