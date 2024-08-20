import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
const prisma = new PrismaClient();
async function main() {
  const categories = await prisma.category.createMany({
    data: [
      { id: randomUUID(), name: "Venda" },
      { id: randomUUID(), name: "Alimentação" },
      { id: randomUUID(), name: "Casa" },
    ],
  });

  console.log({ categories });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
