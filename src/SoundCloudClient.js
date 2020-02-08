import SoundCloudSDK from "soundcloud"

const SOUNDCLOUD_CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID

SoundCloudSDK.initialize({
  client_id: SOUNDCLOUD_CLIENT_ID,
})

export default {
  resolve(inputUrl) {
    return SoundCloudSDK.resolve(inputUrl).then(response => {
      if (response.kind === "track") {
        const responseWithAuthorisedStreamUrl = {
          ...response,
          stream_url: `${response.stream_url}?client_id=${SOUNDCLOUD_CLIENT_ID}`,
        }
        return new Promise((resolve) => {
          resolve(responseWithAuthorisedStreamUrl)
        })
      } else if (response.kind === "playlist") {
        const tracksWithAuthorisedStreamUrl = response.tracks.map(track => ({
          ...track,
          stream_url: `${track.stream_url}?client_id=${SOUNDCLOUD_CLIENT_ID}`,
        }))

        return new Promise((resolve) => {
          resolve(tracksWithAuthorisedStreamUrl)
        })
      } else {
        throw new Error(
          "Incompatible response type. Please enter either a track or playlist URL",
        )
      }
    })
  },
}
