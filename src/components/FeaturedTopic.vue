<template>
  <div class="featured-topic-container">
    <p class="title">精选话题</p>
    <div class="featured-topic">
      <div class="topic-item">#X7万米海X7万米海X7万米海#</div>
      <div class="topic-item">#挑战续航#</div>
      <div class="topic-item">##北京X7再度牵手…#</div>
      <div class="topic-item">#北京X7万里长测…#</div>
      <div class="topic-item">#新说唱点燃巴蜀#</div>
      <div class="topic-item">#助力象牙山爱逗团#</div>
    </div>
    <div class="bottom-view"></div>
  </div>
</template>
<script>
export default {
  name: "featured-topic",

  setup() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.featured-topic-container {
  padding: 32px 20px 0;
  .title {
    margin: 0;
    font-size: 21px;
    color: #141e34;
    text-align: left;
  }
  .featured-topic {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 32px;
    .topic-item {
      @marginRight: 15px;
      @imageWidth: calc(~"100vw - 40px - @{marginRight}");
      text-align: left;
      font-size: 15px;
      color: #7A8499;
      margin-top: 16px;
      margin-right: @marginRight;
      width: calc(@imageWidth / 2);
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .topic-item:nth-of-type(2n) {
      margin-right: 0;
    }
  }
  .bottom-view {
    height: 4px;
    background-color: #f3f3f8;
  }
}
</style>