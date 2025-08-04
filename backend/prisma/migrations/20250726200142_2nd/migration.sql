/*
  Warnings:

  - The primary key for the `sales` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `sales` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `date` to the `sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `labour_cost` to the `sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product` to the `sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sales" DROP CONSTRAINT "sales_pkey",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "labour_cost" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "product" TEXT NOT NULL,
ADD COLUMN     "rate" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "sales_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "gst_sales" (
    "email" TEXT NOT NULL,
    "element" TEXT NOT NULL,
    "bill_no" TEXT NOT NULL,
    "purity" TEXT NOT NULL,
    "mode_of_payment" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "cost_exc_gst" DOUBLE PRECISION NOT NULL,
    "cgst" DOUBLE PRECISION NOT NULL,
    "sgst" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL
);

-- CreateTable
CREATE TABLE "custombills" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "custombills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "ph_no" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "purity" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "deposit" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "gst_sales_bill_no_key" ON "gst_sales"("bill_no");
