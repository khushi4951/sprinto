import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata = {
  title: "Sprinto – Project Management Reimagined",
  description: "Fast, beautiful project tracking for engineering teams. Sprints, boards, and backlogs that actually spark joy.",
  keywords: "project management, jira alternative, sprint planning, kanban board",
  openGraph: {
    title: "Sprinto – Project Management Reimagined",
    description: "Fast, beautiful project tracking for engineering teams.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
