// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import items from '../../data/items.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'GET') {
    res.status(200).json(items)
  }
  // console.log(req.body)
  // res.status(200).json({ name: 'John Doe' })
}
