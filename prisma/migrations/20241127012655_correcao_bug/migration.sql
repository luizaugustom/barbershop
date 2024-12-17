/*
  Warnings:

  - You are about to drop the column `cLientId` on the `Schedulings` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Schedulings" DROP CONSTRAINT "Schedulings_cLientId_fkey";

-- AlterTable
ALTER TABLE "Schedulings" DROP COLUMN "cLientId",
ADD COLUMN     "clientId" TEXT;

-- AddForeignKey
ALTER TABLE "Schedulings" ADD CONSTRAINT "Schedulings_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
