/*
  Warnings:

  - Made the column `sub_title` on table `project` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('FRONTEND', 'ENV', 'DESIGN', 'ETC');

-- AlterTable
ALTER TABLE "project" ALTER COLUMN "sub_title" SET NOT NULL;

-- CreateTable
CREATE TABLE "intro" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "detail" TEXT NOT NULL,

    CONSTRAINT "intro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "date" VARCHAR(50) NOT NULL,
    "forwardLink" VARCHAR(255) NOT NULL,
    "bgImageUrl" VARCHAR(255) NOT NULL,

    CONSTRAINT "blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skill" (
    "id" SERIAL NOT NULL,
    "category" "Category" NOT NULL,
    "items" VARCHAR(255)[],

    CONSTRAINT "skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "education" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "sub_title" VARCHAR(150) NOT NULL,
    "period" VARCHAR(50) NOT NULL,
    "items" VARCHAR(255)[],

    CONSTRAINT "education_pkey" PRIMARY KEY ("id")
);
