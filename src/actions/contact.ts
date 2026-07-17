"use server";

import { prisma } from "@/lib/prisma";

export async function submitContactMessage(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required" };
  }

  try {
    // 1. Save to Database
    await prisma.message.create({
      data: { name, email, content: message },
    });

    // 2. Send to Telegram
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      const text = `📬 *Yangi Xabar (Portfolio)*\n\n*Ism:* ${name}\n*Email:* ${email}\n*Xabar:* ${message}`;
      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      });
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting contact message:", error);
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}
