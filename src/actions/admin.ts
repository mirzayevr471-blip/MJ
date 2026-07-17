"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { auth, signIn, signOut } from "@/lib/auth";

// ─── Google OAuth ──────────────────────────────────────────────────────────────

export async function loginWithGoogle() {
  await signIn("google", { redirectTo: "/admin" });
}

export async function logoutGoogle() {
  await signOut({ redirectTo: "/admin/login" });
}

// ─── Verify session (Google OR legacy password) ────────────────────────────────

export async function verifyAdminSession(): Promise<boolean> {
  // 1. Google OAuth session check
  try {
    const session = await auth();
    if (session?.user?.isAdmin) return true;
  } catch {}

  // 2. Legacy password session check
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("admin_session")?.value;
  if (!sessionId) return false;
  const session = await prisma.adminSession.findUnique({ where: { id: sessionId } });
  if (!session || session.expiresAt < new Date()) return false;
  return true;
}

// ─── Legacy password login (still works) ──────────────────────────────────────

export async function loginAdmin(formData: FormData) {
  const password = formData.get("password") as string;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (password !== adminPassword) {
    return { error: "Parol noto'g'ri!" };
  }

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await prisma.adminSession.create({ data: { expiresAt } });

  const cookieStore = await cookies();
  cookieStore.set("admin_session", session.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    path: "/",
  });

  redirect("/admin");
}

export async function logoutAdmin() {
  // Logout both Google and legacy
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("admin_session")?.value;
  if (sessionId) {
    await prisma.adminSession.delete({ where: { id: sessionId } }).catch(() => {});
    cookieStore.delete("admin_session");
  }
  try { await signOut({ redirectTo: "/admin/login" }); } catch {}
  redirect("/admin/login");
}

// ─── CRUD operations ───────────────────────────────────────────────────────────

export async function deleteMessage(id: number) {
  await prisma.message.delete({ where: { id } });
}

export async function markMessageRead(id: number) {
  await prisma.message.update({ where: { id }, data: { isRead: true } });
}

export async function deleteProject(id: number) {
  await prisma.project.delete({ where: { id } });
}

export async function createProject(formData: FormData) {
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;
  const tech = formData.get("tech") as string;
  const githubUrl = formData.get("githubUrl") as string;
  const liveUrl = formData.get("liveUrl") as string;

  await prisma.project.create({
    data: {
      title,
      category,
      description,
      tech,
      githubUrl: githubUrl || null,
      liveUrl: liveUrl || null,
    },
  });
}
