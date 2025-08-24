const express = require('express');

const router = express.Router();

const controller = require('../controllers/controller');

router.get('/', controller.get);

router.get('/:id', controller.getById);

router.delete('/:id', controller.deletePost);

router.post('/', controller.addPost);

router.put('/:id', controller.changePost);

module.exports = router;