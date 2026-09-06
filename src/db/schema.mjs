import {
  boolean,
  date,
  datetime,
  index,
  int,
  mysqlTable,
  text,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

const createdAt = () => datetime("createdAt", { mode: "date", fsp: 3 }).notNull().default(sql`CURRENT_TIMESTAMP(3)`)
const updatedAt = () => datetime("updatedAt", { mode: "date", fsp: 3 }).notNull().default(sql`CURRENT_TIMESTAMP(3)`)

export const admins = mysqlTable("Admin", {
  id: int("id").autoincrement().primaryKey(),
  username: varchar("username", { length: 50 }).notNull(),
  passwordHash: varchar("passwordHash", { length: 255 }).notNull(),
  isActive: boolean("isActive").notNull().default(true),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
}, (table) => [
  uniqueIndex("Admin_username_key").on(table.username),
])

export const adminSessions = mysqlTable("AdminSession", {
  id: int("id").autoincrement().primaryKey(),
  tokenHash: varchar("tokenHash", { length: 64 }).notNull(),
  expiresAt: datetime("expiresAt", { mode: "date", fsp: 3 }).notNull(),
  createdAt: createdAt(),
  adminId: int("adminId").notNull().references(() => admins.id, { onDelete: "cascade" }),
}, (table) => [
  uniqueIndex("AdminSession_tokenHash_key").on(table.tokenHash),
  index("AdminSession_adminId_idx").on(table.adminId),
  index("AdminSession_expiresAt_idx").on(table.expiresAt),
])

export const formSubmissions = mysqlTable("FormSubmission", {
  id: int("id").autoincrement().primaryKey(),
  formType: varchar("formType", { length: 50 }).notNull(),
  name: varchar("name", { length: 120 }),
  phone: varchar("phone", { length: 30 }),
  email: varchar("email", { length: 254 }),
  content: text("content"),
  cv: text("cv"),
  metadata: text("metadata"),
  createdAt: createdAt(),
}, (table) => [
  index("FormSubmission_formType_idx").on(table.formType),
  index("FormSubmission_createdAt_idx").on(table.createdAt),
])

export const articleComments = mysqlTable("ArticleComment", {
  id: int("id").autoincrement().primaryKey(),
  articleId: varchar("articleId", { length: 100 }).notNull(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 254 }),
  content: text("content").notNull(),
  createdAt: createdAt(),
  parentId: int("parentId").references(() => articleComments.id, { onDelete: "cascade" }),
}, (table) => [
  index("ArticleComment_articleId_createdAt_idx").on(table.articleId, table.createdAt),
  index("ArticleComment_parentId_idx").on(table.parentId),
])

export const teamMembers = mysqlTable("TeamMember", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  family: varchar("family", { length: 100 }).notNull(),
  position: varchar("position", { length: 150 }).notNull(),
  about: text("about").notNull(),
  skills: text("skills").notNull(),
  nameTranslations: text("nameTranslations"),
  familyTranslations: text("familyTranslations"),
  positionTranslations: text("positionTranslations"),
  aboutTranslations: text("aboutTranslations"),
  skillsTranslations: text("skillsTranslations"),
  joinedAtTranslations: text("joinedAtTranslations"),
  leftAtTranslations: text("leftAtTranslations"),
  image: varchar("image", { length: 500 }).notNull(),
  singlePageImage: varchar("singlePageImage", { length: 500 }).notNull(),
  linkedin: varchar("linkedin", { length: 500 }),
  instagram: varchar("instagram", { length: 500 }),
  joinedAt: varchar("joinedAt", { length: 100 }),
  isFormer: boolean("isFormer").notNull().default(false),
  sortOrder: int("sortOrder").notNull().default(0),
  isActive: boolean("isActive").notNull().default(true),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
}, (table) => [
  index("TeamMember_isActive_sortOrder_idx").on(table.isActive, table.sortOrder),
])

export const articles = mysqlTable("Article", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("slug", { length: 160 }).notNull(),
  titleTranslations: text("titleTranslations").notNull(),
  excerptTranslations: text("excerptTranslations"),
  contentTranslations: text("contentTranslations").notNull(),
  authorTranslations: text("authorTranslations"),
  coverImage: varchar("coverImage", { length: 500 }),
  publishedAt: date("publishedAt", { mode: "string" }),
  readingMinutes: int("readingMinutes").notNull().default(5),
  sortOrder: int("sortOrder").notNull().default(0),
  isActive: boolean("isActive").notNull().default(true),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
}, (table) => [
  uniqueIndex("Article_slug_key").on(table.slug),
  index("Article_isActive_sortOrder_idx").on(table.isActive, table.sortOrder),
  index("Article_publishedAt_idx").on(table.publishedAt),
])

export const siteContents = mysqlTable("SiteContent", {
  id: int("id").autoincrement().primaryKey(),
  key: varchar("key", { length: 191 }).notNull(),
  group: varchar("group", { length: 100 }).notNull(),
  label: varchar("label", { length: 255 }).notNull(),
  valueType: varchar("valueType", { length: 30 }).notNull().default("text"),
  translations: text("translations").notNull(),
  sortOrder: int("sortOrder").notNull().default(0),
  isActive: boolean("isActive").notNull().default(true),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
}, (table) => [
  uniqueIndex("SiteContent_key_key").on(table.key),
  index("SiteContent_group_sortOrder_idx").on(table.group, table.sortOrder),
  index("SiteContent_isActive_idx").on(table.isActive),
])
