import prisma from '../../../prisma/client'

export const getCategories = async () => {
  const categories = await prisma.category.findMany()
  return { categories }
}
export default async function handlerCategories(req, res) {
  try {
    const categories = await getCategories()

    res.status(200).send({ data: categories })
  } catch (error) {
    res.status(400).send({ error })
  }
}
