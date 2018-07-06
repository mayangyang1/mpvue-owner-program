<template>
  <div class="container">
    <div class="search-bar">
      <search-bar @searchBar="searchBar"></search-bar>
    </div>
    <div class="over" v-if="isSearch" @click="bindCancleSearch"></div>
    <div class="search-condition pdb20" v-if="isSearch">
      <input type="text" v-model="goodsName" placeholder="请输入货源编号">
      <input type="text" @click="bindSelectArea" v-model="fromAreaText" disabled data-types="source"  placeholder="请选择发货地">
      <input type="text" @click="bindSelectArea" v-model="toAreaText" disabled data-types="target" placeholder="请选择收货地">
      <div class="common-btn search-btn main-bg-color row" @click="bindSearch">搜索</div>
    </div>
    <div class="goods-list">
      <div class="goods-item mgt20 pdb20">
        <div class="goods-header pdlr20 flex-sb">
          <div class="number">货源编号: 20180705Y000567</div>
          <div class="update-time">2018-07-05 12:22</div>
        </div>
        <div class="goods-message pdlr20">
          <div class="address flex-fs"><text>上海市 浦东新区</text><img mode="widthFix" src="/static/images/big_arrow.png" alt=""> <text>上海市 浦东新区</text></div>
          <div class="item flex-fs">
            <div class="item-name">货&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;品</div>
            <div class="item-value">牛肉</div>
          </div>
          <div class="item flex-fs">
            <div class="item-name">司机运价</div>
            <div class="item-value main-color">司机报价</div>
          </div>
        </div>
        <div class="send-car flex-sb pdlr20">
          <div class="con">
            <div class="have-car">已有 1 人接货</div>
            <div class="need-car">已派:1 &nbsp; 待派:0</div>
          </div>
          <div class="mini-button row main-bg-color">去派车</div>
        </div>
      </div>
      <div class="goods-item mgt20 pdb20">
        <div class="goods-header pdlr20 flex-sb">
          <div class="number">货源编号: 20180705Y000567</div>
          <div class="update-time">2018-07-05 12:22</div>
        </div>
        <div class="goods-message pdlr20">
          <div class="address flex-fs"><text>上海市 浦东新区</text><img mode="widthFix" src="/static/images/big_arrow.png" alt=""> <text>上海市 浦东新区</text></div>
          <div class="item flex-fs">
            <div class="item-name">货&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;品</div>
            <div class="item-value">牛肉</div>
          </div>
          <div class="item flex-fs">
            <div class="item-name">司机运价</div>
            <div class="item-value main-color">司机报价</div>
          </div>
        </div>
        <div class="send-car flex-sb pdlr20">
          <div class="con">
            <div class="have-car">已有 1 人接货</div>
            <div class="need-car">已派:1 &nbsp; 待派:0</div>
          </div>
          <div class="mini-button row main-bg-color">去派车</div>
        </div>
      </div>
       <div class="goods-item mgt20 pdb20">
        <div class="goods-header pdlr20 flex-sb">
          <div class="number">货源编号: 20180705Y000567</div>
          <div class="update-time">2018-07-05 12:22</div>
        </div>
        <div class="goods-message pdlr20">
          <div class="address flex-fs"><text>上海市 浦东新区</text><img mode="widthFix" src="/static/images/big_arrow.png" alt=""> <text>上海市 浦东新区</text></div>
          <div class="item flex-fs">
            <div class="item-name">货&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;品</div>
            <div class="item-value">牛肉</div>
          </div>
          <div class="item flex-fs">
            <div class="item-name">司机运价</div>
            <div class="item-value main-color">司机报价</div>
          </div>
        </div>
        <div class="send-car flex-sb pdlr20">
          <div class="con">
            <div class="have-car">已有 1 人接货</div>
            <div class="need-car">已派:1 &nbsp; 待派:0</div>
          </div>
          <div class="mini-button row main-bg-color">去派车</div>
        </div>
      </div>
    </div>
    <div class="common-btn release-btn row main-bg-color" @click="releaseGoods">发布货源</div>
    <!-- 城市选择器组件 --start -->
    <block v-if="addressPickerView" >
      <city-select @selectCity="selectCity"></city-select>
    </block>
    <!-- 城市选择器组件 --start -->
  </div>
</template>

<script>
import SearchBar from '@/components/search';
import CitySelect from '@/components/citySelect';
export default {
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

  components: {
    'search-bar': SearchBar,
    'city-select': CitySelect
  },

  methods: {
    bindSearch() {
      this.isSearch = false;
    },
    searchBar() {
      this.isSearch = true;
    },
    releaseGoods() {
      wx.navigateTo({
        url:'../releaseGoods/main'
      })
    },
    bindCancleSearch() {
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
  padding-top: 100rpx;
  min-height: 100vh;

}
.search-bar{
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}
.goods-list{
  padding-bottom: 100rpx;
}
.goods-item{
  background-color: #fff;
}
.goods-header{
  height: 100rpx;
  border-bottom: 1px solid #ccc;
}
.goods-header .number{
  font-size: 34rpx;
  font-weight: 600;
}
.goods-heade .update-time{
  color: #999;
  font-size: 28rpx;
}
.goods-message{
  padding-top: 20rpx;
  line-height: 60rpx;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20rpx;
}
.goods-message .address{
  font-size: 32rpx;
  color: #888;
  font-weight: 600;
}
.address img{
  width: 40rpx;
  height: 20rpx;
  margin-left: 10rpx;
  margin-right: 20rpx;
}
.item .item-name{
  width: 180rpx;
  color: #e5e5e5;
  font-size: 30rpx;
}
.item .item-value{
  font-size: 32rpx;
}
.send-car{
  padding-top: 10rpx;
  font-size: 32rpx;
}
.send-car .have-car{
  margin-bottom: 30rpx;
}
.mini-button{
  width: 150rpx;
}
.release-btn{
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 0;
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
