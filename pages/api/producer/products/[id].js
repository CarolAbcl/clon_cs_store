import prisma from '../../../../prisma/client'

export const getProducerWithProducts = async (idProducer, take = undefined, skip = undefined) => {
  // Productor segun ID productor
  const producerById = await prisma.producer.findUnique({
    select: {
      rut: true,
      brand_name: true,
      slogan: true,
      history: true,
      min_producer_purchase: true,
      type_sale: {
        select: {
          ID_type_sale: true,
          type: true,
        },
      },
    },
    where: {
      ID_producer: idProducer,
    },
  })

  // Cantidad total de productos del productor seleccionado
  const productCount = await prisma.product.count({ where: { ID_producer: idProducer } })

  // Productos del productor seleccionado
  const productsByProducerId = await prisma.product.findMany({
    skip: !parseInt(skip) ? 0 : parseInt(skip),
    take: !parseInt(take) ? productCount : parseInt(take),
    orderBy: [
      {
        name: 'asc',
      },
    ],
    select: {
      ID_product: true,
      name: true,
      wholesale_unit_price: true,
      sale_format: true,
      slug: true,
      description: true,
      duration: true,
      suggested_sale_price: true,
      price_package: true,
      benefit: true,
      conservation: true,
      stock_quantity: true,
      offer_price: true,
      delivery_time: true,
      modification_date: true,
      weight: true,
      image: {
        where: {
          isMain: true,
        },
      },
      stock: true,
    },
    where: {
      ID_producer: idProducer,
    },
  })

  return { producer: producerById, productCount, products: productsByProducerId }
}

export default async function handlerProducerWithProducts(req, res) {
  const { id, take, skip } = req.query
  try {
    const { producer, productCount, products } = await getProducerWithProducts(id, take, skip)

    if (!producer) res.status(204).send()

    res.status(200).send({ data: { producer, productCount, products } })
  } catch (error) {
    res.status(400).send({ error })
  }
}
