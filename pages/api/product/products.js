import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ['query', 'info'] })

export default async function handler(req, res) {
  try {
    const products = await prisma.product.findMany()
    res.status(200).json({ products })
  } catch (error) {
    console.warn(`Error al obtener los productos. ${error}`);
  }
}
