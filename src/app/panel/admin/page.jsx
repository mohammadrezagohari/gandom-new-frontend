import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { ADMIN_COOKIE, getAdminFromToken } from "@/src/lib/adminAuth"
import DashboardClient from "./dashboardClient"

export default async function AdminPage() {
  const cookieStore = await cookies()
  const admin = await getAdminFromToken(cookieStore.get(ADMIN_COOKIE)?.value)
  if (!admin) redirect("/panel/admin/login")
  return <DashboardClient username={admin.username} />
}
