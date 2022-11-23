import PostsDetail from '../components/PostsDetail';
export default {
    path:'/detail',
    name:'postsdetail',
    component: PostsDetail,
    props:({query})=>({id:query.id})
}