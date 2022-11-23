import Main from '../components/Main'
import Home from '../components/Home'
import Serve from '../components/Serve'
import AppStore from '../components/AppStore'
import My from '../components/My'
// 如果路由是children中的 路径前面不需要添加  /  
const mainChildPage = [
    { path: 'home', name: 'home', component: Home,},
    { path: 'serve', name: 'serve', component: Serve},
    { path: 'appstore', name: 'appstore', component: AppStore},
    { path: 'my', name: 'my', component: My},
]
export default {
    path: '/', 
    name: 'main',
    component: Main,
    children:[...mainChildPage]
}
