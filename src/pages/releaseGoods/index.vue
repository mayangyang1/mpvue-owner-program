<template>
  <div class="container">
    <div class="type-list">
      <div class="type-item flex-fs pdlr20">
        <div class="title">调车模式</div>
        <div class="need-operation main-color">*</div>
        <div class="operation flex-fs">
          <radio-group class="radio-group" @change="radioChange">
            <label class="radio" v-for="item in shuntingArr" :key="item.id">
              <radio :value="item.id" color="#f46d00" :checked="item.checked"/>{{item.value}}
            </label>
          </radio-group>
        </div>
      </div>
      <div class="type-item flex-fs pdlr20">
        <div class="title">客户</div>
        <div class="need-operation main-color">*</div>
        <div class="operation flex-fs">
          <input placeholder="请输入关键字" type="text">
        </div>
      </div>
      <div class="type-item flex-fs pdlr20">
        <div class="title">货源有效期</div>
        <div class="need-operation main-color">*</div>
        <div class="operation flex-fs" @click="changeTimes">
          <input disabled v-model="nowTime" type="text">
        </div>
      </div>
      <div class="type-item flex-fs pdlr20">
        <div class="title">发货地</div>
        <div class="need-operation main-color">*</div>
        <div class="operation flex-fs">
          <input placeholder="请选择发货地"  type="text">
        </div>
      </div>
      <div class="type-item flex-fs pdlr20">
        <div class="title">发货详细地址</div>
        <div class="need-operation main-color"></div>
        <div class="operation flex-fs">
          <input placeholder="请输入发货详细地址" type="text">
        </div>
      </div>
      <div class="type-item flex-fs pdlr20">
        <div class="title">收货地</div>
        <div class="need-operation main-color">*</div>
        <div class="operation flex-fs">
          <input placeholder="请选择收货地" type="text">
        </div>
      </div>
      <div class="type-item flex-fs pdlr20">
        <div class="title">收货详细地址</div>
        <div class="need-operation main-color"></div>
        <div class="operation flex-fs">
          <input placeholder="请输入收货详细地址" type="text">
        </div>
      </div>
      <div class="type-item flex-fs pdlr20">
        <div class="title">货物名称</div>
        <div class="need-operation main-color">*</div>
        <div class="operation flex-fs">
          <input placeholder="请输入货物名称" type="text">
        </div>
      </div>
      <div class="type-item flex-fs pdlr20">
        <div class="title">计量标准</div>
        <div class="need-operation main-color">*</div>
        <div class="operation flex-fs">
          <radio-group class="radio-group" @change="radioChange">
            <label class="radio" v-for="item in measurementStandardArr" :key="item.id">
              <radio :value="item.id" color="#f46d00" :checked="item.checked"/>{{item.value}}
            </label>
          </radio-group>
        </div>
      </div>
      <div class="type-item flex-fs pdlr20">
        <div class="title">货物重量</div>
        <div class="need-operation main-color"></div>
        <div class="operation flex-sb">
          <input placeholder="请输入货物重量" type="text">
          <div>吨</div>
        </div>
      </div>
      <div class="type-item flex-fs pdlr20">
        <div class="title">货物体积</div>
        <div class="need-operation main-color"></div>
        <div class="operation flex-sb">
          <input placeholder="请输入货物体积" type="text">
          <div>方</div>
        </div>
      </div>
      <div class="type-item flex-fs pdlr20">
        <div class="title">货物件数</div>
        <div class="need-operation main-color"></div>
        <div class="operation flex-sb">
          <input placeholder="请输入货物件数" type="text">
          <div>件</div>
        </div>
      </div>
      <div class="type-item flex-fs pdlr20">
        <div class="title">报价方式</div>
        <div class="need-operation main-color">*</div>
        <div class="operation flex-fs">
          <radio-group class="radio-group" @change="radioChange">
            <label class="radio" v-for="item in quotationMethodArr" :key="item.id">
              <radio :value="item.id" color="#f46d00" :checked="item.checked"/>{{item.value}}
            </label>
          </radio-group>
        </div>
      </div>
      <div class="type-item flex-fs pdlr20">
        <div class="title">运价</div>
        <div class="need-operation main-color"></div>
        <div class="operation flex-sb">
          <input placeholder="请输入运价" type="text">
          <picker id='metering' @change="bindPickerChange" :range="metering">
            <view class="picker">
              {{metering[_ind]}}
            </view>
            <img  src='/static/images/dsj.png'>
          </picker>
        </div>
      </div>
      <div class="type-item flex-fs pdlr20">
        <div class="title">联系人</div>
        <div class="need-operation main-color">*</div>
        <div class="operation flex-sb">
          <input placeholder="请输入联系人" type="text">
        </div>
      </div>
      <div class="type-item flex-fs pdlr20">
        <div class="title">联系电话</div>
        <div class="need-operation main-color">*</div>
        <div class="operation flex-sb">
          <input placeholder="请输入联系电话" type="text">
        </div>
      </div>
      <div class="type-item flex-fs pdlr20">
        <div class="title">备注</div>
        <div class="need-operation main-color"></div>
        <div class="operation flex-sb">
          <input placeholder="请输入备注" type="text">
        </div>
      </div>
    </div>
    <div class="aggrement flex-fs">
      <checkbox-group bindchange="checkboxChange">
        <label class="checkbox">
          <checkbox color="#f46d00" :checked="isAgree"/>
        </label>
      </checkbox-group>
      <div>同意</div>
      <div class="main-color" @click="bindTransportRegiest">《货物运输合同》</div>
    </div>
    <div class="common-bg">
      <div class="common-btn row main-bg-color">确认发布</div>
    </div>

    <!-- 日期选择器组件 --start -->
    <block v-if="isChoiceTime">
      <datepickers @selectDate="selectDate" :changeTime='nowTime'></datepickers>
    </block>
    <!-- 日期选择器组件 --end --> 
  </div>
