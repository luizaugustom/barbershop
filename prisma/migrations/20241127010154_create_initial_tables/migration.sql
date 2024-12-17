-- CreateTable
CREATE TABLE "barbers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fone" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "barbers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fone" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedulings" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "cLientId" TEXT,
    "barberId" TEXT,

    CONSTRAINT "Schedulings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "barbers_fone_key" ON "barbers"("fone");

-- AddForeignKey
ALTER TABLE "Schedulings" ADD CONSTRAINT "Schedulings_cLientId_fkey" FOREIGN KEY ("cLientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedulings" ADD CONSTRAINT "Schedulings_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "barbers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
