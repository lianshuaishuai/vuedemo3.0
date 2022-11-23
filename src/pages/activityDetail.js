// import activityDetail from '../components/YMActivityDetail'
export default {
    path: '/activityDetail/:id',
    name: 'activityDetail',
    component: () => import('../components/YMActivityDetail.vue'),
    props:({params}) => ({id:params.id})
}