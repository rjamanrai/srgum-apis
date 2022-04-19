import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { liveInput } from "./const";


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    sendLive(res)
}


async function sendLive(res: NextApiResponse) {

    liveInput.listener = Math.floor(Math.random() * (liveInput.max - liveInput.min) + liveInput.min)
    const { data: nowplaying } = await axios.get("http://radio-admin.srgum.com/api/nowplaying/1")
    nowplaying.station.mounts = { current: liveInput.listener, total: liveInput.listener, unique: liveInput.listener }
    nowplaying.listeners = { current: liveInput.listener, total: liveInput.listener, unique: liveInput.listener }
    // io.emit('live-listener', { nowplaying });
    if (res) {
        res.send({ nowplaying })
    }
}