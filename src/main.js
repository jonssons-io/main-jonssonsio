import Vue from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
	faAt,
	faExternalLinkSquareAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './../public/stylesheets/styles.css'

library.add(faGithubSquare, faLinkedin, faAt, faExternalLinkSquareAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueGtag, {
	config: { id: 'G-V0PJBRVKBF' },
})

Vue.config.productionTip = false

new Vue({
	render: (h) => h(App),
}).$mount('#app')
