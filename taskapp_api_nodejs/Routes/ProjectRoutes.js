import express from 'express';
import controller from '../Controllers/ProjectController'

const router = express.Router();

router.get('/listtasks', controller.listTasks);
router.get('/gettask', controller.getTask);
router.post('/addtask', controller.addTask);
router.delete('/deletetask', controller.deleteTask);
router.put('/updatetask', controller.updateTask);


module.exports = router;