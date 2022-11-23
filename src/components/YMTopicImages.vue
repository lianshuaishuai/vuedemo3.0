<template>
  <div class="image-container">
    <div
      class="image"
      :class="bindClass"
      v-for="(item, index) in imageArr"
      :key="index"
    >
      <van-image width="100%" height="100%" :src="item" fit="cover">
        <!-- <template #default>
          <van-image width="100%" height="100%" src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" fit="cover"> </van-image>
        </template> -->
      </van-image>
    </div>
    <span class="imageSurplus" v-if="surplus">+{{ surplus }}</span>
  </div>
</template>
<script>
import { onMounted, reactive, ref } from "vue";
import { Image as VanImage } from "vant";
export default {
  name: "topic-image-view",
  props: ["images"],
  components: {
    "van-image": VanImage,
  },
  setup(props) {
    //展示的个数
    const showCount = ref(0);
    //动态绑定class类名
    const bindClass = ref("");
    //最终需要展示几个
    const imageArr = reactive([]);
    //剩余的图片的个数
    const surplus = ref(0);
    onMounted(() => {
      if (!props.images) {
        return;
      }
      showCount.value = props.images.length;
      if (showCount.value === 1) {
        showCount.value === 1;
        //一排一个的样式
        bindClass.value = "one-image-style";
      } else if (showCount.value === 2 || showCount.value === 3) {
        showCount.value = 2;
        //一排两个的样式
        bindClass.value = "two-image-style";
      } else if (showCount.value >= 4 && showCount.value <= 8) {
        showCount.value = 4;
        //一排两个的样式
        bindClass.value = "two-image-style";
      } else {
        //一排三个的样式
        showCount.value = 9;
        bindClass.value = "three-image-style";
      }
      for (let index = 0; index < showCount.value; index++) {
        imageArr.push(props.images[index]);
      }
      surplus.value = props.images.length - imageArr.length;
    });

    return {
      imageArr,
      bindClass,
      surplus,
    };
  },
};
</script>
<style lang="less" scoped>
.image-container {
  position: relative;
  display: flex;
  //   padding: 0 18px 0 20px;
  flex-wrap: wrap;
  // 剩余图片个数
  .imageSurplus {
    color: white;
    font-size: 25px;
    position: absolute;
    bottom: 0;
    right: 5px;
  }
  @marginRight: 2px;
  .image {
    box-sizing: border-box;
    // padding-right: 2px;
    padding-bottom: @marginRight;
  }

  //   一张图的样式
  .one-image-style {
    @imageWidth: calc(~"100vw - 40px");
    width: @imageWidth;
    height: calc(@imageWidth / 2);
  }
  //   一排两张的样式
  .two-image-style {
   
    @imageWidth: calc(~"100vw - 40px - @{marginRight}");
    margin-right: @marginRight;
    width: calc(@imageWidth / 2);
    height: calc(@imageWidth / 2);
    &:nth-of-type(2n) {
      /* 选择个数是2的倍数的元素 */
      margin-right: 0;
    }
  }

  //   一排三张的样式
  .three-image-style {
    @marginRight: 2px;
    @imageWidth: calc(~"100vw - 40px - @{marginRight} * 2");
    margin-right: @marginRight;
    width: calc(@imageWidth / 3);
    height: calc(@imageWidth / 3);
    &:nth-of-type(3n) {
      /* 选择个数是3的倍数的元素 */
      margin-right: 0;
    }
  }
}
</style>