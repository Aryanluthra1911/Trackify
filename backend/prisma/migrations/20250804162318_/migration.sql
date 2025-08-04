/*
  Warnings:

  - The primary key for the `gst_sales` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `bill_no` on the `gst_sales` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."gst_sales" DROP CONSTRAINT "gst_sales_pkey",
DROP COLUMN "bill_no",
ADD COLUMN     "bill_no" INTEGER NOT NULL,
ADD CONSTRAINT "gst_sales_pkey" PRIMARY KEY ("bill_no");
