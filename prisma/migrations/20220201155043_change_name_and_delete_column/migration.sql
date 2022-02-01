/*
  Warnings:

  - You are about to drop the column `min_purchase` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `min_qty_purchase` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `min_purchase`,
    DROP COLUMN `min_qty_purchase`,
    ADD COLUMN `price_package` INTEGER NULL;
