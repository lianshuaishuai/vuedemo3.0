import { ref, onMounted, onActivated, onDeactivated,nextTick } from 'vue'
export default (elment) => {
    console.log(elment);
    const offsetTop = ref(0);
    const scrollF = (e) => {
        offsetTop.value = e.target.scrollTop
    };
    onMounted(() => {
       
    });

    onActivated(() => {
        setUpScroll()
    });

    onDeactivated(() => {

    });

    const setUpScroll = () => {
        if (offsetTop.value > 0) {
            nextTick(() => {
                elment.value.scrollTo(0, offsetTop.value);
               
            }) 
        }
    }
    return { scrollF }
}