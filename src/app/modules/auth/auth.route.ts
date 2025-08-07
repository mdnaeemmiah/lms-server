

import { Router } from "express";
import { UserValidation } from "../user/user.validation";
import { AuthValidation } from "./auth.validation";
import validateRequest from "../../../middlewares/validateRequest";
import { AuthControllers } from "./auth.contstant";


const authRouter = Router();

authRouter.post('/register', validateRequest(UserValidation.UserValidationSchema), AuthControllers.register);
authRouter.post('/login', validateRequest(AuthValidation.loginValidationSchema), AuthControllers.login);
authRouter.post(
    '/change-password',
    validateRequest(AuthValidation.changePasswordValidationSchema),
    AuthControllers.changePassword,
  );
authRouter.post(
    '/refresh-token',
    validateRequest(AuthValidation.refreshTokenValidationSchema),
    AuthControllers.refreshToken,
  );

export default authRouter;