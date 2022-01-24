import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handlerProducts(req, res) {
  console.log(process.env.DATABASE_URL)
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

    // validar si no hay productos?

    res.status(200).send({ data: products })
  } catch (error) {
    res.status(400).send({ error })
  }
}
