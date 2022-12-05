<template>
  <!--  ref="elment" :style="{ height: `${elmentHeight}px` }" -->
  <div class="test1111">
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
    我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串我是很长的字符串
  </div>
  <div class="test_bottom">

  </div>
  <div class="personal-center" v-if="false">
    <van-image
      class="top_bg_image"
      src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      fit="cover"
    />
    <div class="top-info">
      <van-image
        class="photo-image"
        src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        round
        fit="cover"
      />
      <!-- 关注按钮 -->
      <div class="apply-button">
        <img src="../assets/tianjia-3@2x.png" />
        <span>关注</span>
      </div>
      <!-- 标题 -->
      <h4>沦陷于你的眼眸</h4>
      <p class="info-detail">
        据中国载人航天工程办公室消息，北京时间6月17日15时54分，舟十二号与天和核心舱完成交会对接。
      </p>
      <!-- 底部工具栏 -->
      <ul class="tool-bar">
        <li>
          <span class="tool-bar-title">关注</span>
          <span class="tool-bar-number">24</span>
        </li>
        <li>
          <span class="tool-bar-title">粉丝</span>
          <span class="tool-bar-number">34.6万</span>
        </li>
        <li>
          <span class="tool-bar-title">点赞</span>
          <span class="tool-bar-number">12万</span>
        </li>
      </ul>
    </div>
    <!-- 底部评论 -->
    <van-config-provider :theme-vars="themeVars">
      <van-tabs v-model:active="active" shrink sticky>
        <!-- 假如那个标签点击时候不切换 也需要有内容 可以随意写 -->
        <van-tab title="我的提问" :key="0">
          <posts-cell
            v-for="item in list"
            :key="item.id"
            :posts-item="item"
          />
        </van-tab>
        <van-tab title="我的回答" :key="1">2</van-tab>
        <van-tab title="我的收藏" :key="2">3</van-tab>
      </van-tabs>
    </van-config-provider>
    <!-- 返回按钮 -->
    <button class="back" @click="back">返回</button>
  </div>
</template>
<script>
// import Player from 'xgplayer'
import { onMounted, ref, toRefs, watch } from "@vue/runtime-core";
import { Image as VanImage, Tab, Tabs } from "vant";
import { useRoute, useRouter } from "vue-router";
import postsListHook from "../hook/postsListHook";
import PostsCell from "./PostsCell.vue";
export default {
  name: "personal-center",
  props: ["id"],
  components: {
    "van-image": VanImage,
    "van-tab": Tab,
    "van-tabs": Tabs,
    PostsCell
  },

  setup() {
    const {postDic, onLoad} = postsListHook()
    const show = ref(true);
    const router = useRouter();
    const route = useRoute();
    const themeVars = {
      tabsBottomBarColor: "#141E34",
    };
    const active = ref(0);
    const message = ref(0);
    const text = ref("text");
    onMounted(()=>{
    console.log('重新加载');
    onLoad()
   })
    watch(route, () => {
      active.value = 0;
      show.value = false;
      setTimeout(() => {
        show.value = true;
      }, 100);
      console.log("路由变化了刷新");
    });
    const back = () => {
      router.back();
    };
    return {
      ...toRefs(postDic),
      show,
      back,
      themeVars,
      message,
      text,
      active,
    };
  },
};
</script>
<style lang="less" scoped>
.test1111 {
  padding-bottom: 40px ;
}
.test_bottom {
  position: fixed;
  right: 20px;
  bottom: 0;
  width: 40px;
  height: 40px;
  background: red;
}
.personal-center {
  background-color: white;
  position: relative;
  .top_bg_image {
    width: 100vw;
    height: calc(~"100vw * 0.43");
  }
  .top-info {
    position: relative;
    top: -12px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    .photo-image {
      position: absolute;
      width: 80px;
      height: 80px;
      top: -40px;
      left: 24px;
      border: 3px solid white;
    }
    .apply-button {
      position: absolute;
      top: 12px;
      right: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #333a4a;
      width: 118px;
      height: 32px;
      border-radius: 16px;

      img {
        width: 10px;
        height: 10px;
      }
      span {
        font-size: 12px;
        margin-left: 5px;
        color: white;
      }
    }
    // 标题
    h4 {
      margin: 0;
      padding: 68px 20px 0px;
      font-size: 18px;
      text-align: left;
    }
    // 内容
    .info-detail {
      margin: 12px 20px 0;
      text-align: left;
      font-size: 13px;
      color: #7a8499;
    }
    // 工具栏
    .tool-bar {
      display: flex;
      padding: 12px 20px 30px;
      li {
        margin-left: 20px;
        .tool-bar-title {
          font-size: 13px;
          color: #7a8499;
        }
        .tool-bar-number {
          margin-left: 4px;
          font-size: 13px;
          color: #141e34;
        }
      }
      li:nth-of-type(1) {
        margin-left: 0;
      }
    }
    &::after {
      content: " ";
      position: absolute;
      left: 20px;
      bottom: 0;
      right: 20px;
      background-color: #333a4a;
      opacity: 0.12;
      height: 1px;
    }
  }
  // 返回按钮
  .back {
    position: fixed;
    top: constant(safe-area-inset-top); /* 兼容 iOS < 11.2 */
    top: env(safe-area-inset-top);
    left: 0;
    width: 60px;
    height: 30px;
    z-index: 999;
  }
}
</style>