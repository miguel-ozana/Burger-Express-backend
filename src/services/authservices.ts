import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma.lib';

const SECRET_KEY = process.env.SECRET_KEY || 'default_key_secret';

interface AuthData {
  name: string;
  email: string;
  password: string;
}

export async function registerUser({name, email, password}: AuthData){
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });
  return user;
}

export async function loginUser({email, password}: AuthData){
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if(!user){
    throw new Error('User not found');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if(!isPasswordValid){
    throw new Error('Invalid password');
  }
  const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
  return token;
}

export async function revokeToken(token: string) {
  await prisma.revokedToken.create({
    data: { token }
  });
}