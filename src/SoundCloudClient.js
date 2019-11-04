import SoundCloudSDK from "soundcloud"

const SOUNDCLOUD_CLIENT_ID = "4db236383438b2ebbe8e4f151e1c1b59"

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
        return new Promise((resolve, reject) => {
          resolve(responseWithAuthorisedStreamUrl)
        })
      } else if (response.kind === "playlist") {
        const tracksWithAuthorisedStreamUrl = response.tracks.map(track => ({
          ...track,
          stream_url: `${track.stream_url}?client_id=${SOUNDCLOUD_CLIENT_ID}`,
        }))

        return new Promise((resolve, reject) => {
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
