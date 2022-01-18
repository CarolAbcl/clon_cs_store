/*
  Warnings:

  - Added the required column `isMain` to the `image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `image` ADD COLUMN `isMain` BOOLEAN NOT NULL;
