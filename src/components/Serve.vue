<template>
    <div>
        服务
    </div>
</template>
<script>
import {onActivated, onMounted} from'vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Serve',

    setup() {
        onMounted(() => {
           console.log('我是服务'); 
        })
        onActivated (()=>{
           console.log('服务出现了');
        })
    }
}
</script>
<style lang="less" scoped>

</style>