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
              "Uma montanha irresistível de cookies artesanais preparados com massa amanteigada, textura crocante por fora e macia por dentro. Finalizada com gotas de chocolate e uma generosa camada de creme de avelã, perfeita para compartilhar ou aproveitar sem pressa.",
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
              "Uma experiência intensa para apaixonados por cookies: camadas de massa amanteigada, interior macio e gotas de chocolate em cada pedaço. O recheio generoso de Nutella® e a cobertura extra de creme de avelã deixam essa montanha ainda mais cremosa e marcante.",
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
              "Cookie artesanal recém-assado, preparado com massa amanteigada e gotas generosas de chocolate. Possui uma casquinha levemente crocante e interior macio, com aroma de baunilha e sabor equilibrado. Uma escolha perfeita para acompanhar seu café favorito.",
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
              "Cappuccino preparado com café espresso encorpado, leite cuidadosamente vaporizado e uma camada aveludada de espuma cremosa. Finalizado com chocolate em pó premium, entrega equilíbrio entre intensidade, cremosidade e aquele aroma irresistível de café.",
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
              "Cookie intenso preparado com massa amanteigada de cacau premium, interior macio e textura levemente úmida. Recheado com pedaços generosos de chocolate meio amargo e gotas de chocolate intenso, oferece uma experiência cremosa e marcante em cada mordida.",
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
              "Cookie artesanal de massa amanteigada com recheio cremoso de caramelo e gotas de chocolate ao leite. A finalização com flor de sal cria o equilíbrio perfeito entre doce e salgado, enquanto o interior macio contrasta com uma delicada camada crocante.",
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
              "Cookie artesanal de massa amanteigada com nozes selecionadas e gotas de chocolate meio amargo. As nozes levemente tostadas adicionam crocância e aroma, enquanto o interior permanece macio e saboroso, criando uma combinação sofisticada e equilibrada.",
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
              "Cookie delicado preparado com massa amanteigada levemente dourada e pedaços generosos de chocolate branco. Seu interior macio e cremoso contrasta com a superfície suavemente crocante, criando uma combinação elegante, doce e extremamente aconchegante.",
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
              "Croissant artesanal de massa folhada leve, dourada e amanteigada, recheado com presunto selecionado e queijo muçarela derretido. A combinação entre a crocância externa e o recheio quente e cremoso transforma um clássico em um lanche ainda mais especial.",
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
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSQpBtdUjkrbvz7nKSPhW9aduEYOXGMfTyUi6Z",
            menuCategoryId: snacksCategory.id,
            coffeeShopId: coffeeShop.id,
          },
          {
            name: "Sanduíche Natural Fresh",
            description:
              "Sanduíche leve preparado com pão integral artesanal, frango desfiado temperado, alface crocante, tomate, cenoura fresca e maionese suave. Uma combinação equilibrada de sabores e texturas, ideal para quem procura uma refeição prática, fresca e saborosa.",
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
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSVe5VaaGgT4OrLRDaJHbw3G95Uxqugk7F8CYe",
            menuCategoryId: snacksCategory.id,
            coffeeShopId: coffeeShop.id,
          },
          {
            name: "Toast Caprese Gourmet",
            description:
              "Toast artesanal preparado com pão levemente tostado, queijo cremoso, ingredientes frescos, manjericão e um delicado toque de azeite extravirgem. A combinação entre crocância, frescor e cremosidade cria um lanche aromático, equilibrado e cheio de personalidade.",
            ingredients: [
              "Pão artesanal tostado",
              "Queijo muçarela de búfala",
              "Tomate fresco selecionado",
              "Folhas de manjericão",
              "Azeite de oliva extra virgem",
              "Toque de sal refinado",
            ],
            price: 18.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSS7cRoKP4TPGio1hIQx7XAuHLq98jWJ6ODNla",
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
              "Café especial preparado lentamente com grãos selecionados e moídos na hora para preservar seus aromas e sabores naturais. A extração controlada resulta em uma bebida suave, equilibrada e aromática, perfeita para apreciar com calma em qualquer momento do dia.",
            ingredients: [
              "Café moído na hora (grãos selecionados)",
              "Água filtrada aquecida",
              "Método de preparo artesanal",
              "Extração lenta controlada",
            ],
            price: 7.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSRfpevb80zG7c8kFE19qou5sK3hSxtlHAf4Vm",
            menuCategoryId: drinksCategory.id,
            coffeeShopId: coffeeShop.id,
          },
          {
            name: "Cappuccino Cremoso Premium®",
            description:
              "Cappuccino preparado com café espresso selecionado, leite vaporizado e espuma cremosa de textura aveludada. Finalizado com chocolate premium e um delicado toque de canela, combina intensidade e suavidade em uma bebida quente, aromática e aconchegante.",
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
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSGnlU7feTMiF0Uv72WBaGu1odwsJfQ6pqNYL5",
            menuCategoryId: drinksCategory.id,
            coffeeShopId: coffeeShop.id,
          },
          {
            name: "Mocha Chocolate Supremo®",
            description:
              "Uma combinação envolvente de café espresso, leite vaporizado e chocolate meio amargo derretido. A espuma aveludada e a finalização com cacau acrescentam cremosidade e intensidade, criando uma bebida marcante para quem ama a união entre café e chocolate.",
            ingredients: [
              "Café espresso selecionado",
              "Leite vaporizado cremoso",
              "Chocolate meio amargo derretido",
              "Espuma de leite aveludada",
              "Finalização com cacau polvilhado",
            ],
            price: 14.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSYSXxyWk7gicFK3GRvaO4uSwnLW8xIQPsN2jY",
            menuCategoryId: drinksCategory.id,
            coffeeShopId: coffeeShop.id,
          },
          {
            name: "Coca-cola",
            description:
              "Coca-Cola servida bem gelada, com sabor marcante e refrescante para acompanhar os diferentes produtos do nosso cardápio. Uma escolha clássica para combinar com lanches, cookies e sobremesas, trazendo equilíbrio e refrescância para qualquer momento do dia.",
            ingredients: [],
            price: 7.9,
            imageUrl:
              "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQJS1b33q29eEsh0CVmOywrqx1UPnJpRGcHN5v",
            menuCategoryId: drinksCategory.id,
            coffeeShopId: coffeeShop.id,
          },
          {
            name: "Fanta Laranja",
            description:
              "Fanta Laranja servida bem gelada, trazendo seu sabor cítrico, doce e refrescante para acompanhar diferentes opções do cardápio. Uma bebida leve e descontraída que combina especialmente com lanches, cookies e outras escolhas para qualquer momento do dia.",
            ingredients: [],
            price: 7.9,
            imageUrl:
              "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQW7Kxm9gniS9XCLQu7Nb4jvBYZze16goaOqsK",
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
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ7i05S5tkc0L9oMIXZsFJtwnBh2KCz3y6uSW1",
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
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSXn3yMFF7KCT6rObB5qvh3As1MSwQ28toxupl",
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
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSvRjNW8p7zYvGMSwiKfTNZOokREgqhbs6dCBL",
            menuCategoryId: desertsCategory.id,
            coffeeShopId: coffeeShop.id,
          },
          {
            name: "Taça De Morango Delight®",
            description:
              "Taça cremosa preparada com camadas de sorvete, morangos frescos e creme suave, finalizada com uma deliciosa calda de morango. O contraste entre o frescor da fruta e a cremosidade da sobremesa cria uma experiência leve, equilibrada e irresistível.",
            ingredients: [],
            price: 18.9,
            imageUrl:
              "https://z58avo7iib.ufs.sh/f/gn7SbfGB9utSEl7IHGuqrSmTu4UIvDGd7sFJ2A8Bpw5bczRH",
            menuCategoryId: desertsCategory.id,
            coffeeShopId: coffeeShop.id,
          },
        ],
      });
    },
    {
      maxWait: 10000,
      timeout: 30000,
    }
  );
};

main()
  .catch((e) => {
    console.error("Erro ao executar seed:");
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });