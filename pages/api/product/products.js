import prisma from '../../../prisma/client'

export default async function handlerProducts(req, res) {
  const { take, skip } = req.query
  try {
    const products = await prisma.product.findMany({
      skip: !parseInt(skip) ? 0 : parseInt(skip),
      take: !parseInt(take) ? 9 : parseInt(take),
      select: {
        ID_product: true,
        name: true,
        wholesale_unit_price: true,
        sale_format: true,
        description: true,
        duration: true,
        suggested_sale_price: true,
        min_purchase: true,
        benefit: true,
        conservation: true,
        stock_quantity: true,
        offer_price: true,
        delivery_time: true,
        modification_date: true,
        image: {
          where: {
            isMain: true,
          },
        },
        producer: {
          select: {
            ID_producer: true,
            brand_name: true,
          },
        },
        stock: true,
      },
    })

    const productCount = await prisma.product.count()

    if (!products) {
      res.status(204).json()
    }

    res.status(200).json({ data: products, productCount })
  } catch (error) {
    res.status(400).json({ error })
  }
}
