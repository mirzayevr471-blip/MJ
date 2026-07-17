# Mirzayev Jahongir - Portfolio

Personal portfolio website built with **Next.js 15**, featuring a full authentication system, admin panel, and multi-language support.

## 🌐 Live Demo
[mirzayev.jahongir.uz](https://mirzayev.jahongir.uz)

## ✨ Features

- 🎨 **Modern UI** — Dark mode, glassmorphism, smooth animations
- 🌍 **Multi-language** — Uzbek, Russian, English
- 🔐 **Authentication** — Email/Password + Google OAuth (NextAuth v5)
- 🛡️ **Admin Panel** — Protected dashboard for content management
- 📁 **Projects** — Showcase your work with CRUD operations
- 💬 **Messages** — Contact form with Telegram notifications
- 📱 **Responsive** — Works on all screen sizes

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Database | SQLite + Prisma ORM |
| Auth | NextAuth.js v5 |
| Animations | Framer Motion |
| Styling | Tailwind CSS |
| Notifications | Telegram Bot API |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/mirzayevr471-blip/Mirzayev.Jahongir.uz.git
cd Mirzayev.Jahongir.uz

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in your values in .env

# Set up the database
npx prisma db push
npx prisma generate

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Admin Access

The admin panel is available at `/admin`. Only the designated admin email (`mirzayevr471@gmail.com`) gets admin privileges after logging in.

## 📁 Project Structure

```
src/
├── app/
│   ├── admin/          # Admin panel pages
│   │   ├── login/      # Login/Register page
│   │   ├── messages/   # Messages management
│   │   └── projects/   # Projects management
│   └── api/auth/       # NextAuth API routes
├── components/         # Reusable UI components
├── lib/
│   ├── auth.ts         # NextAuth configuration
│   └── prisma.ts       # Prisma client
└── actions/            # Server actions
```

## 🌿 Environment Variables

Copy `.env.example` to `.env` and configure:

- `AUTH_SECRET` — Random secret for NextAuth (generate with `openssl rand -base64 32`)
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — From [Google Cloud Console](https://console.cloud.google.com)
- `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` — From [@BotFather](https://t.me/botfather)

## 📄 License

MIT © Mirzayev Jahongir
