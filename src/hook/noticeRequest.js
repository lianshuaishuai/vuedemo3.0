import {ref, onMounted} from 'vue'
export default ()=>{
    const notices = ref([])
    
    onMounted(() => {
        getNotices()
    })

    const getNotices = ()=>{
        setTimeout(() => {
            notices.value =  [
                "你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好",
                "我好",
              ]
        }, 3000);
    }

    return {
        notices,
        getNotices
    }
}