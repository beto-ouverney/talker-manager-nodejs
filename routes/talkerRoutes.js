const { Router } = require('express');
const talkersController = require('../modules/talker-module/controllers/talkersController');
const { talkerValidations } = require('../middlewares/talkerValidations');
const { tokenValidations } = require('../middlewares/tokenValidations');

const talkerRoutes = Router();

talkerRoutes.get('/talker', async (req, res) => talkersController.getAllTalkers(req, res));

talkerRoutes.get('/talker/:id', async (req, res) => talkersController.getTalkerById(req, res));

talkerRoutes.post('/talker', tokenValidations,
 talkerValidations, async (req, res) => talkersController.createTalker(req, res));

talkerRoutes.put('/talker/:id', 
tokenValidations, talkerValidations, async (req, res) => talkersController.editTalker(req, res));

module.exports = { talkerRoutes };