import {createRouter, createWebHistory} from 'vue-router'
//主页面
import main from './main'
// 帖子详情 
import postdetail from './postsdetail'
//个人中心
import personal from './personalcenter'
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
        ...personal,
        topicList,
        forumList,
        activityDetail
    ], 
  })

//  router.beforeEach((to, from)=>{
 
   
//  })
  export default router