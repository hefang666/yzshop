<template>
  <div class="main-nav">
    <!--分类导航-->
    <div class="nav-classify" @mouseenter="showClassFn(true)" @mouseleave="showClassFn(false)">
      <a class="nav-classify-btn">全部商品分类</a>
      <ul v-show="showClass" class="nav-classify-lists">
        <li class="nav-classify-list">
          <img class="classify-icon" :src="DumplingIcon" />
          <div class="classify-item">
            <strong>
              <span>元祖端午季</span>
            </strong>
            <div class="f-12 mt-10">
              <a>纸质提货券</a>
              <a>端午礼盒</a>
              <a>电子提货券</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <ul class="main-nav-lists">
      <li class="main-nav-list"><router-link to="/">商城</router-link></li>
      <span class="space">|</span>
      <li class="main-nav-list"><router-link to="/tale">品牌故事</router-link></li>
      <span class="space">|</span>
      <li class="main-nav-list"><router-link to="/eden">启蒙乐园</router-link></li>
      <span class="space">|</span>
      <li class="main-nav-list"><router-link to="/contact">联系我们</router-link></li>
    </ul>
  </div>
</template>
<script>
import DumplingIcon from 'image/icon-dumpling.png'
export default {
  data() {
    return {
      DumplingIcon,
      showClass: false
    }
  },
  methods: {
    showClassFn: function(status) {
      this.showClass = status
    }
  }
}
</script>
<style lang="less">
@import "~css/common.less";
.main-nav {
  height: 40px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  width: 100%;
}

/*分类导航*/
.nav-classify {
  width: 225px;
  height: 100%;
  float: left;
  position: relative;
  cursor: pointer;
  .nav-classify-btn {
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
    display: inline-block;
    background: @redLightColor;
    line-height: 40px;
  }
}
.nav-classify-lists {
  position: absolute;
  left: 0;
  width: 225px;
  z-index: 999;
}
.nav-classify-list {
  list-style: none;
  padding: 10px 0 10px 8px;
  width: 100%;
  &:nth-child(2n-1) {
    background: @grayDarkColor;
  }
  .classify-icon {
    float: left;
  }
  .classify-item {
    width: 100%;
    height: 100%;
    padding-left: 32px;
    font-size: 14px;
    color: @grayColor;
  }
}

/*主导航*/
.main-nav-lists {
  height: 100%;
  padding-left: 225px;
  line-height: 38px;
  border-bottom: 2px solid @redLightColor;
  .main-nav-list {
    padding: 0 20px;
    display: inline-block;
  }
}

</style>
