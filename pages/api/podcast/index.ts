import { NextApiRequest, NextApiResponse } from "next"; 
import Api from "../../../src/services";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  Api.get('/station/1/podcasts')
    .then(podcasts => {
      res.send(podcasts)
    })
    .catch(err => {
      res.send(err)
    })
}