const { Router } = require('express');
const talkersController = require('../modules/talker-module/controllers/talkersController');

const talkerRoutes = Router();

talkerRoutes.get('/talker', async (req, res) => talkersController.getAllTalkers(req, res));

talkerRoutes.get('/talker/:id', async (req, res) => talkersController.getTalkerById(req, res));

module.exports = { talkerRoutes };