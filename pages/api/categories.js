// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function getCategories(req, res) {
  const categories = await prisma.category.findMany()
  res.status(200).send(categories)
}
