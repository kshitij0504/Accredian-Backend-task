-- CreateTable
CREATE TABLE "Referral" (
    "id" TEXT NOT NULL,
    "referralCode" TEXT NOT NULL,
    "referrerName" TEXT NOT NULL,
    "referrerEmail" TEXT NOT NULL,
    "referrerPhone" TEXT NOT NULL,
    "friendName" TEXT NOT NULL,
    "friendEmail" TEXT NOT NULL,
    "friendPhone" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "consent" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Referral_referralCode_key" ON "Referral"("referralCode");
