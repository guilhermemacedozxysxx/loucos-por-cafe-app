/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */

const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(
    async (tx: any) => {
      const addressTypes = ["Casa", "Trabalho", "Outro"];

      for (const name of addressTypes) {
        await tx.addressType.upsert({
          where: {
            name,
          },
          update: {},
          create: {
            name,
          },
        });
      }

      await tx.productOptionGroup.deleteMany();
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
              "Uma seleção generosa de cookies artesanais empilhados, preparados com massa amanteigada e assados cuidadosamente para alcançar o equilíbrio perfeito entre crocância e maciez. Cada cookie possui um interior macio e recheado com gotas de chocolate derretidas, criando uma experiência intensa e irresistível para compartilhar.",
            price: 39.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSRgKGNV80zG7c8kFE19qou5sK3hSxtlHAf4Vm",
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
              "Uma experiência criada para os verdadeiros apaixonados por cookies. Nossa Montanha Suprema reúne cookies artesanais empilhados, preparados com massa amanteigada e recheados generosamente com Nutella®. A combinação entre o interior macio, as gotas de chocolate e a cobertura extra de creme de avelã transforma cada camada em uma experiência extremamente cremosa e indulgente.",
            price: 49.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSYOolUpk7gicFK3GRvaO4uSwnLW8xIQPsN2jY",
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
              "Um cookie artesanal preparado para ser apreciado em qualquer momento do dia. Recém-assado, possui uma massa amanteigada delicadamente dourada, com interior extremamente macio e gotas de chocolate que derretem a cada mordida. Uma opção simples, clássica e cheia de sabor.",
            price: 9.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utS3hTEJgMDAetMvqdV7gh2mniQR9BcKYsP5fGF",
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
              "Uma bebida clássica preparada com café espresso encorpado, leite vaporizado e uma camada generosa de espuma cremosa. A combinação cria uma textura suave e aveludada, finalizada com chocolate em pó premium para trazer ainda mais aroma e sabor.",
            price: 14.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSlCsLoU6iGjCVdK9k8zYmW0nE2qMZNLIRyutx",
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
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSSvx77ULP4TPGio1hIQx7XAuHLq98jWJ6ODNl",
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
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSq0Sxo9TMhO8iF9vy2V137RZjI0dgrQWfspxl",
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
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSG5pxC2beTMiF0Uv72WBaGu1odwsJfQ6pqNYL",
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
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSdzDascTXa4AhyxPSUg9mbkGIpuMznJ7v5cL2",
            menuCategoryId: cookiesCategory.id,
            coffeeShopId: coffeeShop.id,
          },
        ],
      });

      const snacksCategory = await tx.menuCategory.create({
        data: {
          name: "Lanches",
          coffeeShopId: coffeeShop.id,
        },
      });

      await tx.product.createMany({
        data: [
          {
            name: "Croissant Presunto & Queijo Premium",
            description:
              "Um croissant artesanal de massa folhada leve e amanteigada, assado até atingir uma superfície dourada e delicadamente crocante. Recheado com presunto selecionado e queijo muçarela derretido, oferece uma combinação clássica, cremosa e extremamente saborosa.",
            ingredients: [
              "Massa folhada amanteigada",
              "Presunto selecionado",
              "Queijo muçarela premium",
              "Manteiga pura de alta qualidade",
              "Farinha de trigo selecionada",
              "Toque de sal refinado",
            ],
            price: 14.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSPyoI3zfqKOBQaIU26cbHnm0seXp39R5jL8ov",
            menuCategoryId: snacksCategory.id,
            coffeeShopId: coffeeShop.id,
          },
          {
            name: "Sanduíche Natural Fresh",
            description:
              "Uma opção leve, equilibrada e refrescante, preparada com ingredientes selecionados para quem busca uma refeição saborosa sem abrir mão da leveza. O pão integral artesanal acompanha um recheio cremoso de frango desfiado, vegetais frescos e ervas finas.",
            ingredients: [
              "Pão integral artesanal",
              "Peito de frango desfiado temperado",
              "Maionese leve especial",
              "Alface fresca crocante",
              "Tomate selecionado",
              "Cenoura ralada fresca",
              "Toque de sal e ervas finas",
            ],
            price: 16.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSc7G7QNId2AyqY3ixNpHZWcrwXVIB6fDjlsJC",
            menuCategoryId: snacksCategory.id,
            coffeeShopId: coffeeShop.id,
          },
          {
            name: "Toast Caprese Gourmet",
            description:
              "Uma combinação inspirada na culinária italiana, preparada sobre pão artesanal levemente tostado. A textura crocante do pão contrasta com a cremosidade da muçarela de búfala e a suculência da carne desfiada, finalizada com manjericão fresco e azeite de oliva extra virgem.",
            ingredients: [
              "Pão artesanal tostado",
              "Queijo muçarela de búfala",
              "Carne desfiada EXTREMAMENTE suculenta",
              "Folhas de manjericão",
              "Azeite de oliva extra virgem",
              "Toque de sal refinado",
            ],
            price: 18.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSYDv0jVk7gicFK3GRvaO4uSwnLW8xIQPsN2jY",
            menuCategoryId: snacksCategory.id,
            coffeeShopId: coffeeShop.id,
          },
        ],
      });

      const drinksCategory = await tx.menuCategory.create({
        data: {
          name: "Bebidas",
          coffeeShopId: coffeeShop.id,
        },
      });

      await tx.product.createMany({
        data: [
          {
            name: "Café Coado Especial®",
            description:
              "Um café suave e aromático preparado lentamente para preservar as características naturais dos grãos selecionados. A extração artesanal controlada proporciona uma bebida equilibrada, limpa e perfumada, ideal para acompanhar qualquer momento do dia.",
            ingredients: [
              "Café moído na hora (grãos selecionados)",
              "Água filtrada aquecida",
              "Método de preparo artesanal",
              "Extração lenta controlada",
            ],
            price: 7.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSPC9kATfqKOBQaIU26cbHnm0seXp39R5jL8ov",
            menuCategoryId: drinksCategory.id,
            coffeeShopId: coffeeShop.id,
          },
          {
            name: "Cappuccino Cremoso Premium®",
            description:
              "Uma combinação equilibrada de café espresso selecionado, leite vaporizado e espuma de leite aveludada. Finalizado com chocolate em pó premium e um delicado toque de canela, entrega uma bebida cremosa, aromática e extremamente aconchegante.",
            ingredients: [
              "Café espresso selecionado",
              "Leite vaporizado cremoso",
              "Espuma de leite aveludada",
              "Chocolate em pó premium",
              "Toque de canela aromática",
              "Açúcar refinado especial (opcional)",
            ],
            price: 12.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utST6NZ9JSXEsNbBC206pFQPtVyjK91wDfR3Ax7",
            menuCategoryId: drinksCategory.id,
            coffeeShopId: coffeeShop.id,
          },
          {
            name: "Mocha Chocolate Supremo®",
            description:
              "Uma bebida intensa e cremosa que combina café espresso selecionado com chocolate meio amargo derretido. O leite vaporizado e a espuma aveludada equilibram a intensidade do café e do chocolate, criando uma bebida encorpada, doce na medida certa e finalizada com cacau.",
            ingredients: [
              "Café espresso selecionado",
              "Leite vaporizado cremoso",
              "Chocolate meio amargo derretido",
              "Espuma de leite aveludada",
              "Finalização com cacau polvilhado",
            ],
            price: 14.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utS9WEvA7hkBc0Ta4lIEn3vDHLjU1QKGrXWhOYy",
            menuCategoryId: drinksCategory.id,
            coffeeShopId: coffeeShop.id,
          },
        ],
      });

      await tx.product.create({
        data: {
          name: "Água Mineral",
          description:
            "Água mineral leve e refrescante, servida gelada para acompanhar qualquer escolha do nosso cardápio. Uma opção simples e essencial para equilibrar a experiência, refrescar o paladar entre cada mordida e acompanhar cafés, doces, sobremesas ou lanches.",
          ingredients: [],
          price: 3.9,
          imageUrl:
            "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSg7pj14GB9utSCYGQT0yN68EAzIZ7JgwL3oRc",
          menuCategoryId: drinksCategory.id,
          coffeeShopId: coffeeShop.id,
        },
      });

      const desertsCategory = await tx.menuCategory.create({
        data: {
          name: "Sobremesas",
          coffeeShopId: coffeeShop.id,
        },
      });

      await tx.product.createMany({
        data: [
          {
            name: "Sorvete com Cookie Supreme®",
            description:
              "Sorvete artesanal cremoso servido com um cookie gourmet levemente aquecido, criando um delicioso contraste entre quente e frio. O interior macio do cookie, o chocolate derretido e a cremosidade do sorvete transformam cada colherada em uma experiência especial.",
            ingredients: [],
            price: 19.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSQEP4dKjkrbvz7nKSPhW9aduEYOXGMfTyUi6Z",
            menuCategoryId: desertsCategory.id,
            coffeeShopId: coffeeShop.id,
          },
          {
            name: "Fatia Bolo de Chocolate Premium®",
            description:
              "Fatia generosa de bolo de chocolate preparada para quem aprecia sabores intensos. A massa macia e úmida combina com um recheio cremoso e uma textura aveludada, criando uma sobremesa rica, equilibrada e perfeita para acompanhar um café recém-preparado.",
            ingredients: [],
            price: 15.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSBsOo0dwjKYegl0kuQqJ39B7x8mtCnIPE2aoc",
            menuCategoryId: desertsCategory.id,
            coffeeShopId: coffeeShop.id,
          },
          {
            name: "Taça De Morango Delight®",
            description:
              "Uma sobremesa refrescante e delicada preparada com camadas de sorvete cremoso, morangos frescos selecionados e um creme suave. Finalizada com calda de morango, combina doçura, frescor e diferentes texturas em uma apresentação especial.",
            ingredients: [],
            price: 18.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSEl7IHGuqrSmTu4UIvDGd7sFJ2A8Bpw5bczRH",
            menuCategoryId: desertsCategory.id,
            coffeeShopId: coffeeShop.id,
          },
        ],
      });

      const fillingGroup = await tx.productOptionGroup.create({
        data: {
          name: "Recheio",
          required: true,
          minSelect: 1,
          maxSelect: 1,
          options: {
            create: [
              {
                name: "Recheio de chocolate",
                price: 3.0,
              },
              {
                name: "Recheio de morango",
                price: 3.0,
              },
              {
                name: "Recheio de ovomaltine",
                price: 4.5,
              },
              {
                name: "Recheio de nutella",
                price: 5.0,
              },
            ],
          },
        },
      });

      const productsWithFilling = await tx.product.findMany({
        where: {
          coffeeShopId: coffeeShop.id,
          OR: [
            {
              menuCategoryId: cookiesCategory.id,
            },
            {
              menuCategoryId: lancamentosCategory.id,
              name: {
                contains: "Cookie",
                mode: "insensitive",
              },
            },
          ],
        },
        select: {
          id: true,
        },
      });

      await tx.productOptionGroupProduct.createMany({
        data: productsWithFilling.map((product: { id: string }) => ({
          productId: product.id,
          groupId: fillingGroup.id,
        })),
      });
    },
    {
      maxWait: 10000,
      timeout: 60000,
    },
  );
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });