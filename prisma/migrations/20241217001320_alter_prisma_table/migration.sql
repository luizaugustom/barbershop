/*
  Warnings:

  - A unique constraint covering the columns `[fone]` on the table `clients` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "clients_fone_key" ON "clients"("fone");
