import YMTopicList from '../components/YMTopicList'
export default {
    path:'/topiclist',
    name:'topiclist',
    component: YMTopicList,
    props:({query})=>({target:query.target})
}