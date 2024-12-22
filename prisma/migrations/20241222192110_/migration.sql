/*
  Warnings:

  - Made the column `barberId` on table `Schedulings` required. This step will fail if there are existing NULL values in that column.
  - Made the column `clientId` on table `Schedulings` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Schedulings" DROP CONSTRAINT "Schedulings_barberId_fkey";

-- DropForeignKey
ALTER TABLE "Schedulings" DROP CONSTRAINT "Schedulings_clientId_fkey";

-- AlterTable
ALTER TABLE "Schedulings" ALTER COLUMN "barberId" SET NOT NULL,
ALTER COLUMN "clientId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Schedulings" ADD CONSTRAINT "Schedulings_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedulings" ADD CONSTRAINT "Schedulings_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "barbers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
