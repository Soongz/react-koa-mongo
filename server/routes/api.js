const router = require('koa-router')();
const userController = require('./../controllers/userinfo_controller');
const subjectController = require('./../controllers/subjects_controller');



const routers = router
  .get('/user/findUser/:userName', userController.getUserName)
  .post('/user/createUser', userController.createUser)
  .get('/user/findRepo', userController.findRepo)
  .get('/subject/findAllSubjectItem', subjectController.findAllSubjectItem)
  .post('/user/login', userController.login);

module.exports = routers;
