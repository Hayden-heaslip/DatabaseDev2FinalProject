import bcrypt from "bcryptjs";
import { createPrismaClient } from "@/lib/prisma";

function toPublicUser(userRecord) {
  const roleName = userRecord.role?.role_name || "employee";
  return {
    userId: userRecord.user_id,
    email: userRecord.email,
    firstName: userRecord.first_name,
    lastName: userRecord.last_name,
    role: String(roleName).toLowerCase(),
  };
}

export async function loginUser(email, password) {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  const rawPassword = String(password || "");
  const prisma = createPrismaClient();

  const user = await prisma.user.findFirst({
    where: { email: normalizedEmail },
    include: { role: true },
  });

  if (!user || !user.is_active) {
    throw new Error("Invalid email or password");
  }

  const isValidPassword = await bcrypt.compare(rawPassword, user.password_hash);
  if (!isValidPassword) {
    throw new Error("Invalid email or password");
  }

  await prisma.user.update({
    where: { user_id: user.user_id },
    data: { last_login: new Date() },
  });

  return toPublicUser(user);
}

export async function getUserById(userId) {
  const parsedId = Number(userId);
  if (!Number.isInteger(parsedId) || parsedId <= 0) return null;

  const prisma = createPrismaClient();
  const user = await prisma.user.findFirst({
    where: { user_id: parsedId, is_active: true },
    include: { role: true },
  });
  return user ? toPublicUser(user) : null;
}