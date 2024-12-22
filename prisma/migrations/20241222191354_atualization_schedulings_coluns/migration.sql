/*
  Warnings:

  - Added the required column `beard` to the `Schedulings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `eyebrow` to the `Schedulings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finishing` to the `Schedulings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hair` to the `Schedulings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Schedulings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Schedulings" ADD COLUMN     "beard" TEXT NOT NULL,
ADD COLUMN     "eyebrow" TEXT NOT NULL,
ADD COLUMN     "finishing" TEXT NOT NULL,
ADD COLUMN     "hair" TEXT NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;
