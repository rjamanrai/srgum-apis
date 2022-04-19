import { NextApiRequest, NextApiResponse } from "next";
import { liveInput } from "../const";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    saveAndUpdate(req, res)
}


function saveAndUpdate(req: NextApiRequest,
    res: NextApiResponse
) {
    const { slug }: any = req.query
    const [min, max] = slug
    if (min && max) {
        liveInput.min = parseInt(min);
        liveInput.max = parseInt(max);
    }
    else {
        liveInput.min = 75;
        liveInput.max = 80;
    }
    liveInput.listener = Math.floor(Math.random() * (liveInput.max - liveInput.min) + liveInput.min)
    res.send(liveInput.listener.toString())
}