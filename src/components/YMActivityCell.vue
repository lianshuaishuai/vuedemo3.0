<template>
  <div class="activity-cell-container" @click="gotoDetail">
    <!-- 头像和名称 -->
    <div class="icon-name-container">
      <img
        class="icon"
        src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        alt=""
      />
      <span class="name"
        >北京汽车 京友会北京汽车 京友会北京汽车 京友会北京汽车 京友会北京汽车
        京友会北京汽车 京友会北京汽车 京友会北京汽车 京友会北京汽车 京友会</span
      >
    </div>
    <!-- 活动图 -->
    <img
      class="activity-icon"
      src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      alt=""
    />
    <!-- 活动的名称 -->
    <p class="activity-title">
      北汽新车发布会-EU5 Plus现场摇滚北汽新车发布会-EU5
      Plus现场摇滚北汽新车发布会-EU5 Plus现场摇滚北汽新车发布会-EU5
      Plus现场摇滚北汽新车发布会-EU5 Plus现场摇滚
    </p>
    <!-- 参与人 -->
    <div class="activity-people">
      <div class="people-photo">
        <img src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt="" />
        <img src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt="" />
        <img src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt="" />
        <img src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt="" />
      </div>
      <span>已有2344人参与</span>
    </div>
    <!-- 时间 -->
    <span class="activity-time">发布于2021.11.03</span>
    <!-- 细线 -->
    <div class="bottom-slider"></div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
export default {
  name: "ym-activity-cell",
  setup() {
    const router = useRouter()
    const gotoDetail = () => {
      router.push({name: 'activityDetail', params: {id: '123'}})
    }
    return {gotoDetail};
  },
};
</script>
<style lang="less" scoped>
.activity-cell-container {
  display: flex;
  flex-direction: column;
  padding: 20px 20px;

  //   活动发布人的头像以及名字
  .icon-name-container {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    // 活动发布人头像
    .icon {
      margin-right: 12px;
      width: 36px;
      height: 36px;
      border-radius: 18px;
      object-fit: cover;
    }

    // 名字
    .name {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  //   活动图
  .activity-icon {
    @width: calc(~"100vw - 40px");
    width: @width;
    height: calc(@width / 2);
    border-radius: 5px;
    object-fit: cover;
  }

  //   活动内容
  .activity-title {
    margin-bottom: 8px;
    color: #3e4046;
    font-size: 18px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
  }

  //   参与活动人数以及头像
  .activity-people {
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    // 参与人数头像
    .people-photo {
      display: flex;
      align-items: center;
      margin-right: 15px;

      img {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        object-fit: cover;
        margin-right: -5px;
      }
    }

    // 多少人参与
    span {
      font-size: 13px;
      color: #7a8499;
    }
  }

  //   活动时间
  .activity-time {
    text-align: left;
    color: #b2b8c6;
    font-size: 13px;
  }

  //   底部线
  .bottom-slider {
    margin-top: 40px;
    width: 100%;
    height: 1px;
    background: rgba(29, 30, 35, 0.12);
  }
}
</style>