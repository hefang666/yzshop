<template>
  <div class="search-module">
    <div class="search-module-cont clearfix">
      <img class="logo" :src="Login" />
      <div class="search-cont">
        <div class="search-box">
          <input class="input" type="text" />
          <a class="search-btn">搜索</a>
        </div>
        <div class="search-text"><span>热门搜索：</span> <a>MUCH蛋糕 </a> <a> 精致西点</a></div>
      </div>
      <img class="tel float-right" :src="Tel"/>
    </div>
    </div>
</template>
<script>
import Login from 'image/logo.png'
import Tel from 'image/tel.jpg'
export default {
  data() {
    return {
      Login,
      Tel
    }
  }
}
</script>
<style lang="less" scoped>
  @import "~css/common.less";
  .search-module {
    text-align: center;
  }
  .search-module-cont {
    margin-top: 20px;
    display: inline-block;
    width: 100%;
    max-width: 1200px;
  }
  .logo {
    display: inline-block;
    float: left;
  }
  .search-cont {
    display: inline-block;
    max-width: 428px;
    width: 100%;
    vertical-align: top;
    margin-top: 20px;

  }
  .search-box {
    width: 100%;
    height: 36px;
    position: relative;
    border: 2px solid @redColor;
    text-align: left;
    .input {
      height:100%;
      border:0;
      width:90%;
      max-width: 350px;
      padding-left: 20px;
      &:focus {
        outline: 0;
      }
      .tel {
        float: right;
      }
    }
    .search-btn {
      right: 0;
      height: 100%;
      line-height: 32px;
      width: 70px;
      text-align: center;
      color: #fff;
      background: @redColor;
      position: absolute;
      display: inline-block;

    }
  }
  .search-text {
    color: #ccc;
    font-size: 12px;
    margin-top: 5px;
    text-align: left;
  }

  @media (max-width: 992px) {
    .search-module {
      .tel {
        display: none;
      }
    }
  }

  @media (max-width: 748px) {
    .search-module {
      .search-cont {
        margin-top:0;
      }
      .logo{
        display: none;
      }
    }
  }

</style>
