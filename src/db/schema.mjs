import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core"

export const admins = sqliteTable("Admin", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  username: text("username").notNull(),
  passwordHash: text("passwordHash").notNull(),
  isActive: integer("isActive", { mode: "boolean" }).notNull().default(true),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
}, (table) => [
  uniqueIndex("Admin_username_key").on(table.username),
])

export const adminSessions = sqliteTable("AdminSession", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  tokenHash: text("tokenHash").notNull(),
  expiresAt: integer("expiresAt", { mode: "timestamp_ms" }).notNull(),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
  adminId: integer("adminId").notNull().references(() => admins.id, { onDelete: "cascade" }),
}, (table) => [
  uniqueIndex("AdminSession_tokenHash_key").on(table.tokenHash),
  index("AdminSession_adminId_idx").on(table.adminId),
  index("AdminSession_expiresAt_idx").on(table.expiresAt),
])

export const formSubmissions = sqliteTable("FormSubmission", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  formType: text("formType").notNull(),
  name: text("name"),
  phone: text("phone"),
  email: text("email"),
  content: text("content"),
  cv: text("cv"),
  metadata: text("metadata"),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
}, (table) => [
  index("FormSubmission_formType_idx").on(table.formType),
  index("FormSubmission_createdAt_idx").on(table.createdAt),
])

export const articleComments = sqliteTable("ArticleComment", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  articleId: text("articleId").notNull(),
  name: text("name").notNull(),
  email: text("email"),
  content: text("content").notNull(),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
  parentId: integer("parentId").references(() => articleComments.id, { onDelete: "cascade" }),
}, (table) => [
  index("ArticleComment_articleId_createdAt_idx").on(table.articleId, table.createdAt),
  index("ArticleComment_parentId_idx").on(table.parentId),
])

export const teamMembers = sqliteTable("TeamMember", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  family: text("family").notNull(),
  position: text("position").notNull(),
  about: text("about").notNull(),
  skills: text("skills").notNull(),
  nameTranslations: text("nameTranslations"),
  familyTranslations: text("familyTranslations"),
  positionTranslations: text("positionTranslations"),
  aboutTranslations: text("aboutTranslations"),
  skillsTranslations: text("skillsTranslations"),
  joinedAtTranslations: text("joinedAtTranslations"),
  image: text("image").notNull(),
  singlePageImage: text("singlePageImage").notNull(),
  linkedin: text("linkedin"),
  instagram: text("instagram"),
  joinedAt: text("joinedAt"),
  sortOrder: integer("sortOrder").notNull().default(0),
  isActive: integer("isActive", { mode: "boolean" }).notNull().default(true),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
}, (table) => [
  index("TeamMember_isActive_sortOrder_idx").on(table.isActive, table.sortOrder),
])

export const articles = sqliteTable("Article", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull(),
  titleTranslations: text("titleTranslations").notNull(),
  excerptTranslations: text("excerptTranslations"),
  contentTranslations: text("contentTranslations").notNull(),
  authorTranslations: text("authorTranslations"),
  coverImage: text("coverImage"),
  publishedAt: text("publishedAt"),
  readingMinutes: integer("readingMinutes").notNull().default(5),
  sortOrder: integer("sortOrder").notNull().default(0),
  isActive: integer("isActive", { mode: "boolean" }).notNull().default(true),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
}, (table) => [
  uniqueIndex("Article_slug_key").on(table.slug),
  index("Article_isActive_sortOrder_idx").on(table.isActive, table.sortOrder),
  index("Article_publishedAt_idx").on(table.publishedAt),
])

export const siteContents = sqliteTable("SiteContent", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  key: text("key").notNull(),
  group: text("group").notNull(),
  label: text("label").notNull(),
  valueType: text("valueType").notNull().default("text"),
  translations: text("translations").notNull(),
  sortOrder: integer("sortOrder").notNull().default(0),
  isActive: integer("isActive", { mode: "boolean" }).notNull().default(true),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
}, (table) => [
  uniqueIndex("SiteContent_key_key").on(table.key),
  index("SiteContent_group_sortOrder_idx").on(table.group, table.sortOrder),
  index("SiteContent_isActive_idx").on(table.isActive),
])
