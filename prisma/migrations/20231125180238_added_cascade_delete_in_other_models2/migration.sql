-- DropForeignKey
ALTER TABLE `Aula` DROP FOREIGN KEY `Aula_fk_modulo_id_fkey`;

-- AddForeignKey
ALTER TABLE `Aula` ADD CONSTRAINT `Aula_fk_modulo_id_fkey` FOREIGN KEY (`fk_modulo_id`) REFERENCES `Modulo`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
