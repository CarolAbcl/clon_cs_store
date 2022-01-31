-- AlterTable
ALTER TABLE `product` ADD COLUMN `slug` VARCHAR(100) NULL;

-- AlterTable
ALTER TABLE `type_sale` MODIFY `type` VARCHAR(30) NOT NULL DEFAULT 'unidad';
