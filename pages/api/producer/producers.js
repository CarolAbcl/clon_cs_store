import prisma from '../../../prisma/client'
const getProducer = async () => {
  const producers = await prisma.producer.findMany({})
  return { producers }
}
export default getProducer
