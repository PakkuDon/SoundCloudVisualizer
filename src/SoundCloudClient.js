import SoundCloudSDK from "soundcloud"

const SOUNDCLOUD_CLIENT_ID = "4db236383438b2ebbe8e4f151e1c1b59"

SoundCloudSDK.initialize({
  client_id: SOUNDCLOUD_CLIENT_ID,
})

export default {
  resolve(inputUrl) {
    return SoundCloudSDK.resolve(inputUrl).then(response => {
      const responseWithAuthorisedStreamUrl = {
        ...response,
        stream_url: `${response.stream_url}?client_id=${SOUNDCLOUD_CLIENT_ID}`,
      }
      return new Promise((resolve, reject) => {
        resolve(responseWithAuthorisedStreamUrl)
      })
    })
  },
}
