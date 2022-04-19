import { NextApiRequest, NextApiResponse } from "next"; 
import Api from "../../../src/services";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { podcast } = req.query
  Api.get('/station/1/podcast/' + podcast + '/episodes').then(episodes => {
    res.send(episodes)
  })
    .catch(err => {
      res.send(err)
    })
}