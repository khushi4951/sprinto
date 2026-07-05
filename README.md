# 🚀 Sprinto — Modern Project Management

A beautiful, full-stack Jira alternative built with Next.js, Prisma, Clerk, and Neon PostgreSQL.

![Sprinto Banner](public/banner.png)

## ✨ Features

- 🎨 **Beautiful dark UI** with smooth animations and a polished design system
- 📋 **Kanban Board** with drag-and-drop issue management
- 🏃 **Sprint Management** — plan, start, and complete sprints
- 📝 **Backlog View** — grouped by sprint with collapsible sections
- 👥 **Team Management** — members, roles, and assignments
- 🔐 **Auth with Clerk** — Google, GitHub, and email sign-in
- 🗄️ **Neon PostgreSQL** + Prisma ORM
- ⚡ **Zustand** state management
- 📱 **Fully responsive** — works on mobile, tablet, and desktop

## 🛠️ Tech Stack

| Layer        | Tech                              |
|--------------|-----------------------------------|
| Framework    | Next.js 14 (App Router)           |
| Styling      | Tailwind CSS                      |
| Auth         | Clerk                             |
| Database     | Neon PostgreSQL                   |
| ORM          | Prisma                            |
| State        | Zustand                           |
| Icons        | Lucide React                      |
| Animations   | Tailwind CSS Animate              |

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/sprinto.git
cd sprinto
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env
```

Fill in your `.env`:
```env
DATABASE_URL="your_neon_postgresql_url"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

### 4. Set up the database
```bash
npm run db:push    # Push schema to Neon
npm run db:studio  # Explore data with Prisma Studio
```

### 5. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you're live! 🎉

## 📁 Project Structure

```
sprinto/
├── app/
│   ├── page.jsx                    # Landing page
│   ├── layout.jsx                  # Root layout (ClerkProvider)
│   ├── globals.css                 # Global styles
│   ├── auth/
│   │   ├── sign-in/page.jsx        # Clerk sign-in
│   │   └── sign-up/page.jsx        # Clerk sign-up
│   ├── dashboard/
│   │   └── page.jsx                # Main dashboard
│   ├── project/[id]/
│   │   ├── layout.jsx              # Project layout w/ tabs
│   │   ├── board/page.jsx          # Kanban board
│   │   ├── backlog/page.jsx        # Backlog view
│   │   └── settings/page.jsx       # Project settings
│   └── members/
│       └── page.jsx                # Team members
├── components/
│   ├── landing/                    # Landing page sections
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Topics.jsx              # Evaluation topics
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── layout/                     # App shell
│   │   ├── Sidebar.jsx
│   │   ├── Header.jsx
│   │   └── ProjectTabs.jsx
│   ├── board/                      # Core app views
│   │   ├── BoardView.jsx
│   │   ├── KanbanCard.jsx
│   │   ├── KanbanColumn.jsx
│   │   ├── BacklogView.jsx
│   │   ├── SettingsView.jsx
│   │   └── DashboardClient.jsx
│   ├── modals/
│   │   ├── IssueModal.jsx
│   │   └── CreateIssueModal.jsx
│   └── ui/                         # Reusable primitives
│       ├── Avatar.jsx
│       ├── Badge.jsx
│       └── Button.jsx
├── hooks/
│   └── useStore.js                 # Zustand store
├── data/
│   └── seed.js                     # Demo seed data
├── lib/
│   ├── prisma.js                   # Prisma client
│   └── utils.js                    # Shared utilities + constants
├── prisma/
│   └── schema.prisma               # Database schema
└── middleware.js                   # Clerk auth middleware
```


## 📝 License

MIT © 2025 Sprinto
