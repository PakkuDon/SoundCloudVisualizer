import SoundCloudSDK from "soundcloud"

const SOUNDCLOUD_CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID

SoundCloudSDK.initialize({
  client_id: SOUNDCLOUD_CLIENT_ID,
})

export default {
  resolve(inputUrl) {
    return SoundCloudSDK.resolve(inputUrl).then((response) => {
      let tracks

      if (response.kind === "track") {
        tracks = [withAuthorisedStreamUrl(response)]
      } else if (response.kind === "playlist") {
        tracks = response.tracks.map((track) => withAuthorisedStreamUrl(track))
      } else {
        throw new Error(
          "Incompatible response type. Please enter either a track or playlist URL",
        )
      }

      return new Promise((resolve) => {
        resolve(tracks)
      })
    })
  },
}

const withAuthorisedStreamUrl = (track) => ({
  ...track,
  stream_url: `${track.stream_url}?client_id=${SOUNDCLOUD_CLIENT_ID}`,
})
