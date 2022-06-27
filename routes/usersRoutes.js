const { Router } = require('express');
const usersController = require('../modules/user-module/controllers/usersController');
const { usersValidations } = require('../middlewares/usersValidations');

const usersRoutes = Router();

usersRoutes.post('/login', usersValidations, async (rq, res) => usersController.getToken(rq, res));

module.exports = { usersRoutes };