import defaultSettings from '@/settings'

const title = (window.serverConfig && window.serverConfig.VUE_APP_WEBSIT_TITLE ? window.serverConfig.VUE_APP_WEBSIT_TITLE : '')

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
