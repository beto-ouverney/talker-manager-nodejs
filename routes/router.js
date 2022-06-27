const { Router } = require('express');
const { talkerRoutes } = require('./talkerRoutes');
const { usersRoutes } = require('./usersRoutes');

const router = Router();

router.use(talkerRoutes);
router.use(usersRoutes);

module.exports = { router };