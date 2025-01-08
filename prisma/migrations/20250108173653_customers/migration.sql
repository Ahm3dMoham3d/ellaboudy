/*
  Warnings:

  - You are about to drop the column `nationalId` on the `User` table. All the data in the column will be lost.
  - Added the required column `nationalId` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "nationalId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "nationalId";
