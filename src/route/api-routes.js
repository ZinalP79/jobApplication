let router = require('express').Router();
let JobController = require('../controller/jobController')

router.post('/job/create', JobController.createJob);
router.get('/job/views', JobController.viewjobs);
router.get('/job/view/:id', JobController.viewjobsbyId);
router.delete('/job/delete/:id', JobController.deletejob);

module.exports = router;