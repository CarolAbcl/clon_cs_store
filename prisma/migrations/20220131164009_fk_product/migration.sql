-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `FK_producer_product` FOREIGN KEY (`ID_producer`) REFERENCES `producer`(`ID_producer`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `FK_user_product` FOREIGN KEY (`ID_user`) REFERENCES `user`(`ID_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `FK_stock_product` FOREIGN KEY (`ID_stock`) REFERENCES `stock`(`ID_stock`) ON DELETE NO ACTION ON UPDATE NO ACTION;
