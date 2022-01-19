import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ['query', 'info'] })

export default async function handlerProducts(req, res) {
  try {
    const products = await prisma.product.findMany({
      include: {
        image: {
          select: {
            ID_image: true,
            file_image: true,
            name_image: true,
            alt: true,
            isMain: true,
          },
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
