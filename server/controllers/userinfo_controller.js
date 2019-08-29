const User = require('./../models/user');

const userCtrl = {

    async getUserName(ctx) {
        var name = ctx.params.userName;
        ctx.response.body = `<h1>Hello, ${name}!</h1>`;
    },

    async createUser(ctx) {
        
        const createResult = await createOne(Object.assign(ctx.request.body));

        ctx.status = 200;
        ctx.body = {
            msg: 'create success',
            data: ctx.request.body

        }
    },

    async findRepo(ctx) {
        const users = await User.find({}, { loginname: "", email: ""});
        console.log("user");
        ctx.status = 200;
        ctx.body = {
            msg: 'find success',
            data: {
              users
            }
        }
    }
}

const createOne = (body) => {
    return new Promise((resolve, reject) => {
        const newUser = new User(Object.assign(body));
        newUser.save(function(err, info){
            if (err) reject(err);
            resolve(info);
        });
    });
}


module.exports = userCtrl;