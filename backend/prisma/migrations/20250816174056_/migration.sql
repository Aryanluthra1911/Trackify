/*
  Warnings:

  - You are about to drop the column `time` on the `sales` table. All the data in the column will be lost.
  - Added the required column `oldgoldcost` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."sales" DROP COLUMN "time",
ADD COLUMN     "oldgoldcost" TEXT NOT NULL;
