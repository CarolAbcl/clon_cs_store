import nc from 'next-connect'
import prisma from '../../../prisma/client'

// Manipulador de productos por id
// Mismo manejador para metodos GET, PUT y DELETE
const handlerProductById = nc()
  .get(async (req, res) => {
    const { id } = req.query

    try {
      const product = await prisma.product.findUnique({
        select: {
          ID_product: true,
          name: true,
          slug: true,
          wholesale_unit_price: true,
          sale_format: true,
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
            select: {
              ID_image: true,
              name_image: true,
              file_image: true,
              isMain: true,
              alt: true,
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
        where: {
          ID_product: id,
        },
      })

      if (!product) res.status(204).send()

      res.status(200).send({ data: { product } })
    } catch (error) {
      res.status(400).send({ error })
    }
  })
  .put(async (req, res) => {})
  .delete(async (req, res) => {})

export default handlerProductById
