-- DropForeignKey
ALTER TABLE `Materiais` DROP FOREIGN KEY `Materiais_fk_Aula_Id_fkey`;

-- AddForeignKey
ALTER TABLE `Materiais` ADD CONSTRAINT `Materiais_fk_Aula_Id_fkey` FOREIGN KEY (`fk_Aula_Id`) REFERENCES `Aula`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