</template>

<script>
import DatePickers from '@/components/datePickers';
import {formatTime} from '@/utils/index.js';
export default {
  components: {
    'datepickers': DatePickers
  },

  data () {
    return {
      shuntingArr:[
        {id:0, value: '自助调车', checked: 'true'},
        {id:1, value: '委托调车'},
      ], //调车模式数组
      measurementStandardArr: [
        {id:0, value: '吨', checked: 'true'},
        {id:1, value: '方'},
        {id:2, value: '件' },
      ], //计量标准
      quotationMethodArr: [
        {id:0, value: '一口价', checked: 'true'},
        {id:1, value: '司机报价'},
      ],
      metering: ['元/吨','元/车','元/方'],
      isAgree: false,
      isChoiceTime: false,
      nowTime: '',
      _ind: '0'
    }
  },
  methods:{
    radioChange(e){
      console.log(e);
    },
    checkboxChange() {
      this.isAgree = !this.isAgree;
    },
    changeTimes() {
      this.isChoiceTime = true;
    },
    selectDate(isChoice, _value) {
      this.isChoiceTime = isChoice;
      this.nowTime = _value;
    },
    bindTransportRegiest() {//跳转到协议页面
      wx.navigateTo({
        url: '../agreement/main'
      })
    }
  },
  created () {
    
  },
  mounted(){
    this.nowTime = formatTime(new Date());
  }
}
</script>

<style scoped>
.container{
  background-color: #fff;
  padding-bottom: 130rpx;
}
.type-item{
  height: 100rpx;
  border-bottom: 1px solid #ccc;

}
.need-operation{
  margin-right: 30rpx;
  font-size: 40rpx;
  width: 10rpx;
}
.operation{
  flex: 1;
}
.operation input{
  flex: 1;
}
.type-item .title{
  width: 220rpx;
  font-size: 32rpx;
}
.common-btn{
   border-radius: 0;
}
.aggrement{
  margin-left: 20rpx;
  margin-top: 40rpx;
}
.common-bg{
  width: 100%;
  background-color: #f2f2f2;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  height: 100rpx;
}
#metering{
  position: relative;
  width: 100rpx;
  border: 1px solid #ccc;
  height: 60rpx;
  margin-right: 10rpx;
}
#metering img{
 width:20rpx;
height:20rpx;
position:absolute;
top:25rpx;
right:5rpx;

}
</style>
