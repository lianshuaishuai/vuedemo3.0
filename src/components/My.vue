<template>
    <div>
        <!-- 此处是list列表 -->
        <ul>
            <li v-for="item in list" :key="item.id">
                <div v-if="item.type == 1">
                     <!-- 轮播图 -->
                </div>
                 <div v-if="item.type == 2">
                     <!-- 4宫格 -->
                </div>
            </li> 
        </ul>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'My',
    setup() {
       const list = ref([{id:1,type:1},{id:2,type:2}])
       return {
        list
       }
    }
}
</script>
<style lang="less" scoped>

</style>