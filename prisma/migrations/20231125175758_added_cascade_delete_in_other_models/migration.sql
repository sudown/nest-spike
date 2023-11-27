-- DropForeignKey
ALTER TABLE `CursoProgresso` DROP FOREIGN KEY `CursoProgresso_idCurso_fkey`;

-- DropForeignKey
ALTER TABLE `ModuloProgresso` DROP FOREIGN KEY `ModuloProgresso_idModulo_fkey`;

-- AddForeignKey
ALTER TABLE `ModuloProgresso` ADD CONSTRAINT `ModuloProgresso_idModulo_fkey` FOREIGN KEY (`idModulo`) REFERENCES `Modulo`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CursoProgresso` ADD CONSTRAINT `CursoProgresso_idCurso_fkey` FOREIGN KEY (`idCurso`) REFERENCES `Curso`(`Id`) ON DELETE CASCADE ON UPDATE CASCADE;
