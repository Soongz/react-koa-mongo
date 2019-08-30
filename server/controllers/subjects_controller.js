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

module.exports = subjectCtrl;