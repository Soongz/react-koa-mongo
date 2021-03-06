const router = require('koa-router')();
const userController = require('./../controllers/userinfo_controller');
const subjectController = require('./../controllers/subjects_controller');



const routers = router
  .get('/user/findUser/:userName', userController.getUserName)
  .post('/user/createUser', userController.createUser)
  .get('/user/findRepo', userController.findRepo)
  .get('/subject/findAllSubjectItem', subjectController.findAllSubjectItem)
  .post('/subject/publishTopic', subjectController.publishTopic)
  .post('/subject/createComment', subjectController.createComment)
  .post('/user/login', userController.login);

module.exports = routers;
