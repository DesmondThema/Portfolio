import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faHome, faPhone, faWarehouse, faMusic, faGuitar, faGamepad, faVideo, faCamera } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faGithub, faTwitter, faEnvelope, faHome, faPhone, faLinkedin, faWarehouse, faMusic, faGuitar, faGamepad, faVideo, faCamera)


export default function (Vue, { router, head, isClient }) {
  Vue.component('font-awesome', FontAwesomeIcon)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,400&display=swap'
  })
}
