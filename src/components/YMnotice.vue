<template>
  <div class="notice-container" @click="noticeClick">
    <van-swipe
      v-if="notice.length"
      class="notice"
      :autoplay="3000"
      :show-indicators="false"
      :touchable="false"
      vertical
    >
      <van-swipe-item class="swipe-notice" v-for="(item, index) in notice" :key="item">
        <template #default>
          <div class="van-swipe-item-cell">
            <img class="icon" :src="leftIcon" alt="" />
            <span>
              公告 &nbsp; ({{ index + 1 }}/{{ notice.length }}) &nbsp;
              {{ item }}
            </span>
            <img class="right-icon" :src="rightIcon" alt="" />
          </div>
        </template>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
import leftIcon from "../assets/topic/noticeicon@2x.png";
import rightIcon from "../assets/topic/noticeright@2x.png";
import {useRouter } from 'vue-router';
export default {
  name: "no-tice",

  props: ["notice"],

  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
  },

  setup() {
    const route =  useRouter()
    const noticeClick = () => {
     route.push({name:'topiclist', query:{target: 1}})
    };
    return {
      leftIcon,
      rightIcon,
      noticeClick,
    };
  },
};
</script>

<style lang="less" scoped>
.notice-container {
  padding: 20px 20px 0;
  // 轮播
  .notice {
    height: 40px;
    background-image: url("../assets/topic/new_topic_notice@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
   
    .van-swipe-item {
      line-height: 40px;

      .van-swipe-item-cell {
        line-height: 40px;
        display: flex;
        align-items: center;
        padding: 0 16px;
        // 公告左边的图标
        .icon {
          width: 12px;
          height: 12px;
          margin-right: 10px;
        }
        // 中间的文字
        span {
          flex: 1;
          color: #3faae4;
          font-size: 13px;
          text-align: left;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        // 右边的箭头
        .right-icon {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
}
</style>