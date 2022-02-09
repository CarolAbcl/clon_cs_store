import prisma from '../../../prisma/client'

export const getProducts = async (take = undefined, skip = undefined) => {
  const productCount = await prisma.product.count()
<<<<<<< HEAD
  const products = await prisma.product.findMany({
    skip: !parseInt(skip) ? 0 : parseInt(skip),
    take: !parseInt(take) ? productCount : parseInt(take),
=======

  const products = await prisma.product.findMany({
    skip: !parseInt(skip) ? 0 : parseInt(skip),
    take: !parseInt(take) ? productCount : parseInt(take),
    orderBy: [
      {
        name: 'asc',
      },
    ],
>>>>>>> 8c5f655b6935df7160c95253e618c7e26328381f
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
      image: {
        where: {
          isMain: true,
        },
      },
      producer: {
        select: {
          ID_producer: true,
          brand_name: true,
          min_producer_purchase: true,
          type_sale: {
            select: {
              ID_type_sale: true,
              type: true,
            },
          },
        },
      },
      stock: true,
    },
  })
<<<<<<< HEAD
=======

  return { productCount, products }
}

export default async function handlerProducts(req, res) {
  const { take, skip } = req.query
  try {
    const { productCount, products } = await getProducts(take, skip)
>>>>>>> 8c5f655b6935df7160c95253e618c7e26328381f

  return { productCount, products }
}

export default async function handlerProducts(req, res) {
  const { take, skip } = req.query
  try {
    const { products, productCount } = await getProducts(take, skip)
    if (!products) {
      res.status(204).json()
    }

    res.status(200).json({ data: products, productCount })
  } catch (error) {
    res.status(400).json({ error })
  }
}