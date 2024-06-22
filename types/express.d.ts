import { Request } from "express";

declare module "express-server-static-core" {
  interface Request{
    userId?: string;
  }
}