/*
  Warnings:

  - You are about to drop the column `Xp` on the `Aula` table. All the data in the column will be lost.
  - Added the required column `Duracao` to the `Aula` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Data` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Aula` DROP COLUMN `Xp`,
    ADD COLUMN `Duracao` INTEGER NOT NULL,
    ADD COLUMN `XP` INTEGER NULL;

-- AlterTable
ALTER TABLE `Curso` ADD COLUMN `Duracao` INTEGER NULL DEFAULT 0,
    ADD COLUMN `XP` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `Feedback` ADD COLUMN `Data` DATETIME(3) NOT NULL;
