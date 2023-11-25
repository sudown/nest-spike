-- DropForeignKey
ALTER TABLE `Cursa` DROP FOREIGN KEY `Cursa_fk_Curso_Id_fkey`;

-- DropForeignKey
ALTER TABLE `Modulo` DROP FOREIGN KEY `Modulo_fkCursoId_fkey`;

-- AddForeignKey
ALTER TABLE `Modulo` ADD CONSTRAINT `Modulo_fkCursoId_fkey` FOREIGN KEY (`fkCursoId`) REFERENCES `Curso`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cursa` ADD CONSTRAINT `Cursa_fk_Curso_Id_fkey` FOREIGN KEY (`fk_Curso_Id`) REFERENCES `Curso`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
