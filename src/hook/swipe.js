import {ref, onMounted} from 'vue'
export default ()=>{
    const images = ref([])
    
    onMounted(() => {
        getImages()
    })

    const getImages = ()=>{
        setTimeout(() => {
            images.value =  [
                "https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
                "https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
              ]
        }, 3000);
    }

    return {
        images,
        getImages
    }
}