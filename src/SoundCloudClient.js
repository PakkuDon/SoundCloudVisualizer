import SoundCloudSDK from 'soundcloud'

const SOUNDCLOUD_CLIENT_ID = '4db236383438b2ebbe8e4f151e1c1b59'

SoundCloudSDK.initialize({
  client_id: SOUNDCLOUD_CLIENT_ID,
})

export default SoundCloudSDK
