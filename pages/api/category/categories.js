import prisma from '../../../prisma/client'

export const getCategories = async () => {
  const categories = await prisma.category.findMany()
<<<<<<< HEAD

  return { categories }
}

export default async function handlerCategories(req, res) {
  try {
    const { categories } = await getCategories()
=======
  return { categories }
}
export default async function handlerCategories(req, res) {
  try {
    const categories = await getCategories()
>>>>>>> 8c5f655b6935df7160c95253e618c7e26328381f

    res.status(200).send({ data: categories })
  } catch (error) {
    res.status(400).send({ error })
  }
}
