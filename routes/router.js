import { Router } from 'express';
import { talkerRoutes } from './talkerRoutes';
import { userRoutes } from './userRoutes';

const router = Router();

router.use(talkerRoutes);
router.use(userRoutes);

export default router;