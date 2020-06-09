async function register ({
  registerHook,
  getRouter,
  registerSetting,
  settingsManager,
  storageManager,
  videoCategoryManager,
  videoLicenceManager,
  videoLanguageManager,
  registerExternalAuth,
  peertubeHelpers
}) {

  registerSetting({
    name: 'featured-channels',
    label: 'Featured Channels',
    type: 'markdown-text',
    private: false
  })
  
  registerSetting({
    name: 'featured-videos',
    label: 'Featured Videos',
    type: 'markdown-text',
    private: false
  })

}

async function unregister () {
  return
}

module.exports = {
  register,
  unregister
}
