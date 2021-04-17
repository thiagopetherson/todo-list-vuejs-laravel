import Vue from 'vue' //Importando o Vue
import axios from 'axios' //Importando o Axios

axios.defaults.baseURL = 'http://127.0.0.1:8000'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios    
    }
})