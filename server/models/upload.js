const moongoose = require('mongoose');
const Schema = moongoose.Schema;

const UploadSchema = new Schema({
    title: String,
    url: String,
    desc: String,
    thumbnail: String,
    createdAt: { type: Date, default: Date.now }
});

const upload= moongoose.model('upload', UploadSchema);
module.exports = upload;