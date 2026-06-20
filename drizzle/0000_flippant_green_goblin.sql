CREATE TABLE IF NOT EXISTS `AdminSession` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`tokenHash` text NOT NULL,
	`expiresAt` integer NOT NULL,
	`createdAt` integer NOT NULL,
	`adminId` integer NOT NULL,
	FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `AdminSession_tokenHash_key` ON `AdminSession` (`tokenHash`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `AdminSession_adminId_idx` ON `AdminSession` (`adminId`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `AdminSession_expiresAt_idx` ON `AdminSession` (`expiresAt`);--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `Admin` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`username` text NOT NULL,
	`passwordHash` text NOT NULL,
	`isActive` integer DEFAULT true NOT NULL,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `Admin_username_key` ON `Admin` (`username`);--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `ArticleComment` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`articleId` text NOT NULL,
	`name` text NOT NULL,
	`email` text,
	`content` text NOT NULL,
	`createdAt` integer NOT NULL,
	`parentId` integer,
	FOREIGN KEY (`parentId`) REFERENCES `ArticleComment`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `ArticleComment_articleId_createdAt_idx` ON `ArticleComment` (`articleId`,`createdAt`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `ArticleComment_parentId_idx` ON `ArticleComment` (`parentId`);--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `FormSubmission` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`formType` text NOT NULL,
	`name` text,
	`phone` text,
	`email` text,
	`content` text,
	`cv` text,
	`metadata` text,
	`createdAt` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `FormSubmission_formType_idx` ON `FormSubmission` (`formType`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `FormSubmission_createdAt_idx` ON `FormSubmission` (`createdAt`);--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `TeamMember` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`family` text NOT NULL,
	`position` text NOT NULL,
	`about` text NOT NULL,
	`skills` text NOT NULL,
	`image` text NOT NULL,
	`singlePageImage` text NOT NULL,
	`linkedin` text,
	`instagram` text,
	`joinedAt` text,
	`sortOrder` integer DEFAULT 0 NOT NULL,
	`isActive` integer DEFAULT true NOT NULL,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `TeamMember_isActive_sortOrder_idx` ON `TeamMember` (`isActive`,`sortOrder`);
