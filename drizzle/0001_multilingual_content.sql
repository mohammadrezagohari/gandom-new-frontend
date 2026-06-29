ALTER TABLE `TeamMember` ADD COLUMN `nameTranslations` text;--> statement-breakpoint
ALTER TABLE `TeamMember` ADD COLUMN `familyTranslations` text;--> statement-breakpoint
ALTER TABLE `TeamMember` ADD COLUMN `positionTranslations` text;--> statement-breakpoint
ALTER TABLE `TeamMember` ADD COLUMN `aboutTranslations` text;--> statement-breakpoint
ALTER TABLE `TeamMember` ADD COLUMN `skillsTranslations` text;--> statement-breakpoint
ALTER TABLE `TeamMember` ADD COLUMN `joinedAtTranslations` text;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `Article` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`titleTranslations` text NOT NULL,
	`excerptTranslations` text,
	`contentTranslations` text NOT NULL,
	`authorTranslations` text,
	`coverImage` text,
	`publishedAt` text,
	`readingMinutes` integer DEFAULT 5 NOT NULL,
	`sortOrder` integer DEFAULT 0 NOT NULL,
	`isActive` integer DEFAULT true NOT NULL,
	`createdAt` integer NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `Article_slug_key` ON `Article` (`slug`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `Article_isActive_sortOrder_idx` ON `Article` (`isActive`,`sortOrder`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `Article_publishedAt_idx` ON `Article` (`publishedAt`);--> statement-breakpoint
UPDATE `TeamMember`
SET
  `nameTranslations` = COALESCE(`nameTranslations`, json_object('en', `name`, 'fa', `name`)),
  `familyTranslations` = COALESCE(`familyTranslations`, json_object('en', `family`, 'fa', `family`)),
  `positionTranslations` = COALESCE(`positionTranslations`, json_object('en', `position`, 'fa', `position`)),
  `aboutTranslations` = COALESCE(`aboutTranslations`, json_object('en', `about`, 'fa', `about`)),
  `skillsTranslations` = COALESCE(`skillsTranslations`, json_object('en', json(`skills`), 'fa', json(`skills`))),
  `joinedAtTranslations` = COALESCE(`joinedAtTranslations`, json_object('en', COALESCE(`joinedAt`, ''), 'fa', COALESCE(`joinedAt`, '')));
