-- CreateTable
CREATE TABLE `category` (
    `ID_category` VARCHAR(191) NOT NULL,
    `category` VARCHAR(30) NOT NULL,

    PRIMARY KEY (`ID_category`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detail_order_note` (
    `ID_detail_order_note` VARCHAR(191) NOT NULL,
    `qty` SMALLINT NOT NULL,
    `unit_price` INTEGER NOT NULL,
    `sub_total` INTEGER NOT NULL,
    `ID_order_note` VARCHAR(191) NOT NULL,
    `ID_product` VARCHAR(191) NOT NULL,

    INDEX `FK_ID_order_note`(`ID_order_note`),
    INDEX `FK_ID_product`(`ID_product`),
    PRIMARY KEY (`ID_detail_order_note`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `direction` (
    `ID_direction` VARCHAR(191) NOT NULL,
    `ID_store` VARCHAR(191) NOT NULL,
    `country` VARCHAR(45) NOT NULL,
    `region` VARCHAR(45) NOT NULL,
    `city` VARCHAR(45) NOT NULL,
    `commune` VARCHAR(45) NULL,
    `street` VARCHAR(45) NOT NULL,
    `number` VARCHAR(45) NOT NULL,
    `reference` VARCHAR(45) NULL,
    `ID_producer` VARCHAR(191) NOT NULL,

    INDEX `FK_ID_producer`(`ID_producer`),
    INDEX `FK_ID_store`(`ID_store`),
    PRIMARY KEY (`ID_direction`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_note` (
    `ID_order_note` VARCHAR(191) NOT NULL,
    `number` INTEGER NOT NULL,
    `creation_date` DATETIME(0) NOT NULL,
    `modification_date` DATETIME(0) NOT NULL,
    `neto` INTEGER NOT NULL,
    `iva` DOUBLE NOT NULL,
    `total` INTEGER NOT NULL,
    `ID_store` VARCHAR(191) NOT NULL,
    `ID_order_status` VARCHAR(191) NOT NULL,

    INDEX `FK_ID_order_status`(`ID_order_status`),
    INDEX `FK_ID_store`(`ID_store`),
    PRIMARY KEY (`ID_order_note`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_status` (
    `ID_order_status` VARCHAR(191) NOT NULL,
    `status` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`ID_order_status`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `type_sale` (
    `ID_type_sale` VARCHAR(191) NOT NULL,
    `type` VARCHAR(30) NOT NULL DEFAULT 'por unidad',

    PRIMARY KEY (`ID_type_sale`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producer` (
    `ID_producer` VARCHAR(191) NOT NULL,
    `rut` VARCHAR(10) NOT NULL,
    `brand_name` VARCHAR(80) NOT NULL,
    `slogan` VARCHAR(80) NULL,
    `history` TEXT NULL,
    `min_producer_purchase` INTEGER NULL,
    `ID_type_sale` VARCHAR(191) NOT NULL,
    `business_name` VARCHAR(80) NULL,
    `contact_name` VARCHAR(80) NULL,
    `phone_producer` INTEGER NULL,
    `email_producer` VARCHAR(80) NULL,
    `account_type` VARCHAR(30) NULL,
    `account_number` BIGINT NULL,
    `account_bank` VARCHAR(45) NULL,
    `account_holder` VARCHAR(80) NULL,
    `account_rut` VARCHAR(10) NULL,
    `contract_start` DATETIME(3) NULL,
    `ID_user` VARCHAR(191) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `reg_date_producer` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_date_producer` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `FK_ID_user`(`ID_user`),
    PRIMARY KEY (`ID_producer`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `ID_product` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `wholesale_unit_price` INTEGER NOT NULL,
    `unit_cost` INTEGER NULL,
    `sale_format` SMALLINT NULL,
    `description` TEXT NULL,
    `duration` SMALLINT NULL,
    `suggested_sale_price` INTEGER NULL,
    `min_purchase` INTEGER NOT NULL,
    `min_qty_purchase` INTEGER NULL,
    `benefit` TEXT NULL,
    `conservation` VARCHAR(100) NULL,
    `stock_quantity` SMALLINT NULL,
    `offer_price` INTEGER NULL,
    `delivery_time` TINYINT NULL,
    `modification_date` DATETIME(0) NULL,
    `isActive` BOOLEAN NOT NULL,
    `ID_user` VARCHAR(191) NOT NULL,
    `ID_producer` VARCHAR(191) NOT NULL,
    `ID_stock` VARCHAR(191) NOT NULL,

    INDEX `FK_ID_producer`(`ID_producer`),
    INDEX `FK_ID_stock`(`ID_stock`),
    INDEX `FK_ID_user`(`ID_user`),
    PRIMARY KEY (`ID_product`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `image` (
    `ID_image` VARCHAR(191) NOT NULL,
    `file_image` VARCHAR(50) NULL,
    `name_image` VARCHAR(50) NOT NULL,
    `alt` VARCHAR(191) NOT NULL,
    `isMain` BOOLEAN NOT NULL,
    `ID_product` VARCHAR(191) NOT NULL,

    INDEX `FK_product_image`(`ID_product`),
    PRIMARY KEY (`ID_image`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_category` (
    `ID_product_categoria` VARCHAR(191) NOT NULL,
    `ID_category` VARCHAR(191) NOT NULL,
    `ID_product` VARCHAR(191) NOT NULL,

    INDEX `FK_ID_category`(`ID_category`),
    INDEX `FK_ID_product`(`ID_product`),
    PRIMARY KEY (`ID_product_categoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role` (
    `ID_role` VARCHAR(191) NOT NULL,
    `role` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`ID_role`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stock` (
    `ID_stock` VARCHAR(191) NOT NULL,
    `status` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`ID_stock`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `store` (
    `ID_store` VARCHAR(191) NOT NULL,
    `rut` VARCHAR(10) NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `bussines_name` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `email` VARCHAR(60) NOT NULL,
    `contact_name` VARCHAR(45) NULL,
    `isActive` BOOLEAN NOT NULL,
    `ID_user` VARCHAR(191) NOT NULL,

    INDEX `FK_ID_user`(`ID_user`),
    PRIMARY KEY (`ID_store`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `ID_user` VARCHAR(191) NOT NULL,
    `email` VARCHAR(60) NOT NULL,
    `password` VARCHAR(15) NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `ID_role` VARCHAR(191) NOT NULL,
    `hash` VARCHAR(250) NULL,
    `salt` VARCHAR(250) NULL,

    INDEX `FK_ID_role`(`ID_role`),
    PRIMARY KEY (`ID_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `detail_order_note` ADD CONSTRAINT `FK_detail_order_note_order_note` FOREIGN KEY (`ID_order_note`) REFERENCES `order_note`(`ID_order_note`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `detail_order_note` ADD CONSTRAINT `FK_product_detail_order_note` FOREIGN KEY (`ID_product`) REFERENCES `product`(`ID_product`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `direction` ADD CONSTRAINT `FK_producer_direction` FOREIGN KEY (`ID_producer`) REFERENCES `producer`(`ID_producer`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `direction` ADD CONSTRAINT `FK_store_direction` FOREIGN KEY (`ID_store`) REFERENCES `store`(`ID_store`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order_note` ADD CONSTRAINT `FK_order_status_order_note` FOREIGN KEY (`ID_order_status`) REFERENCES `order_status`(`ID_order_status`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order_note` ADD CONSTRAINT `FK_store_order_note` FOREIGN KEY (`ID_store`) REFERENCES `store`(`ID_store`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `producer` ADD CONSTRAINT `FK_user_producer` FOREIGN KEY (`ID_user`) REFERENCES `user`(`ID_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `producer` ADD CONSTRAINT `FK_type_sale_producer` FOREIGN KEY (`ID_type_sale`) REFERENCES `type_sale`(`ID_type_sale`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `image` ADD CONSTRAINT `FK_product_image` FOREIGN KEY (`ID_product`) REFERENCES `product`(`ID_product`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product_category` ADD CONSTRAINT `FK_category_product_category` FOREIGN KEY (`ID_category`) REFERENCES `category`(`ID_category`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product_category` ADD CONSTRAINT `FK_producer_product_category` FOREIGN KEY (`ID_product`) REFERENCES `product`(`ID_product`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `store` ADD CONSTRAINT `FK_user_store` FOREIGN KEY (`ID_user`) REFERENCES `user`(`ID_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `FK_role_user` FOREIGN KEY (`ID_role`) REFERENCES `role`(`ID_role`) ON DELETE NO ACTION ON UPDATE NO ACTION;
