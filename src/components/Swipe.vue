<template>
  <div class="swipe-coner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="image in images" :key="image" @click="didSwiperItem(image)">
        <van-image :src="image" fit="cover">
        </van-image>
      </van-swipe-item>
    </van-swipe>
    
  </div>
</template>
<script>
import { Swipe, SwipeItem, Image as VanImage } from "vant";
export default {
  name: "swi-pe",

  props:['images'],

  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    "van-image": VanImage,
  },
  setup() {
    const didSwiperItem = (item) => {
        console.log(item);
    }

    return {
      didSwiperItem
    }
  },
};
</script>
<style lang="less" scoped>
// .swipe-coner {
//   position: relative;
//   padding: 0 20px;
//   .my-swipe {
//     .van-swipe-item {
//       height: calc(~"50vw - 20px");
//     }
//   }
  
// }
</style>