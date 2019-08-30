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
    }
};


module.exports = subjectCtrl;