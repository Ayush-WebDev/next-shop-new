import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env["DATABASE_URL"] });

const PrimsaClientSingleton = () => {
  return new PrismaClient({
    adapter,
  });
};

type PrimsaClientSingleton = ReturnType<typeof PrimsaClientSingleton>;

const globalPrisma = globalThis as unknown as {
  prisma: PrimsaClientSingleton | undefined;
};

const prisma = globalPrisma.prisma ?? PrimsaClientSingleton();

if (process.env.NODE_ENV !== "production") globalPrisma.prisma = prisma;

module.exports = prisma;

export default prisma;
