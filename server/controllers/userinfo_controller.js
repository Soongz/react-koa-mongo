const User = require('./../models/user');
const jwt = require('jsonwebtoken');

const userCtrl = {

    async getUserName(ctx) {
        var name = ctx.params.userName;
        ctx.response.body = `<h1>Hello, ${name}!</h1>`;
    },

    async createUser(ctx) {
        
        const createResult = await createOne(Object.assign(ctx.request.body));

        ctx.status = 200;
        ctx.body = {
            succ: true,
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
    },

    async login(ctx) {
        const { loginname, password } = ctx.request.body;
        try {
            //await need get a Promise
            //可以让异步逻辑用同步写法实现
            //async function replace callback
            // findOne({ loginname }).then(resule=>{},err=>{});
            const findResult = await findOne({ loginname });
            if(findResult.length) {
                if(findResult[0].password === password) {
                    ctx.status = 200;
                    var token = jwt.sign({ id: findResult[0].id }, 'app.get(user)', {
                        expiresIn: '8h'
                    });
                    ctx.body = {
                        message: 'success',
                        token: token,
                        succ: true,
                    };
                } else {
                    ctx.status = 400;
                    ctx.body = {
                        message: 'password error',
                        succ: false,
                        errCode: 102,
                    };
                }
            } else {
                ctx.status = 400;
                ctx.body = {
                    message: 'user not exist',
                    succ: false,
                    errCode: 103,
                };
            }
        } catch (e) {
            ctx.status = 500;
            ctx.body = e.message;
        }
    }
};

const findOne = (query, filter={}) => {
    return new Promise((resolve,reject) => {
        User.find(query, filter, function(err, user) {
            if (err) reject(err);
            resolve(user);
        });
    });
};

const createOne = (body) => {
    return new Promise((resolve, reject) => {
        const newUser = new User(Object.assign(body));
        newUser.save(function(err, info){
            if (err) reject(err);
            resolve(info);
        });
    });
};


module.exports = userCtrl;