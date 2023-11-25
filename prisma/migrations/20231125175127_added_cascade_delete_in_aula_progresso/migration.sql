-- DropForeignKey
ALTER TABLE `AulaProgresso` DROP FOREIGN KEY `AulaProgresso_idAula_fkey`;

-- AddForeignKey
ALTER TABLE `AulaProgresso` ADD CONSTRAINT `AulaProgresso_idAula_fkey` FOREIGN KEY (`idAula`) REFERENCES `Aula`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
