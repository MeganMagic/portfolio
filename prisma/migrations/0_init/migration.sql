-- CreateTable
CREATE TABLE "experience" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "period" VARCHAR(30) NOT NULL,
    "items" VARCHAR(255)[],
    "links" JSON[],
    "is_active" BOOLEAN DEFAULT false,
    "sub_title" VARCHAR(100),

    CONSTRAINT "experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "sub_title" VARCHAR(150),
    "period" VARCHAR(30) NOT NULL,
    "member" VARCHAR(100) NOT NULL,
    "skills" VARCHAR(50)[],
    "links" JSON[],

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectItem" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "content" VARCHAR(255)[],
    "projectId" INTEGER,

    CONSTRAINT "ProjectItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectItem" ADD CONSTRAINT "ProjectItem_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

