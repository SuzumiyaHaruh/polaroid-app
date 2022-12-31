import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'bootstrap'
import './assets/scss/style.scss'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import 'jquery/dist/jquery'
createApp(App).use(router).mount('#app')
