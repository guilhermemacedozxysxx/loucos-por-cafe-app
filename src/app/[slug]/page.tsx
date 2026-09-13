interface CoffeeShopPageProps {
  params: Promise<{
    slug: string
  }>
}

const CoffeeShopPage = async ({ params }: CoffeeShopPageProps) => {
  const { slug } = await params

  return (
    <main>
      <h1>Loucos por Café</h1>
      <p>Slug recebida: {slug}</p>
    </main>
  )
}

export default CoffeeShopPage;