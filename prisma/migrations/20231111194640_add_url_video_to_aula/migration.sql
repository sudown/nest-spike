/*
  Warnings:

  - Added the required column `UrlVideo` to the `Aula` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Aula` ADD COLUMN `UrlVideo` VARCHAR(191) NOT NULL;
