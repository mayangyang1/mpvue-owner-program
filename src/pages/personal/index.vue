<template>
  <div class="container">
      <div class="personal-message">
        <!-- <img src="" alt=""> -->
        <div class="msg">胡华凌</div>
        <div class="msg">234567890456789</div>
        <div class="msg">17866567654</div>
      </div>
      <div class="personal-list pdl20">
        <div class="personal-item flex-sb">
          <div class="title">所属公司</div>
          <div class="cont">上海融链天下有限公司</div>
        </div>
        <div class="personal-item flex-sb">
          <div class="title">部门</div>
          <div class="cont">中心总部</div>
        </div>
      </div>
      <div class="flex-sb set mgt20 pdlr20">
        <div class="title">设置</div>
        <img src="/static/images/arrow.png" alt="">
      </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'

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
  background-color: #f2f2f2;
  width: 100vw;
  height: 100vh;
  color: #454545;
  font-size: 30rpx;
}
.personal-message{
  height: 300rpx;
  padding-top: 100rpx;
  background: linear-gradient(to bottom, #f1904e, #d85b0d);
}
.personal-message .msg{
  font-size: 34rpx;
  margin-top: 20rpx;
  text-align: center;
  color: #fff;
}
.personal-list{
  background-color: #fff;
}
.personal-item{
  background-color: #fff;
  height: 100rpx;
  border-bottom: 1px solid #ccc;
  padding-right: 20rpx;
}
.personal-item:last-child{
  border-bottom: none;
}
.set{
  height: 100rpx;
  background-color: #fff;
}
.set img{
  width: 30rpx;
  height: 30rpx;
}
</style>
