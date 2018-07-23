<template>
  <div class="container">
    <div class="content-list pdlr20">
      <div class="content-item flex-fs">
        <div class="title">货源编号</div>
        <div class="content main-color">20180709Y000410</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">货源有效期</div>
        <div class="content ">2018-07-10 11:18:09</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">状态</div>
        <div class="content ">发布中</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">计量标准</div>
        <div class="content">吨</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">发货地</div>
        <div class="content">上海市浦东新区</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">发货地址</div>
        <div class="content ">浦东新区桃林路7777</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">收货地</div>
        <div class="content ">上海市浦东新区</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">收货地址</div>
        <div class="content ">浦东新区桃林路7777</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">货物名称</div>
        <div class="content ">火龙果</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">货物重量</div>
        <div class="content ">12吨</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">货物体积</div>
        <div class="content ">12方</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">货物数量</div>
        <div class="content ">12件</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">报价方式</div>
        <div class="content main-color">一口价</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">运价</div>
        <div class="content ">888元/吨</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">联系人</div>
        <div class="content ">胡华锋</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">联系电话</div>
        <div class="content main-color">17621551677</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">发布时间</div>
        <div class="content ">2108-7-9 12:16:12</div>
      </div>
      <div class="content-item flex-fs bdb">
        <div class="title">备注</div>
        <div class="content ">注意防压防水</div>
      </div>
    </div>
    <div class="driver-detail">
      <div>已有1人接货</div>
      <div>已派: 1 &nbsp;&nbsp;&nbsp; 待派:0</div>
    </div>
    <div class=" common-btn row main-bg-color" @click="bindSendCar">去派车</div>
    <div class="over-p main-color main-bg-color" @click="overToPublish">结束发布</div>
  </div>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
    }
  },
  methods: {
    bindSendCar() { //去派车页面
      wx.navigateTo({
        url: '../sendCar/main'
      })
    },
    overToPublish() {
      wx.showModal({
        title:'提示',
        content: '你确定要结束发布货源吗',
        success: function(res) {
          if(res.confirm) {

          }else if(res.cancel) {

          }
        }
      })
    }
  },

  created () {
    
  }
}
</script>

<style scoped>
.container{
  padding-top: 20rpx;
  background-color: #f2f2f2;
  padding-bottom: 20rpx;
  min-height: 100vh;
}
.content-list{
  background-color: #fff;
}
.content-item{
  line-height: 70rpx;
  background-color: #fff;
}
.content-item .title{
  color: #999;
  width: 200rpx;
  font-size: 30rpx;
}
.content-item .content{
  font-size: 32rpx;
  flex: 1;
}
.driver-detail{
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  padding: 0 20rpx;
  line-height: 70rpx;
  font-size: 32rpx;
}
.common-btn{
  width: 96vw;
  margin-top: 20rpx;
}
.over-p{
  position: fixed;
  top: 30rpx;
  right: 20rpx;
  border-radius: 50%;
  padding: 20rpx 15rpx;
  box-shadow: 5rpx 5rpx 5rpx #ccc;
}
</style>
