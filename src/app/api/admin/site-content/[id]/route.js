import { NextResponse } from "next/server"
import { eq } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { siteContents } from "@/src/db/schema.mjs"
import { ADMIN_COOKIE, getAdminFromToken } from "@/src/lib/adminAuth"
import { normalizeTranslationRecord } from "@/src/lib/localizedContent"
import { serializeSiteContent } from "@/src/lib/siteContent"
export async function PUT(request,{params}) {
  if (!await getAdminFromToken(request.cookies.get(ADMIN_COOKIE)?.value)) return NextResponse.json({error:"Unauthorized."},{status:401})
  const {id:rawId}=await params;const id=Number(rawId)
  if(!Number.isInteger(id))return NextResponse.json({error:"Invalid id."},{status:400})
  const body=await request.json()
  const translations=normalizeTranslationRecord(body.translations,{maxLength:20000,required:true})
  if(!translations)return NextResponse.json({error:"Persian or English content is required."},{status:400})
  if(!db.select().from(siteContents).where(eq(siteContents.id,id)).get())return NextResponse.json({error:"Content not found."},{status:404})
  const item=db.update(siteContents).set({translations:JSON.stringify(translations),isActive:body.isActive!==false,updatedAt:new Date()}).where(eq(siteContents.id,id)).returning().get()
  return NextResponse.json({content:serializeSiteContent(item)})
}
