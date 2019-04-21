<template>
  <div>
    <!--顶部导航-->
    <div class="top-nav">
      <div class="top-nav-box clearfix">
        <div class="float-left">
          <span class="nav-list"><img class="img" src="../../../static/images/icon_phone.png" /><span class="nav-list-text">微商城</span></span>
          <span class="nav-list"><img class="img" src="../../../static/images/icon_sina.png" /><span class="nav-list-text">官方微博</span></span>
          <span class="nav-list"><img class="img" src="../../../static/images/icon_tw.png" /><span class="nav-list-text">台湾元祖</span></span>
        </div>
        <div class="float-right">
          <span class="nav-list-text"><a>登陆</a>/<a>注册</a></span>
          <span class="nav-list-text"><a>会员中心</a></span>
          <span class="nav-list-text"><a>购物车</a></span>
          <span class="nav-list-text"><a>帮助中心</a></span>
        </div>
      </div>
    </div>
    <div class="top-image">
      <img class="img" src="../../../static/images/topimage.jpg" />
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>

  .top-nav {
    height: 34px;
    background: #eee;
    width:100%;
    vertical-align: middle;
    text-align: center;
  }
  .top-nav-box {
    max-width: 1200px;
    font-size: 0;
    display: inline-block;
    width: 100%;
  }
  .top-nav-box {
    .nav-list {
      font-size:0;
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      margin-left: 10px;
    }
    .nav-list-text {
      font-size:12px;
      line-height:34px;
      vertical-align: middle;
    }
  }
  .float-right {
    padding-right:10px;
  }
  .float-right .nav-list-text {
    margin-left:10px;
  }
  .top-nav-box .img {
    vertical-align: middle;
  }

  .top-image {
    width: 100%;
    text-align: center;
    .img {
      width: 100%;
      height:69px;
    }
  }


</style>
