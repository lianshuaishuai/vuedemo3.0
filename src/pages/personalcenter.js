import PersonalCenter from '../components/PersonalCenter';
export default {
    path:'/personalcenter/:id',
    name:'personalcenter',
    component: PersonalCenter,
    props:true
    // props:({params})=>{
    //    return {id:params.id}
    // }
    // props:({params}) => ({id:params.id})
}