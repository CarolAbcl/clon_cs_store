import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ['query', 'info'] })

export default async function handlerCategories(req, res) {
  try {
    const categories = await prisma.category.findMany()

    res.status(200).send({ data: categories })
  } catch (error) {
    res.status(400).send({ error })
  }
}
