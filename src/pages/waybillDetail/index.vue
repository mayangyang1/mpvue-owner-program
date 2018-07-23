<template>
  <div class="container">
    <div class="content-list pdlr20">
      <div class="content-item flex-fs">
        <div class="title">货源编号</div>
        <div class="content main-color">20180709Y000410</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">运单号</div>
        <div class="content main-color">20180709Y000410</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">车牌号</div>
        <div class="content main-color">沪A2345</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">司机</div>
        <div class="content main-color">王思</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">手机号</div>
        <div class="content main-color">14567890</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">货物名称</div>
        <div class="content">火龙果</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">运单状态</div>
        <div class="content">运输完成</div>
      </div>
      <div class="content-item flex-fs bdb">
        <div class="title">派车时间</div>
        <div class="content">2018-07-09 11:23:23</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">发货单位</div>
        <div class="content">上海市融链天下</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">发货地</div>
        <div class="content">上海市浦东新区</div>
      </div>
      <div class="content-item flex-fs bdb">
        <div class="title">发货地址</div>
        <div class="content">浦东新区桃林路777</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">收货单位</div>
        <div class="content">范儿科技有限公司</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">收货地</div>
        <div class="content">上海市浦东新区</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">收货地址</div>
        <div class="content">上海市浦东新区桃林路777</div>
      </div>
      <div class="content-item flex-fs bdb">
        <div class="title">司机运价</div>
        <div class="content main-color">888元/吨</div>
      </div>
      <div class="content-item flex-fs">
        <div class="title">备注</div>
        <div class="content marking pdb20">这是条备注这是条备注这是条备注这是条备注这是条备注这是条备注这是条备注</div>
      </div>
    </div>
      
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
.bdb{
  border-bottom: 1px solid #ccc;
  margin-bottom: 20rpx;
  padding-bottom: 10rpx;
}
.marking{
  line-height: 50rpx;
}
</style>
