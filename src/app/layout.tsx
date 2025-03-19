import type { Metadata } from "next";
import "./globals.css";
import { TaskProvider } from "./context/task.context";
import { get } from "./service/tasks";
import { Roboto_Mono } from 'next/font/google'

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  weight: ['300', '500'],
})

export const metadata: Metadata = {
  title: "Sware - Task list",
  description: "Task list app",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const tasks = await get();
  return (
    <html lang="en" className={roboto_mono.variable}>
      <TaskProvider initialTasks={tasks}>
        <body>{children}</body>
      </TaskProvider>
    </html>
  );
}
