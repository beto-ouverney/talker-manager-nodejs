const { Router } = require('express');
const { talkerRoutes } = require('./talkerRoutes');

const router = Router();

router.use(talkerRoutes);

module.exports = { router };