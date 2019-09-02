const subjectItem = require('./../models/subjectItem');

const subjectCtrl = {

    async findAllSubjectItem(ctx) {
        const subjects = await subjectItem.find({}, {});
        ctx.status = 200;
        ctx.body = {
            msg: 'find success',
            data: {
                subjects
            }
        }
    },

    async publishTopic(ctx) {

        await createOne(Object.assign(ctx.request.body));

        ctx.status = 200;
        ctx.body = {
            succ: true,
            data: ctx.request.body
        }
    },

    async createComment(ctx) {
        const reqBody = ctx.request.body;
        const subject_id = reqBody.subject_id;

        const subject = await findById(subject_id);
        const commentArray = subject.comment;
        commentArray.push(reqBody.newComment);
        subject.comment = commentArray;
        console.log(subject);
        await createComment(subject);
        ctx.status = 200;
        ctx.body = {
            succ: true,
            data: subject
        }
    }

};

const createComment = (subject) => {
    return new Promise((resolve, reject) => {
        subject.save((err, result) => {
            if (err) reject(err);

            resolve(result);
        })
    });
};

const createOne = (body) => {
    return new Promise((resolve, reject) => {
        const newSubjectItem = new subjectItem(Object.assign(body));
        newSubjectItem.save(function(err, info){
            if (err) reject(err);
            resolve(info);
        });
    });
};

const findById = subject_id => {
    return new Promise((resolve, reject) => {
        subjectItem.findById(subject_id, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    });
};

module.exports = subjectCtrl;