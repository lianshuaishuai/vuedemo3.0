<template>
  <div>商城</div>
</template>
<script>
import { onMounted } from "@vue/runtime-core";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "AppStore",
  setup() {
    onMounted(() => {
      if (process.env.VUE_APP_FLAG === "development") {
        console.log("我是测试环境");
     
      } else {
        console.log("我为我我");
        console.log(process.env.VUE_APP_URL);
      }
    });
  },
};
</script>
<style lang="less" scoped>
</style>