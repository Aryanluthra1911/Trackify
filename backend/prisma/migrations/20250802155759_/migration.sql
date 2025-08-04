-- AlterTable
ALTER TABLE "public"."gst_sales" ALTER COLUMN "date" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."sales" ALTER COLUMN "date" SET DATA TYPE TEXT,
ALTER COLUMN "time" SET DATA TYPE TEXT;
