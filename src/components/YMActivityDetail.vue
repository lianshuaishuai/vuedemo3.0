
<template>
  <div class="activity_detail_container safe-bottom">
    <!-- 顶部图 -->
    <vant-image
      class="top-bg-img"
      src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      fit="cover"
      @click="showDiv"
    
    />
    <!-- 活动标题 截止时间 地址等 -->
    <div class="single-info">
      <h4 class="title text-left">玩转故宫 I “京”喜过暑假</h4>
      <ul>
        <li class="single-info-item">
          <vant-image :src="require('../assets/riqi.png')" fit="cover" />
          <span class="title number-wrap"> 2021年11月10日（报名截止） </span>
        </li>
        <li class="single-info-item">
          <vant-image :src="require('../assets/shijian.png')" fit="cover" />
          <span class="title number-wrap"> 2021年11月15日，14:00-16:00</span>
        </li>
        <li class="single-info-item">
          <vant-image :src="require('../assets/weizhi.png')" fit="cover" />
          <span class="title number-wrap"> 北京市朝阳区霍尼韦尔大夏</span>
        </li>
      </ul>
    </div>
    <!-- 报名人数 -->
    <div class="number">
      <h4>已有32人报名</h4>
      <!-- 报名人头像 -->
      <div class="people-photo">
        <img src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt="" />
        <img src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt="" />
        <img src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt="" />
        <img src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt="" />
      </div>
    </div>
    <!-- 活动详情和活动留言标签 -->
    <van-tabs sticky shrink>
      <van-tab title="活动详情">
        <div class="activity-detail-html" v-html="postDetailHeader"></div>
      </van-tab>
      <van-tab title="活动留言">1</van-tab>
    </van-tabs>
    <!-- 自己实现的 弹窗 自己实现 需要打开 stopScroll()  canScroll()-->
    <!--    
    <div id= "newinfo" class="showCss" v-if="show" @click="hideDiv">
        <div class="show-item" id= "newinfo" @click.stop="">
        无人喝彩无人喝彩的人生，就似没有花香的小径。 人生的赛场常常是这样开始的： 两旁是朋友
        无人喝彩无人喝彩的人生，就似没有花香的小径。 人生的赛场常常是这样开始的： 两旁是朋友
        无人喝彩无人喝彩的人生，就似没有花香的小径。 人生的赛场常常是这样开始的： 两旁是朋友
        无人喝彩无人喝彩的人生，就似没有花香的小径。 人生的赛场常常是这样开始的： 两旁是朋友
        无人喝彩无人喝彩的人生，就似没有花香的小径。 人生的赛场常常是这样开始的： 两旁是朋友
        无人喝彩无人喝彩的人生，就似没有花香的小径。 人生的赛场常常是这样开始的： 两旁是朋友
        无人喝彩无人喝彩的人生，就似没有花香的小径。 人生的赛场常常是这样开始的： 两旁是朋友
        无人喝彩无人喝彩的人生，就似没有花香的小径。 人生的赛场常常是这样开始的： 两旁是朋友
        无人喝彩无人喝彩的人生，就似没有花香的小径。 人生的赛场常常是这样开始的： 两旁是朋友
        无人喝彩无人喝彩的人生，就似没有花香的小径。 人生的赛场常常是这样开始的： 两旁是朋友
        无人喝彩无人喝彩的人生，就似没有花香的小径。 人生的赛场常常是这样开始的： 两旁是朋友
        无人喝彩无人喝彩的人生，就似没有花香的小径。 人生的赛场常常是这样开始的： 两旁是朋友
        无人喝彩无人喝彩的人生，就似没有花香的小径。 人生的赛场常常是这样开始的： 两旁是朋友
        无人喝彩无人喝彩的人生，就似没有花香的小径。 人生的赛场常常是这样开始的： 两旁是朋友
        无人喝彩无人喝彩的人生，就似没有花香的小径。 人生的赛场常常是这样开始的： 两旁是朋友
        无人喝彩无人喝彩的人生，就似没有花香的小径。 人生的赛场常常是这样开始的： 两旁是朋友
         <input type="text" placeholder="888">
      </div>
    </div> -->

    <!-- 使用vant 弹窗-->
    <van-config-provider :theme-vars="themeVars">
      <van-popup v-model:show="show" @open="open">
        <template #default>
          <div class="show-item-bg">
            <button class="hide-popup" @click="hideDiv">你好啊</button>
            <div class="show-item">
              无人喝彩无人喝彩的人生，就似没有花香的小径。
              人生的赛场常常是这样开始的： 两旁是朋友
              无人喝彩无人喝彩的人生，就似没有花香的小径。
              人生的赛场常常是这样开始的： 两旁是朋友
              无人喝彩无人喝彩的人生，就似没有花香的小径。
              人生的赛场常常是这样开始的： 两旁是朋友
              无人喝彩无人喝彩的人生，就似没有花香的小径。
              人生的赛场常常是这样开始的： 两旁是朋友
              无人喝彩无人喝彩的人生，就似没有花香的小径。
              人生的赛场常常是这样开始的： 两旁是朋友
              无人喝彩无人喝彩的人生，就似没有花香的小径。
              人生的赛场常常是这样开始的： 两旁是朋友
              无人喝彩无人喝彩的人生，就似没有花香的小径。
              人生的赛场常常是这样开始的： 两旁是朋友
              无人喝彩无人喝彩的人生，就似没有花香的小径。
              人生的赛场常常是这样开始的： 两旁是朋友
              无人喝彩无人喝彩的人生，就似没有花香的小径。
              人生的赛场常常是这样开始的： 两旁是朋友
              无人喝彩无人喝彩的人生，就似没有花香的小径。
              人生的赛场常常是这样开始的： 两旁是朋友
              无人喝彩无人喝彩的人生，就似没有花香的小径。
              人生的赛场常常是这样开始的： 两旁是朋友
              无人喝彩无人喝彩的人生，就似没有花香的小径。
              人生的赛场常常是这样开始的： 两旁是朋友
              无人喝彩无人喝彩的人生，就似没有花香的小径。
              人生的赛场常常是这样开始的： 两旁是朋友
              无人喝彩无人喝彩的人生，就似没有花香的小径。
              人生的赛场常常是这样开始的： 两旁是朋友
              无人喝彩无人喝彩的人生，就似没有花香的小径。
              人生的赛场常常是这样开始的： 两旁是朋友
              无人喝彩无人喝彩的人生，就似没有花香的小径。
              人生的赛场常常是这样开始的： 两旁是朋友
              <input
                type="text"
                placeholder="888"
                v-model="number"
                @input="handleInput"
              />
            </div>
          </div>
        </template>
      </van-popup>
    </van-config-provider>
  </div>
