const express = require('express');
const router = express.Router()
const schoolController = require('../Controllers/addSchool');

router.post('/addSchool', schoolController.addSchool);
router.get('/listSchools', schoolController.listOfSchools);

module.exports = router