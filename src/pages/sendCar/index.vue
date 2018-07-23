<template>
  <div class="container">
    <div class="goods-message">
      <div class="goods-address flex-sb pdlr20">
        <div class="address flex-fs "><text class="address-f text-overflow">上海市 浦东新区</text><img mode="widthFix" src="/static/images/big_arrow.png"><text class="address-f text-overflow">上海市 浦东新区</text></div>
        <div class="public-time">2018-07-09 16:09</div>
      </div>
      <div class="gooods-item pdlr20 flex-fs">
        <div class="title">货&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;品</div>
        <div class="con main-color">盐</div>
      </div>
      <div class="gooods-item pdlr20 flex-fs">
        <div class="title">司机运价</div>
        <div class="con">100元/件</div>
      </div>
      <div class="send-car-msg pdlr20">
        <text>已派:0</text>
        <text>&nbsp;&nbsp;&nbsp;待派:1</text>
      </div>
    </div>
    <div class="car-list">
        <div class="goods-message mgt20">
          <div class="goods-address flex-sb pdlr20">
            <div class="address flex-fs "><text>车牌号: 沪A4567</text></div>
            <div class="public-time">待派车</div>
          </div>
          <div class="gooods-item pdlr20 flex-fs">
            <div class="title">司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机</div>
            <div class="con main-color">李云 15755434564</div>
          </div>
          <div class="gooods-item pdlr20 flex-fs">
            <div class="title">司机运价</div>
            <div class="con">100元/件</div>
          </div>
          <div class="send-car-operation flex-fe">
            <div class="mini-button main-color main-bg-color row">忽略</div>
            <div class="mini-button main-color main-bg-color row">派车</div>
          </div>
        </div>
        <div class="goods-message mgt20">
          <div class="goods-address flex-sb pdlr20">
            <div class="address flex-fs "><text>车牌号: 沪A4567</text></div>
            <div class="public-time">待派车</div>
          </div>
          <div class="gooods-item pdlr20 flex-fs">
            <div class="title">司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机</div>
            <div class="con main-color">李云 15755434564</div>
          </div>
          <div class="gooods-item pdlr20 flex-fs">
            <div class="title">司机运价</div>
            <div class="con">100元/件</div>
          </div>
          <div class="send-car-operation flex-fe">
            <div class="mini-button main-color main-bg-color row">忽略</div>
            <div class="mini-button main-color main-bg-color row" @click="bindDriverCar">派车</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },
  methods: {
    bindDriverCar() {
      wx.showModal({
        title: '提示',
        content: '确认要派车吗',
        success(res) {
          if(res.confirm) {

          }else if(res.cancle) {
            
          }
        }
      })
    }
  },

  created() {}
};
</script>

<style scoped>
.container{
  background-color: #f2f2f2;
  min-height: 100vh;
}
.goods-message {
  background-color: #fff;
}
.goods-address {
  height: 100rpx;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10rpx;
}
.goods-address .public-time {
  font-size: 30rpx;
  color: #999;
}
.address {
  font-size: 32rpx;
  font-weight: 600;
}
.address-f {
  width: 200rpx;
}
.address img {
  width: 30rpx;
  height: 20rpx;
  margin: 0 10rpx;
}
.gooods-item {
  font-size: 30rpx;
}
.gooods-item .con {
  font-size: 32rpx;
}
.gooods-item .title {
  width: 200rpx;
  color: #999;
  line-height: 60rpx;
}
.send-car-msg {
  border-top: 1px solid #ccc;
  line-height: 100rpx;
  margin-top: 10rpx;
  font-size: 32rpx;
}
.send-car-operation{
  border-bottom: 1px solid #ccc;
  padding-top: 20rpx;
  padding-bottom: 20rpx;
}
.mini-button {
  width: 180rpx;
  margin-right: 20rpx;
}

</style>
