const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const item = new Schema({
    title: { type: String, required: true },
    avatar: { type: String },
    description: { type: String },
    content: { type: String, required: true },
    email: { type: String, required: true },
    creat_time: { type: Date, default: new Date() },
});

const SubjectItem = mongoose.model('subjectItem', item, 'subject_item');

module.exports = SubjectItem;
