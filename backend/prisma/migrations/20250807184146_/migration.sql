/*
  Warnings:

  - The primary key for the `credentials` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `emial` on the `credentials` table. All the data in the column will be lost.
  - Added the required column `email` to the `credentials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."credentials" DROP CONSTRAINT "credentials_pkey",
DROP COLUMN "emial",
ADD COLUMN     "email" TEXT NOT NULL,
ADD CONSTRAINT "credentials_pkey" PRIMARY KEY ("email");
