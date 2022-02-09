-- AlterTable
ALTER TABLE `detail_order_note` ADD COLUMN `comment_by_product` TEXT NULL;

-- AlterTable
ALTER TABLE `order_note` ADD COLUMN `comment_by_order` TEXT NULL;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `sku` VARCHAR(50) NULL,
    ADD COLUMN `weight` SMALLINT NULL;
