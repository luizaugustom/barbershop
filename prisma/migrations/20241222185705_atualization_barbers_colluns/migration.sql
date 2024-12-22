/*
  Warnings:

  - Added the required column `about` to the `barbers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "barbers" ADD COLUMN     "about" TEXT NOT NULL;
