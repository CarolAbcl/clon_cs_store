
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

const useGetProducts = () => {
  const { data, error } = useSWR('/api/product/products', fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useGetProducts
