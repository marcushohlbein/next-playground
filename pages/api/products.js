// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import products from '../../public/assets/products.json'

export default (req, res) => {
  res.status(200).json(products)
}
