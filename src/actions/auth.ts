"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function registerUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  if (!email || !password) {
    return { error: "Email va parol kiritilishi shart." };
  }

  if (password.length < 6) {
    return { error: "Parol kamida 6 belgidan iborat bo'lishi kerak." };
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Bu email orqali allaqachon ro'yxatdan o'tilgan." };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name: name || email.split("@")[0],
        email,
        password: hashedPassword,
      },
    });

    return { success: true };
  } catch (error) {
    return { error: "Ro'yxatdan o'tishda xatolik yuz berdi. Iltimos qayta urinib ko'ring." };
  }
}
