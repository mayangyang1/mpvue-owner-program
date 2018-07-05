<template>
  <div class="container">
    <div class="search-bar">
      <search-bar @searchBar="searchBar"></search-bar>
    </div>
    <div class="over" v-if="isSearch" @click="bindCancleSearch"></div>
    <div class="search-condition pdb20" v-if="isSearch">
      <input type="text" v-model="goodsName" placeholder="请输入货源编号">
      <input type="text" v-model="goodsName" placeholder="请输入运单号">
      <input type="text" v-model="goodsName" placeholder="请输入车牌号">
      <input type="text" @click="bindSelectArea" v-model="fromAreaText" disabled data-types="source"  placeholder="请选择发货地">
      <input type="text" @click="bindSelectArea" v-model="toAreaText" disabled data-types="target" placeholder="请选择收货地">
      <input type="text" v-model="goodsName" disabled placeholder="请选择运单状态">
      <div class="common-btn search-btn main-bg-color row" @click="bindSearch">搜索</div>
    </div>
    <div class="order-list">
      <div class="order-item pdlr20 mgb20">
        <div class="order-address flex-sb">
          <div class="address flex-fs">
            <text>上海市 浦东新区</text>
            <img src="/static/images/big_arrow.png" mode="widthFix" alt="">
            <text>上海市 浦东新区</text>
          </div>
          <div class="order-status">运输完成</div>
        </div>
        <div class="order-message flex-sb">
          <div class="msg-left">
            <div class="message-con">运单号: 20180706Y000678</div>
            <div class="message-con">牛肉, 111<text class="main-color">元/吨</text></div>
            <div class="message-con">沪K6789&nbsp;&nbsp;&nbsp;&nbsp; 赵云</div>
          </div>
          <div class="msg-right">
            <div class="call-phone main-bg-color"><img src="/static/images/phone.png" mode="widthFix" alt=""></div>
          </div>
        </div>
      </div>
      <div class="order-item pdlr20">
        <div class="order-address flex-sb">
          <div class="address flex-fs">
            <text>上海市 浦东新区</text>
            <img src="/static/images/big_arrow.png" mode="widthFix" alt="">
            <text>上海市 浦东新区</text>
          </div>
          <div class="order-status">运输完成</div>
        </div>
        <div class="order-message flex-sb">
          <div class="msg-left">
            <div class="message-con">运单号: 20180706Y000678</div>
            <div class="message-con">牛肉, 111<text class="main-color">元/吨</text></div>
            <div class="message-con">沪K6789&nbsp;&nbsp;&nbsp;&nbsp; 赵云</div>
          </div>
          <div class="msg-right">
            <div class="call-phone main-bg-color"><img src="/static/images/phone.png" mode="widthFix" alt=""></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 城市选择器组件 --start -->
    <block v-if="addressPickerView" >
      <city-select @selectCity="selectCity"></city-select>
    </block>
    <!-- 城市选择器组件 --start -->
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import SearchBar from '@/components/search';
import CitySelect from '@/components/citySelect';
export default {
  components: {
    'search-bar': SearchBar,
    'city-select': CitySelect
  },

  data () {
    return {
      isSearch: false,
      addressPickerView: false,
      areaType: '',
      formArea: [],
      toArea: [],
      fromAreaText: '',
      toAreaText: '',
    }
  },
  methods:{
    searchBar() {
      this.isSearch = true;
    },
    bindCancleSearch() {
      this.isSearch = false;
    },
    bindSearch() {
      this.isSearch = false;
    },
    // 地址选择组件 --start
    bindSelectArea(e) {
      var that = this;
      that.areaType = e.currentTarget.dataset.types;
      that.addressPickerView = true;
    },
    selectCity(isSelect, text, provinceCode, cityCode, districtCode){
      var that = this;
      if(isSelect) { //完成选择
        if (that.areaType == 'source'){
          that.formArea = [];
          that.formArea.provinceCode = provinceCode;
          that.formArea.cityCode = cityCode;
          that.formArea.districtCode = districtCode;
          that.fromAreaText = text.substr(3);
          that.addressPickerView = false;
        } else if (that.areaType == 'target') {
          that.toArea = [];
          that.toArea.provinceCode = provinceCode;
          that.toArea.cityCode = cityCode;
          that.toArea.districtCode = districtCode;
          that.toAreaText = text.substr(3);
          that.addressPickerView = false;
        }
      }else{ //取消选择
        that.addressPickerView = false;
        delete that.formArea;
        delete that.toArea;
        delete that.goodsName;
      }
    },
    // 地址选择组件 --end
  },
  created () {
  }
}
</script>

<style scoped>
.container{
  width: 100vw;
  padding-top: 100rpx;
  min-height: 100vh;
  background-color: #f2f2f2;
  color: #454545;
}
.search-bar{
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}
.order-item{
  background-color: #fff;
  padding-bottom: 10rpx;
  margin-bottom: 20rpx;
}
.order-status{
  font-size: 28rpx;
  color: #888;
}
.order-message{
  line-height: 50rpx;
  font-size: 30rpx;
}
.address{
  height: 80rpx;
  font-size: 34rpx;
  font-weight: 600;
}
.address img{
  width: 40rpx;
  height: 20rpx;
  margin-left: 10rpx;
  margin-right: 20rpx;
}

.call-phone{
  width: 80rpx;
  height: 80rpx;
  border-radius: 50rpx;
  padding-top: 20rpx;
  padding-left: 20rpx;
}
.msg-right img{
  width: 60rpx;
  height: 60rpx;

}
.search-condition {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  background-color: #fff;
}
.search-condition input {
  height: 70rpx;
  margin: 30rpx;
  border-radius: 10rpx;
  border: 1px solid #ccc;
  padding-left: 20rpx;
}
.search-btn{
  width: 90%;
}
</style>
