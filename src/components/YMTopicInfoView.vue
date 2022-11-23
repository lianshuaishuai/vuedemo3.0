<template>
  <!-- 话题的发帖头像名字以及关注状态 -->
  <div class="post-info">
    <!-- <div class="img-container" >
      
    </div> -->
    <van-image
      src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      round
      fit="cover"
      @click.stop="personalCenter"
    />
    <div class="peopel-name one-ellipsis">{{ postsItem.name }}</div>
    <button
      class="peopel-apply"
      :class="applyName"
      @click.stop="disabled && applyClick()"
    >
      {{ status }}
    </button>
  </div>
  <!-- 话题的内容 -->
  <p class="posts-content two-ellipsis">
    8月的神州大地，骄阳似火，酷暑难耐。北京汽车举行的“万米海拔差
    960万平方公里北京X万平方公里北京X7
  </p>
</template>
<script>
import { ref, watch, toRef } from "vue";
import applyRequest from "../hook/applyRequest";
import { Toast, Image as VanImage } from "vant";
import { useRouter } from "vue-router";
// import {getCurrentInstance} from 'vue'
export default {
  name: "topic-info-view",

  props: ["postsItem"],

  emits: ["changeStatus", "update:modelValue"],

  components: {
    "van-image": VanImage,
  },

  setup(props, context) {
    //  const {proxy} = getCurrentInstance()
    // console.log(proxy);
    let uuu = ref(props.modelValue);
    const didselect = () => {
      uuu.value++;
      context.emit("update:modelValue", uuu.value);
    };

    const router = useRouter();

    // 动态绑定关注后的样式
    let applyName = ref("");
    const status = ref("");
    const applyStatus = toRef(props.postsItem, "status");
    const disabled = ref(true);
    // 关注事件
    const applyClick = async () => {
      // 关注先禁用点击事件
      disabled.value = false;
      // 关注状态先取反
      // context.emit('changeStatus',props.postsItem.id)
      applyStatus.value = !applyStatus.value;
      // 此处根据状态调取关注接口还是取消关注接口
      const data = await applyRequest(1).catch((error) => {
        Toast(error);
        disabled.value = true;
        // context.emit('changeStatus')
        applyStatus.value = !applyStatus.value;
      });
      Toast(data);
      disabled.value = true;
    };
    //个人中心
    const personalCenter = () => {
      console.log('你好啊');
      router.push({ name: "personalcenter", params: { id: props.postsItem.id } });
    };
    // 用户下拉刷新发生了改变 需要重新设置applyStatus
    watch(
      () => props.postsItem,
      (newVal) => {
        applyStatus.value = toRef(newVal, "status");
      }
    );

    // 监听 关注状态修改 名字以及绑定的class
    watch(
      applyStatus,
      (val) => {
        if (val) {
          status.value = "已关注";
          applyName.value = "peopel-apply-active";
        } else {
          status.value = "关注";
          applyName.value = "";
        }
      },
      { immediate: true }
    );

    return {
      didselect,
      applyName,
      status,
      disabled,
      applyClick,
      personalCenter,
    };
  },
};
</script>

<style lang="less" scoped>
// 发帖人的信息
.post-info {
  display: flex;
  align-items: center;
  // 发帖人的头像
  .van-image {
    margin-right: 12px;
    width: 36px;
    height: 36px;
  }
  // 发帖人的名字
  .peopel-name {
    flex: 1;
    text-align: left;
    font-size: 15px;
    color: #333a4a;
  }
  // 对该帖子未关注状态
  .peopel-apply {
    margin-left: 12px;
    padding: 0;
    width: 52px;
    height: 28px;
    border-radius: 4px;
    font-size: 13px;
    color: #3faae4;
    background-color: white;
    border: 1px solid #3faae4;
  }
  //关注状态下的样式
  .peopel-apply-active {
    color: #b2b8c6;
    border: 1px solid #b2b8c6;
  }
}
// 帖子的内容
.posts-content {
  text-align: left;
  margin-top: 16px;
  color: #7a8499;
  font-size: 15px;
}
</style>