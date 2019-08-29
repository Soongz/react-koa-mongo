const router = require('koa-router')();
const userController = require('./../controllers/userinfo_controller');



const routers = router
  .get('/user/findUser/:userName', userController.getUserName)
  .post('/user/createUser', userController.createUser)
  .get('/user/findRepo', userController.findRepo)

module.exports = routers;
