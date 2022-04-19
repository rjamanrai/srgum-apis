
const { PODCAST_KEY, SERVER_API } = process.env
const podcastKey = PODCAST_KEY


export const podcastUrl = SERVER_API

export const podcastToken = "Bearer " + podcastKey