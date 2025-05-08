import { Router } from "express";
import authRouter from "./auth.routes";
import employeeRouter from "./employee.routes";

const router = Router();

router.use("/auth", authRouter
  /*
      #swagger.tags = ['Auth']
  */
);

router.use("/employees", employeeRouter
  /*
      #swagger.tags = ['Employees']
      #swagger.security = [{
          "bearerAuth": []
      }] 
  */
);

export default router;
