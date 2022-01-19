import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ['query', 'info'] })

export default function handlerProductById(req, res) {
  const { method } = req

  try {
    if (method === 'GET') {
      const product = prisma.product.findUnique({
        where: {
          ID_product: '' //id producto
        }
      })
      res.status(200).send({ data: {} })
    }

    if (method === 'PUT') {
      //TODO: actualizar por ID
    }

    if (method === 'DELETE') {
      //TODO: eliminar por ID
    }

  } catch (error) {
    res.status(400).send({ error })
  }
}