</template>

<script>
import { Image as VanImage, Tab, Tabs, Popup, Toast } from "vant";
import { ref } from "@vue/reactivity";
// import {canScroll, stopScroll} from '../js/scroll'
export default {
  name: "ym-activity-detail",
  props: ["id"],
  components: {
    "vant-image": VanImage,
    "van-tab": Tab,
    "van-tabs": Tabs,
    "van-popup": Popup,
  },

  setup() {
    // 实验 css的v-bind 原理就是绑定内置样式同时响应式
    const color = ref("red");

    setTimeout(() => {
      color.value = "#7A8499";
    }, 3000);

    const show = ref(false);
    const showDiv = () => {
      show.value = true;
      // stopScroll()
    };
    const hideDiv = () => {
      show.value = false;
      // canScroll()
    };
    const open = () => {
      Toast("我出现了");
    };
    const themeVars = {
      popupBackgroundColor: "rgba(0, 0, 0, 0)",
    };
    const postDetailHeader = ref(
      "<div style='font-size: 14px;white-space: pre-wrap;line-height: 1.7'><p style='margin: 0;'><img src='https://cdn.smartservice.bjev.com.cn/baicapp/20220501/103ee9e9924b406ba9249434c447ac08'></p><p style='margin: 0;'><strong class='ql-size-large' style='color: rgb(102, 185, 102);'>4.21-5.15日，登录北京汽车APP社区，以“春季售后服务季”为话题发布一篇帖子！写下划痕修复或防雨镀膜的经历及效果感受，发布后得50积分，内容优秀被加精，享5000积分！</strong></p><p style='margin: 0;'>点击了解活动详情：<a style='color:#6fcdcf; text-decoration: none;' href='http://wx.smartservice.bjev.com.cn/postDetail.html?id=2c9083957fe5c8fa018049aa7f365107&amp;uid=2c9083857f21d203017f2c25bc776d44' rel='noopener noreferrer' target='_blank'>免费划痕修复防雨镀膜晒单，最高赢5000积分</a></p><p style='margin: 0;'>第二周加精名单帖子详情：</p><h2><a style='color:#6fcdcf; text-decoration: none;' href='http://wx.smartservice.bjev.com.cn/postDetail.html?id=2c90838a80707102018079fcde2a445a&amp;uid=2c9083857f21d203017f2c25bc776d44' rel='noopener noreferrer' target='_blank'>享北汽服务，享五一假期</a></h2><h2><a style='color:#6fcdcf; text-decoration: none;' href='http://wx.smartservice.bjev.com.cn/postDetail.html?id=2c90839580615609018066406aae5dfd&amp;uid=2c9083857f21d203017f2c25bc776d44' rel='noopener noreferrer' target='_blank'>北汽镀膜修复活动体验记</a></h2><p style='margin: 0;'>恭喜以上2位车友！也请其他参与活动的车友注意活动规则，记得一定要带上效果对比图和兑换券已使用截图哦！</p></div>"
    );
   
    const number = ref("");
    const handleInput = e => number.value = e.target.value.replace(/\D/g, "").replace(/^0{1,}/g, "");
    return {
      color,
      showDiv,
      hideDiv,
      show,
      themeVars,
      postDetailHeader,
      open,
      number,
      handleInput,
    };
  },
};
</script>

