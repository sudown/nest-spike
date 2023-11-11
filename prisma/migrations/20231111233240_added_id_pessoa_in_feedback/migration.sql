/*
  Warnings:

  - Added the required column `PessoaId` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Feedback` ADD COLUMN `PessoaId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Feedback` ADD CONSTRAINT `Feedback_PessoaId_fkey` FOREIGN KEY (`PessoaId`) REFERENCES `Pessoa`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
