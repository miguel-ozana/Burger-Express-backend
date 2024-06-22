import { Request, Response } from "express";
import { registerUser, loginUser, revokeToken } from "../services/authservices";

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

export async function logout(req: Request, res: Response) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(400).json({ error: 'Token missing' });
    }

    await revokeToken(token);
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to logout' });
  }
}