<style lang="less" scoped>
.activity_detail_container {
  // 活动顶部图
  .top-bg-img {
    width: 100vw;
    height: calc(~"100vw * 0.8");
  }

  // 简单信息（活动标题， 时间 地点 包裹div）
  .single-info {
    position: relative;
    padding: 20px 0px 20px 20px;
    // 截止时间 活动时间 地址
    &-item {
      display: flex;
      align-items: flex-start;
      padding-top: 16px;

      // 图标
      .van-image {
        margin-right: 12px;
        width: 16px;
        height: 16px;
      }

      // 标题
      .title {
        flex: 1;
        text-align: left;
        font-size: 13px;
        color: v-bind(color);
      }

      // 地址图片 特定css
      &:nth-of-type(3) {
        .van-image {
          margin-left: 2px;
          width: 13px;
          height: 17px;
        }
      }
    }
    // 简单信息的底部细线
    &::after {
      content: " ";
      position: absolute;
      left: 20px;
      bottom: 0;
      right: 20px;
      height: 0.5px;
      opacity: 0.12;
      background-color: #333a4a;
    }
  }
  // 报名人数
  .number {
    position: relative;
    padding: 20px;
    height: 97px;
    box-sizing: border-box;
    text-align: left;
    // 报名人的头像
    .people-photo {
      display: flex;
      margin-top: 12px;
      img {
        margin-right: -8px;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        object-fit: cover;
      }
    }
    // 底部细线
    &::after {
      content: " ";
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 0;
      height: 0.5px;
      opacity: 0.12;
      background-color: #333a4a;
    }
  }
  // 设置标签距离
  :deep(.van-tab) {
    margin-right: 20px;
  }
  // 自己实现的弹窗
  // .showCss {
  //   position: fixed;
  //   left: 0;
  //   right: 0;
  //   top: 0;
  //   bottom: 0;
  //   background-color:rgba(0, 0, 0, 0.7);
  //   z-index: 99;
  //   .show-item {
  //     position: absolute;
  //     top: 25%;
  //     left: 20px;
  //     right: 25px;
  //     height: 50%;
  //     overflow: auto;
  //     background-color: #fff;
  //   }
  // }

  // 活动详情
  .activity-detail-html {
    padding-top: 20px;
    :deep(img) {
      width: 100%;
    }
  }
  // 弹窗 （vant包裹的）
  .show-item-bg {
    padding-top: 25px;
    width: calc(~"100vw - 15px");
    height: calc(~"50vh + 50px");
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    .hide-popup {
      position: absolute;
      right: 0;
      top: 0;
      width: 50px;
      height: 50px;
      background-color: orange;
      border-width: 0;
      z-index: 9;
    }
    .show-item {
      border-radius: 5px;
      margin: 0 auto;
      width: calc(~"100vw - 40px");
      height: 50vh;
      overflow: scroll;
      background-color: #fff;
    }
  }
}
</style>