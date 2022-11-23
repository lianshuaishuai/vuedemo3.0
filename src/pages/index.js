import {createRouter, createWebHistory} from 'vue-router'
//主页面
import main from './main'
// 帖子详情 
import postdetail from './postsdetail'
//个人中心
import personalcenter from './personalcenter'
// 公告列表
import topicList from './topicList'
// 论坛列表
import forumList from './YMForumList'
// 活动详情
import activityDetail from './activityDetail'
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes:[
        main,
        postdetail,
        personalcenter,
        topicList,
        forumList,
        activityDetail
    ], 
  })

 router.beforeEach((to, from)=>{
    console.log('hhhh');
    console.log(window.history);
    console.log(to);
    console.log(from);
    // console.log(next);
    console.log(router.getRoutes());
    if (window.history.state.back) {
        console.log('我可以后退');
    }
    if (window.history.state.forward) {
        console.log('我可以前进');
    }
 })
  export default router