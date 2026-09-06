/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */

const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(async (tx: any) => {
    await tx.coffeeShop.deleteMany();
    
    const coffeeShop = await tx.coffeeShop.create({
      data: {
        name: "Loucos Por Café",
        slug: "loucos-por-cafe",
        description: "Eleita a melhor cafeteria® de 2026",
        avatarImageUrl:
          "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utS5KIzJREJEkXyUi8vqW4Ib1SNQgYdpzMmRxLj",
        coverImageUrl:
          "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSXpaquL7KCT6rObB5qvh3As1MSwQ28toxupl0",
      },
    });
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
