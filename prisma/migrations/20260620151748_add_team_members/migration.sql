-- CreateTable
CREATE TABLE "TeamMember" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "family" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "singlePageImage" TEXT NOT NULL,
    "linkedin" TEXT,
    "instagram" TEXT,
    "joinedAt" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "TeamMember_isActive_sortOrder_idx" ON "TeamMember"("isActive", "sortOrder");
