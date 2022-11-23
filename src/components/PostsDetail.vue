<template>
  <div>
    <div class="post-detail-html" v-html="postDetailHeader"></div>
  </div>
</template>
<script>
import PubSub from "pubsub-js";
import { onMounted, ref } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PostsDetail",

  props: ["id"],

  setup(props) {
    const postDetailHeader = ref(
      "<div style='font-size: 14px;white-space: pre-wrap;line-height: 1.7'><p style='margin: 0;'><img src='https://cdn.smartservice.bjev.com.cn/baicapp/20220501/103ee9e9924b406ba9249434c447ac08'></p><p style='margin: 0;'><strong class='ql-size-large' style='color: rgb(102, 185, 102);'>4.21-5.15日，登录北京汽车APP社区，以“春季售后服务季”为话题发布一篇帖子！写下划痕修复或防雨镀膜的经历及效果感受，发布后得50积分，内容优秀被加精，享5000积分！</strong></p><p style='margin: 0;'>点击了解活动详情：<a style='color:#6fcdcf; text-decoration: none;' href='http://wx.smartservice.bjev.com.cn/postDetail.html?id=2c9083957fe5c8fa018049aa7f365107&amp;uid=2c9083857f21d203017f2c25bc776d44' rel='noopener noreferrer' target='_blank'>免费划痕修复防雨镀膜晒单，最高赢5000积分</a></p><p style='margin: 0;'>第二周加精名单帖子详情：</p><h2><a style='color:#6fcdcf; text-decoration: none;' href='http://wx.smartservice.bjev.com.cn/postDetail.html?id=2c90838a80707102018079fcde2a445a&amp;uid=2c9083857f21d203017f2c25bc776d44' rel='noopener noreferrer' target='_blank'>享北汽服务，享五一假期</a></h2><h2><a style='color:#6fcdcf; text-decoration: none;' href='http://wx.smartservice.bjev.com.cn/postDetail.html?id=2c90839580615609018066406aae5dfd&amp;uid=2c9083857f21d203017f2c25bc776d44' rel='noopener noreferrer' target='_blank'>北汽镀膜修复活动体验记</a></h2><p style='margin: 0;'>恭喜以上2位车友！也请其他参与活动的车友注意活动规则，记得一定要带上效果对比图和兑换券已使用截图哦！</p></div>"
    );
    onMounted(() => {
      PubSub.publish("MY TOPIC", { id: props.id, status: 0 });
    });
    return {
      postDetailHeader,
    };
  },
};
</script>
<style lang='less' scoped>
.post-detail-html {
  :deep(img) {
    width: 100%;
  }
}
</style>