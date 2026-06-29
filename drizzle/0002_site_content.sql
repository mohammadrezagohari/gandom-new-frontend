CREATE TABLE IF NOT EXISTS `SiteContent` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `key` text NOT NULL,
  `group` text NOT NULL,
  `label` text NOT NULL,
  `valueType` text DEFAULT 'text' NOT NULL,
  `translations` text NOT NULL,
  `sortOrder` integer DEFAULT 0 NOT NULL,
  `isActive` integer DEFAULT true NOT NULL,
  `createdAt` integer NOT NULL,
  `updatedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `SiteContent_key_key` ON `SiteContent` (`key`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `SiteContent_group_sortOrder_idx` ON `SiteContent` (`group`,`sortOrder`);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `SiteContent_isActive_idx` ON `SiteContent` (`isActive`);
