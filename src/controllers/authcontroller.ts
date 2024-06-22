import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/authservices";

export async function register(req: Request, res: Response){
  try{
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch(error){
    res.status(400).json(error);
  }
}

export async function login(req: Request, res: Response){
  try{
    const user = await loginUser(req.body);
    res.status(200).json(user);
  } catch(error){
    res.status(400).json(error);
  }
}