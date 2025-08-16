/*
  Warnings:

  - You are about to drop the column `product` on the `sales` table. All the data in the column will be lost.
  - Added the required column `payment` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."sales" DROP COLUMN "product",
ADD COLUMN     "payment" TEXT NOT NULL;
