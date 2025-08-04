-- AlterTable
ALTER TABLE "public"."gst_sales" ADD CONSTRAINT "gst_sales_pkey" PRIMARY KEY ("bill_no");

-- DropIndex
DROP INDEX "public"."gst_sales_bill_no_key";
