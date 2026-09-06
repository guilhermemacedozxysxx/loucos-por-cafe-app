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

    const cookiesCategory = await tx.menuCategory.create({
      data: {
        name: "Cookies",
        coffeeShopId: coffeeShop.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Cookie Duplo Chocolate Supremo®",
          description:
            "Uma experiência intensa e envolvente para os verdadeiros apaixonados por chocolate. Este cookie apresenta uma massa rica de cacau premium, cuidadosamente preparada para atingir uma textura macia e levemente úmida. Repleto de pedaços generosos de chocolate meio amargo e gotas de chocolate intenso, cada mordida entrega camadas profundas de sabor.",
          ingredients: [
            "Farinha de trigo selecionada",
            "Massa amanteigada com cacau premium",
            "Chocolate meio amargo em pedaços generosos",
            "Gotas de chocolate intenso",
            "Açúcar mascavo caramelizado",
            "Manteiga pura de alta qualidade",
          ],
          price: 22.9,
          imageUrl:
            "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSXZ1JCt7KCT6rObB5qvh3As1MSwQ28toxupl0",
          menuCategoryId: cookiesCategory.id,
          coffeeShopId: coffeeShop.id,
        },
        {
          name: "Cookie Caramelo Salgado Premium®",
          description:
            "Uma combinação sofisticada e surpreendente que une o melhor do doce e do salgado em perfeita harmonia. A massa amanteigada envolve um recheio cremoso de caramelo que se revela a cada mordida, trazendo uma textura envolvente e irresistível.",
          ingredients: [
            "Farinha de trigo selecionada",
            "Massa amanteigada artesanal",
            "Recheio de caramelo cremoso",
            "Gotas de chocolate ao leite nobre",
            "Açúcar mascavo caramelizado",
            "Essência de baunilha natural",
            "Flor de sal delicada",
            "Manteiga pura de alta qualidade",
          ],
          price: 22.9,
          imageUrl:
            "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSVsWArmgT4OrLRDaJHbw3G95Uxqugk7F8CYel",
          menuCategoryId: cookiesCategory.id,
          coffeeShopId: coffeeShop.id,
        },
        {
          name: "Cookie Nozes Crocantes®",
          description:
            "Elegante e cheio de personalidade, este cookie combina a suavidade de uma massa amanteigada com a crocância marcante de nozes cuidadosamente selecionadas. O sabor levemente tostado das nozes se mistura perfeitamente com o chocolate meio amargo, criando uma experiência rica e equilibrada.",
          ingredients: [
            "Farinha de trigo selecionada",
            "Massa amanteigada premium",
            "Nozes selecionadas crocantes",
            "Gotas de chocolate meio amargo",
            "Açúcar mascavo caramelizado",
            "Essência de baunilha natural",
            "Toque de sal refinado",
            "Manteiga pura de alta qualidade",
          ],
          price: 22.9,
          imageUrl:
            "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSL6wFtVZvB2XbwtsQPGlRmxzgk7AyN9ZYWeqp",
          menuCategoryId: cookiesCategory.id,
          coffeeShopId: coffeeShop.id,
        },
        {
          name: "Cookie ChocoWhite Elegance®",
          description:
            "Delicado e sofisticado, este cookie oferece uma experiência mais suave e cremosa, perfeita para quem aprecia sabores equilibrados. Sua massa amanteigada, levemente dourada, envolve pedaços generosos de chocolate branco que se tornam incrivelmente cremosos durante o preparo.",
          ingredients: [
            "Farinha de trigo selecionada",
            "Massa amanteigada premium",
            "Chocolate branco nobre em pedaços",
            "Açúcar mascavo caramelizado",
            "Essência de baunilha natural",
            "Manteiga pura de alta qualidade",
          ],
          price: 26.9,
          imageUrl:
            "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSX1yfW87KCT6rObB5qvh3As1MSwQ28toxupl0",
          menuCategoryId: cookiesCategory.id,
          coffeeShopId: coffeeShop.id,
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
