const { Router } = require('express');
const usersController = require('../modules/user-module/controllers/usersController');

const usersRoutes = Router();

usersRoutes.post('/login', async (req, res) => usersController.getToken(req, res));

module.exports = { usersRoutes };