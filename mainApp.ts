import { Application, Response, Request } from "express";
import { statusCode } from "./utils/statusCode";
import studenPortal from "./router/studentRouter";

export const mainApp = (app: Application) => {
  app.use("/api/v1", studenPortal);

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(statusCode.OK).json({
        message: "Welcome to our student portal API",
      });
    } catch (error) {
      return res.status(statusCode.BAD_REQUEST).json({
        message: "Error",
      });
    }
  });
};
