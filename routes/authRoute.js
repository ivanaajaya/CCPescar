import { Router } from "express"
import * as Auth from "../controllers/auth.js"
const authRouter = Router();

authRouter.get  ( '/',       Auth.Home     ); // VISTA HOME

export default authRouter;