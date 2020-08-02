import SoundCloudSDK from "soundcloud"

const SOUNDCLOUD_CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID

SoundCloudSDK.initialize({
  client_id: SOUNDCLOUD_CLIENT_ID,
})

export default {
  resolve(inputUrl) {
    return SoundCloudSDK.resolve(inputUrl).then((response) => {
      if (response.kind === "track") {
        return new Promise((resolve) => {
          resolve(withAuthorisedStreamUrl(response))
        })
      } else if (response.kind === "playlist") {
        const tracksWithAuthorisedStreamUrl = response.tracks.map((track) =>
          withAuthorisedStreamUrl(track),
        )

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

const withAuthorisedStreamUrl = (track) => ({
  ...track,
  stream_url: `${track.stream_url}?client_id=${SOUNDCLOUD_CLIENT_ID}`,
})
