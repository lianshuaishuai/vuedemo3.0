<template>
  <div class="topic-cell" @click="gotoDetail(postsItem.id)">
    <!-- 话题的信息 -->
    <topic-info-view :posts-item="postsItem" @changeStatus="changeStatus"></topic-info-view>
    <!-- 图片 -->
    <topic-image-view :images="postsItem.images"></topic-image-view>
    <!-- 底部工具栏 -->
    <topic-tool-bar :posts-item="postsItem"></topic-tool-bar>
    <!-- 细线 -->
    <div class="slider"></div>
  </div>
</template>
<script>

import YMTopicInfoView from "./YMTopicInfoView.vue";
import YMTopicImages from "./YMTopicImages.vue";
import YMTopicToolBar from "./YMTopicToolBar.vue"
import { useRouter } from 'vue-router'
export default {
  name: "posts-cell",
  // import { defineAsyncComponent } from ‘vue’
  //  defineAsyncComponent 延迟加载 
  components: {
    "topic-info-view": YMTopicInfoView,
    //  "topic-info-view":  defineAsyncComponent(() => import('./YMTopicInfoView.vue'))
    "topic-image-view": YMTopicImages,
    "topic-tool-bar":YMTopicToolBar
   
  },
  
  props: ["postsItem"],
  emits:["changeStatus"],
  setup(_,context) {
    const YMTopicInfoView = () => import('./YMTopicInfoView.vue')
    console.log(YMTopicInfoView);
    const router = useRouter()
    function gotoDetail(id){
      router.push({'name': 'postsdetail',query:{id}})
    }
    const changeStatus = (id)=>{
          context.emit("changeStatus", id)
    }
    return {
      gotoDetail,
      changeStatus,
      YMTopicInfoView
    }
  }
};
</script>
<style lang="less" scoped>
.topic-cell{
   padding: 40px 20px 0px 20px;
   .slider {
     width: 100%;
     height: 1px;
     background: rgba(51, 58, 74, 0.12);
   }
}

</style>