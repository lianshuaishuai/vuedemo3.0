import {ref} from 'vue'
export default ()=>{
 let forums = ref([])
 setTimeout(() => {
     forums.value = [
         {id:'001', icon:'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', title:'北京论坛'},
         {id:'002', icon:'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', title:'邢台论坛'},
         {id:'003', icon:'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', title:'石家庄论坛'},
         {id:'004', icon:'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg', title:'杭州论坛'},
        ]
 }, 3000);
 return forums  
}