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

    const lancamentosCategory = await tx.menuCategory.create({
      data: {
        name: "Lançamentos",
        coffeeShopId: coffeeShop.id,
      },
    });

        await tx.product.createMany({
      data: [
        {
          name: "Montanha de Cookies Tradicionais®",
          description:
            "Cookies artesanais empilhados, massa amanteigada, textura macia por dentro e crocante por fora, recheio generoso de chocolate.",
          price: 39.9,
          imageUrl:
            "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utStRJW9eC13ENFPmvHUc2VwjAabLuzfoeWhdYg",
          menuCategoryId: lancamentosCategory.id,
          coffeeShopId: coffeeShop.id,
          ingredients: [
            "Farinha de trigo selecionada",
            "Cookies artesanais",
            "Massa amanteigada",
            "Nutella®",
            "Recheio cremoso",
            "Cobertura extra de creme de avelã",
            "Gotas de chocolate",
          ],
        },
        {
          name: "Montanha Suprema de Cookies®",
          description:
            "Cookies artesanais empilhados, massa amanteigada, recheio cremoso de Nutella®, creme de avelã intenso e cobertura extra.",
          price: 49.9,
          imageUrl:
            "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utStRJW9eC13ENFPmvHUc2VwjAabLuzfoeWhdYg",
          menuCategoryId: lancamentosCategory.id,
          coffeeShopId: coffeeShop.id,
          ingredients: [
            "Farinha de trigo selecionada",
            "Cookies artesanais",
            "Massa amanteigada",
            "Nutella® X2",
            "Recheio cremoso",
            "Cobertura extra de creme de avelã",
            "Gotas de chocolate",
          ],
        },
        {
          name: "Cookie Artesanal Individual®",
          description:
            "Cookie recém-assado, massa amanteigada, interior macio, gotas de chocolate derretidas e sabor marcante.",
          price: 9.9,
          imageUrl:
            "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSXZ1JCt7KCT6rObB5qvh3As1MSwQ28toxupl0",
          menuCategoryId: lancamentosCategory.id,
          coffeeShopId: coffeeShop.id,
          ingredients: [
            "Farinha de trigo selecionada",
            "Massa amanteigada",
            "Cookies artesanais",
            "Gotas de chocolate",
            "Essência de baunilha natural",
            "Fermento suave para leve crocância",
          ],
        },
        {
          name: "Cappuccino Cremoso Especial®",
          description:
            "Café espresso encorpado, leite vaporizado, espuma cremosa e finalização suave de chocolate ou canela.",
          price: 14.9,
          imageUrl:
            "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSxPwhVHBB5IkSCEM4u0Zd63X1JiN2RW8Qhpfc",
          menuCategoryId: lancamentosCategory.id,
          coffeeShopId: coffeeShop.id,
          ingredients: [
            "Café espresso selecionado",
            "Leite vaporizado cremoso",
            "Espuma de leite aveludada",
            "Chocolate em pó premium",
          ],
        },
      ],
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
