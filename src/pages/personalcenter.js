import PersonalCenter from '../components/PersonalCenter';

const pages = [
    {
        path:'/personalcenter/:id',
        name:'personalcenter',
        component: PersonalCenter,
        props:true
        // props:({params})=>{
        //    return {id:params.id}
        // }
        // props:({params}) => ({id:params.id})
    }
]
export default pages