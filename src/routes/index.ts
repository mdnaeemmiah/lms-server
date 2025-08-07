import { Router } from 'express';
import authRouter from '../app/modules/auth/auth.route';
import userRouter from '../app/modules/user/user.route';




const router = Router();

const moduleRoutes = [
    {
    path: '/auth',
    route: authRouter,
    },
    {
      path: '/user',
      route: userRouter,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;