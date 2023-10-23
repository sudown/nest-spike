-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pessoa" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome" TEXT NOT NULL,
    "Senha" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Tipo" TEXT NOT NULL,
    "XP" INTEGER NOT NULL DEFAULT 10,
    "patenteId" INTEGER,
    CONSTRAINT "Pessoa_patenteId_fkey" FOREIGN KEY ("patenteId") REFERENCES "Patente" ("Id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Pessoa" ("Email", "Id", "Nome", "Senha", "Tipo", "XP", "patenteId") SELECT "Email", "Id", "Nome", "Senha", "Tipo", "XP", "patenteId" FROM "Pessoa";
DROP TABLE "Pessoa";
ALTER TABLE "new_Pessoa" RENAME TO "Pessoa";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
