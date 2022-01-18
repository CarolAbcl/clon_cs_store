/*
  Warnings:

  - You are about to drop the column `picture` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `producer` ADD COLUMN `min_producer_purchase` INTEGER NULL;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `picture`,
    ADD COLUMN `min_qty_purchase` SMALLINT NULL,
    MODIFY `suggested_sale_price` INTEGER NULL,
    MODIFY `min_purchase` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `image` (
    `ID_image` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NULL,
    `alt` VARCHAR(191) NOT NULL,
    `ID_product` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ID_image`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `image` ADD CONSTRAINT `FK_product_image` FOREIGN KEY (`ID_product`) REFERENCES `product`(`ID_product`) ON DELETE NO ACTION ON UPDATE NO ACTION;
