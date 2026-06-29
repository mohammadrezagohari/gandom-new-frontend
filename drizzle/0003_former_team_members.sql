ALTER TABLE `TeamMember` ADD COLUMN `leftAtTranslations` text;--> statement-breakpoint
ALTER TABLE `TeamMember` ADD COLUMN `isFormer` integer DEFAULT false NOT NULL;
