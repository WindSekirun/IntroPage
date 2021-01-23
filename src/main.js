import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBlog, faComment } from '@fortawesome/free-solid-svg-icons'
// import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faTelegramPlane, faDiscord, faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'


library.add(
  faGithub,
  faTwitter, 
  faTelegramPlane,
  faDiscord,
  faLinkedin,
  faBlog,
  faComment,
  faStackOverflow
)

Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
