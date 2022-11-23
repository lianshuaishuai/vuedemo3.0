<template>
  <div class="tags hide-scrollbar" @touchmove.stop>
    <div v-for="item in tags" :key="item.id" class="tag-item">
      <button
        v-if="!item.img"
        :class="[selectTag === item.id ? 'active' : '']"
        @click="tagClick(item.id)"
      >
        {{ item.name }}
      </button>
      <img
        v-else
        :src="selectTag !== item.id ? item.img : item.selectImg"
        alt=""
        @click="tagClick(item.id)"
      />
    </div>
    <!-- //占位 -->
    <div class="tags-placholder"></div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ym-tags",

  props: ["tags"],

  emits: ["changeTag"],

  setup(_, context) {
    // 选中的标签
    const selectTag = ref("001");
    //  标签点击事件
    const tagClick = (tag) => {
      const ttt = "time"
      if(ttt.match(/t/) === 't'){
        console.log('你好啊');
      }
      selectTag.value = tag;
      console.log(selectTag.value);
      context.emit("changeTag", selectTag.value);
    };
    return {
      selectTag,
      tagClick,
    };
  },
};
</script>
<style lang="less" scoped>
// 标签
.tags {
  background-color: white;
  padding: 8px 0px 8px 20px;
  width: auto;
  overflow: scroll;
  display: flex;
  //占位 让右边滚动到底的时候可以距离右边

  .tag-item {
    flex-shrink: 0;
    button {
      font-size: 13px;
      margin-right: 12px;
      padding: 0 8px;
      height: 24px;
      border-radius: 12px;
      color: #7a8499;
      border: 1px solid #7a8499;
      background-color: white;
    }
    img {
      margin-right: 12px;
      height: 24px;
      border-radius: 12px;
    }
    // 选中的样式
    .active {
      color: #3faae4;
      border: 1px solid #3faae4;
    }
  }
  .tags-placholder {
    width: 8px;
    height: 24px;
    flex-shrink: 0;
  }
}
</style>