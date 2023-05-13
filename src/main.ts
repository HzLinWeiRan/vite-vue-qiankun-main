import { createApp } from 'vue'
import App from './app.vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
// import { registerMicroApps, start } from 'qiankun'
const router = createRouter({
  history: createWebHistory(),
  routes,
})
const app = createApp(App)
app.use(router)
app.mount('#app')

// registerMicroApps([
//   {
//     name: 'subApp',
//     entry: 'http://localhost:5174',
//     container: '#sub-app-container',
//     activeRule: 'home',
//     props: {}
//   }
// ])

// start()