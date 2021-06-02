// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const products = require('../../products.json')

export default (req, res) => {
  res.status(200).json(products)
}
