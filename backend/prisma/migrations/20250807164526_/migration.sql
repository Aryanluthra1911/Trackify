-- CreateTable
CREATE TABLE "public"."credentials" (
    "name" TEXT NOT NULL,
    "emial" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "credentials_pkey" PRIMARY KEY ("emial")
);

-- CreateIndex
CREATE UNIQUE INDEX "credentials_name_key" ON "public"."credentials"("name");
