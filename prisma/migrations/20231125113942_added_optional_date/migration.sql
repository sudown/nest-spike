-- AlterTable
ALTER TABLE `AulaProgresso` MODIFY `DataFim` DATETIME(3) NULL,
    MODIFY `DataInicio` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `CursoProgresso` MODIFY `DataFim` DATETIME(3) NULL,
    MODIFY `DataInicio` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Feedback` MODIFY `Data` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `ModuloProgresso` MODIFY `DataFim` DATETIME(3) NULL,
    MODIFY `DataInicio` DATETIME(3) NULL;
