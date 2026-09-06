CREATE TABLE `AdminSession` (
	`id` int AUTO_INCREMENT NOT NULL,
	`tokenHash` varchar(64) NOT NULL,
	`expiresAt` datetime(3) NOT NULL,
	`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`adminId` int NOT NULL,
	CONSTRAINT `AdminSession_id` PRIMARY KEY(`id`),
	CONSTRAINT `AdminSession_tokenHash_key` UNIQUE(`tokenHash`)
);
--> statement-breakpoint
CREATE TABLE `Admin` (
	`id` int AUTO_INCREMENT NOT NULL,
	`username` varchar(50) NOT NULL,
	`passwordHash` varchar(255) NOT NULL,
	`isActive` boolean NOT NULL DEFAULT true,
	`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	CONSTRAINT `Admin_id` PRIMARY KEY(`id`),
	CONSTRAINT `Admin_username_key` UNIQUE(`username`)
);
--> statement-breakpoint
CREATE TABLE `ArticleComment` (
	`id` int AUTO_INCREMENT NOT NULL,
	`articleId` varchar(100) NOT NULL,
	`name` varchar(100) NOT NULL,
	`email` varchar(254),
	`content` text NOT NULL,
	`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`parentId` int,
	CONSTRAINT `ArticleComment_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Article` (
	`id` int AUTO_INCREMENT NOT NULL,
	`slug` varchar(160) NOT NULL,
	`titleTranslations` text NOT NULL,
	`excerptTranslations` text,
	`contentTranslations` text NOT NULL,
	`authorTranslations` text,
	`coverImage` varchar(500),
	`publishedAt` date,
	`readingMinutes` int NOT NULL DEFAULT 5,
	`sortOrder` int NOT NULL DEFAULT 0,
	`isActive` boolean NOT NULL DEFAULT true,
	`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	CONSTRAINT `Article_id` PRIMARY KEY(`id`),
	CONSTRAINT `Article_slug_key` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `FormSubmission` (
	`id` int AUTO_INCREMENT NOT NULL,
	`formType` varchar(50) NOT NULL,
	`name` varchar(120),
	`phone` varchar(30),
	`email` varchar(254),
	`content` text,
	`cv` text,
	`metadata` text,
	`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	CONSTRAINT `FormSubmission_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `SiteContent` (
	`id` int AUTO_INCREMENT NOT NULL,
	`key` varchar(191) NOT NULL,
	`group` varchar(100) NOT NULL,
	`label` varchar(255) NOT NULL,
	`valueType` varchar(30) NOT NULL DEFAULT 'text',
	`translations` text NOT NULL,
	`sortOrder` int NOT NULL DEFAULT 0,
	`isActive` boolean NOT NULL DEFAULT true,
	`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	CONSTRAINT `SiteContent_id` PRIMARY KEY(`id`),
	CONSTRAINT `SiteContent_key_key` UNIQUE(`key`)
);
--> statement-breakpoint
CREATE TABLE `TeamMember` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`family` varchar(100) NOT NULL,
	`position` varchar(150) NOT NULL,
	`about` text NOT NULL,
	`skills` text NOT NULL,
	`nameTranslations` text,
	`familyTranslations` text,
	`positionTranslations` text,
	`aboutTranslations` text,
	`skillsTranslations` text,
	`joinedAtTranslations` text,
	`leftAtTranslations` text,
	`image` varchar(500) NOT NULL,
	`singlePageImage` varchar(500) NOT NULL,
	`linkedin` varchar(500),
	`instagram` varchar(500),
	`joinedAt` varchar(100),
	`isFormer` boolean NOT NULL DEFAULT false,
	`sortOrder` int NOT NULL DEFAULT 0,
	`isActive` boolean NOT NULL DEFAULT true,
	`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	CONSTRAINT `TeamMember_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `AdminSession` ADD CONSTRAINT `AdminSession_adminId_Admin_id_fk` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `ArticleComment` ADD CONSTRAINT `ArticleComment_parentId_ArticleComment_id_fk` FOREIGN KEY (`parentId`) REFERENCES `ArticleComment`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `AdminSession_adminId_idx` ON `AdminSession` (`adminId`);--> statement-breakpoint
CREATE INDEX `AdminSession_expiresAt_idx` ON `AdminSession` (`expiresAt`);--> statement-breakpoint
CREATE INDEX `ArticleComment_articleId_createdAt_idx` ON `ArticleComment` (`articleId`,`createdAt`);--> statement-breakpoint
CREATE INDEX `ArticleComment_parentId_idx` ON `ArticleComment` (`parentId`);--> statement-breakpoint
CREATE INDEX `Article_isActive_sortOrder_idx` ON `Article` (`isActive`,`sortOrder`);--> statement-breakpoint
CREATE INDEX `Article_publishedAt_idx` ON `Article` (`publishedAt`);--> statement-breakpoint
CREATE INDEX `FormSubmission_formType_idx` ON `FormSubmission` (`formType`);--> statement-breakpoint
CREATE INDEX `FormSubmission_createdAt_idx` ON `FormSubmission` (`createdAt`);--> statement-breakpoint
CREATE INDEX `SiteContent_group_sortOrder_idx` ON `SiteContent` (`group`,`sortOrder`);--> statement-breakpoint
CREATE INDEX `SiteContent_isActive_idx` ON `SiteContent` (`isActive`);--> statement-breakpoint
CREATE INDEX `TeamMember_isActive_sortOrder_idx` ON `TeamMember` (`isActive`,`sortOrder`);
--> statement-breakpoint
ALTER TABLE `AdminSession` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
--> statement-breakpoint
ALTER TABLE `Admin` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
--> statement-breakpoint
ALTER TABLE `ArticleComment` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
--> statement-breakpoint
ALTER TABLE `Article` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
--> statement-breakpoint
ALTER TABLE `FormSubmission` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
--> statement-breakpoint
ALTER TABLE `SiteContent` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
--> statement-breakpoint
ALTER TABLE `TeamMember` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
