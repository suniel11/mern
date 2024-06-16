const express = require('express');
const auth  = require('../middleware/authMiddleware');
const jobController = require('../controllers/jobController');

const router = express.Router();

router.post('/', auth, jobController.createJob);
router.get('/', auth, jobController.getJobs);
router.put('/:id', auth, jobController.updateJob);
router.delete('/:id', auth, jobController.deleteJob);

module.exports = router;
