<template>
  <van-nav-bar
    title="系统公告"
    :border="false"
    left-arrow
    fixed
    placeholder
    @click-left="onClickLeft"
  >
    <template #left>
      <div>返回按钮</div>
    </template>
  </van-nav-bar>
  <ul class="topic-list-container">
    <li v-for="item in list" :key="item.id">
      <van-image
        class="topic-icon"
        src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        round
        fit="cover"
      />
      <h4 class="two-ellipsis">
       {{item.title}}
      </h4>
    </li>
  </ul>
</template>
<script>
import { NavBar, Image as VanImage } from "vant";
import { useRouter } from "vue-router";
import { onMounted, ref} from "vue";
export default {
  name: "ym-topiclist",
  props: ["target"],
  components: {
    "van-nav-bar": NavBar,
    "van-image": VanImage,
  },
  setup() {
    const route = useRouter();
    const list = ref([])
    onMounted(() => {
      getData();
    });
    const onClickLeft = () => {
      route.back();
    };

    const getData = () => {
        setTimeout(() => {
            list.value = [
                {id:1, title: '你好你'},
                {id:2, title: '你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好'},
                ]
        }, 3000);
    };
    return {
      onClickLeft,
      list
    };
  },
};
</script>
<style lang="less" scoped>
.topic-list-container {
  padding: 0px 20px;
  li {
    display: flex;
    padding-top: 20px;
    text-align: left;

    .topic-icon {
      margin-right: 10px;
      width: 30px;
      height: 30px;
    }
    h4 {
      flex: 1;
      margin: 0;
    }
  }
}
</style>