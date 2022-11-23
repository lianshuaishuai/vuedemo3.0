import { createApp } from 'vue'
import App from './App.vue'
import router from './pages/index'
import { ConfigProvider } from 'vant';
// 引入vconsole
import './js/vconsole'
const app = createApp(App)
app.use(router)
app.use(ConfigProvider);
app.mount('#app')
