/*
  Warnings:

  - Added the required column `mop` to the `custombills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."custombills" ADD COLUMN     "mop" TEXT NOT NULL;
