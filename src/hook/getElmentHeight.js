import { ref, onMounted, onActivated,watch } from 'vue'
import { useRect, useWindowSize } from "@vant/use";

// 如果页面有tabbar 传tabbar的高度 因为使用的是vant 所以默认高度是50
export default (tabbarHeight = 0) => {
    // 苹果安全区域
    // const safeAreaInsets = require("safe-area-insets");
    // 获取窗口
    const { width, height } = useWindowSize();
   
    const elmentHeight = ref(0)
    // ref 获取el
    const elment = ref(null);
    watch(height,()=>{
        elHieght()
    })
    onMounted(() => {
       
        elHieght()
       
    })
    onActivated(() => {
       
        // elHieght()
    })
    function elHieght() {
        // 方法一：
         const safeBottom = getComputedStyle(document.documentElement).getPropertyValue("--sab").slice(0, -2)
         // 方法二：safeAreaInsets.bottom
         const rect = useRect(elment)
       
         elmentHeight.value = height.value - rect.top - (tabbarHeight * width.value) / 375.0 - safeBottom;
        //  height.value - rect.top - (tabbarHeight * width.value) / 375.0 - safeAreaInsets.bottom;
        

    }
    return {elmentHeight, elment}
}