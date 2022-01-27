import prisma from '../../../prisma/client'

export default async function handlerProducts(req, res) {
  try {
    const products = await prisma.product.findMany({
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

    if (!products) {
      res.status(204).send({ data: {}, message: 'No se han encontrado productos' })
    }

    res.status(200).send({ data: products })
  } catch (error) {
    res.status(400).send({ error })
  }
}
