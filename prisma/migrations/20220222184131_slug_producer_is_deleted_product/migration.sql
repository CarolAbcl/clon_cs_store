/*
  Warnings:

  - Made the column `file_image` on table `image` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `image` MODIFY `file_image` VARCHAR(50) NOT NULL,
    MODIFY `name_image` VARCHAR(50) NULL,
    MODIFY `alt` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `producer` ADD COLUMN `slug` VARCHAR(80) NULL;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `isDeleted` BOOLEAN NOT NULL DEFAULT false;
