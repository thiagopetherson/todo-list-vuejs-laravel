import Vue from 'vue'
import App from './App.vue'

import './plugins/axios' // Importando o axios

// Essas três linhas abaixos foram usadas para importar da lib do Fontawesome Vue
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faPlusSquare, faTrash )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
