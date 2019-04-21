<template>
  <div>
    <div class="goods-lists-box">
      <div class="goods-title">
        <img src="../images/icon-box.png" />
        <span>元祖礼盒</span>
      </div>
      <div class="clearfix">
        <ul class="goods-lists">
          <li class="good-list">
            <a>
              <img :src="Goods"/>
              <strong class="text-overflow">麻糬枣泥味 </strong>
              <span class="text-overflow"> Q糯的外表下，很有内涵。</span>
              <em>¥10.00 </em>
            </a>
          </li>
          <li class="good-list">
            <a>
              <img :src="Goods"/>
              <strong class="text-overflow">麻糬枣泥味 </strong>
              <span class="text-overflow"> Q糯的外表下，很有内涵。</span>
              <em>¥10.00 </em>
            </a>
          </li>
          <li class="good-list">
            <a>
              <img :src="Goods"/>
              <strong class="text-overflow">麻糬枣泥味 </strong>
              <span class="text-overflow"> Q糯的外表下，很有内涵。</span>
              <em>¥10.00 </em>
            </a>
          </li>
        </ul>
        <div class="avtivity-cover float-left">
          <img :src="ActivityCover" />
        </div>
      </div>
    </div>
    <div class="goods-lists-box">
      <div class="goods-title">
        <img src="../images/icon-box.png" />
        <span>元祖礼盒</span>
      </div>
      <div class="clearfix">
        <ul class="goods-lists">
          <li class="good-list">
            <a>
              <img :src="Goods"/>
              <strong class="text-overflow">麻糬枣泥味 </strong>
              <span class="text-overflow"> Q糯的外表下，很有内涵。</span>
              <em>¥10.00 </em>
            </a>
          </li>
          <li class="good-list">
            <a>
              <img :src="Goods"/>
              <strong class="text-overflow">麻糬枣泥味 </strong>
              <span class="text-overflow"> Q糯的外表下，很有内涵。</span>
              <em>¥10.00 </em>
            </a>
          </li>
          <li class="good-list">
            <a>
              <img :src="Goods"/>
              <strong class="text-overflow">麻糬枣泥味 </strong>
              <span class="text-overflow"> Q糯的外表下，很有内涵。</span>
              <em>¥10.00 </em>
            </a>
          </li>
        </ul>
        <div class="avtivity-cover float-left">
          <img :src="ActivityCover" />
        </div>
      </div>
    </div>
    <div class="goods-lists-box">
      <div class="goods-title">
        <img src="../images/icon-box.png" />
        <span>元祖礼盒</span>
      </div>
      <div class="clearfix">
        <ul class="goods-lists">
          <li class="good-list">
            <a>
              <img :src="Goods"/>
              <strong class="text-overflow">麻糬枣泥味 </strong>
              <span class="text-overflow"> Q糯的外表下，很有内涵。</span>
              <em>¥10.00 </em>
            </a>
          </li>
          <li class="good-list">
            <a>
              <img :src="Goods"/>
              <strong class="text-overflow">麻糬枣泥味 </strong>
              <span class="text-overflow"> Q糯的外表下，很有内涵。</span>
              <em>¥10.00 </em>
            </a>
          </li>
          <li class="good-list">
            <a>
              <img :src="Goods"/>
              <strong class="text-overflow">麻糬枣泥味 </strong>
              <span class="text-overflow"> Q糯的外表下，很有内涵。</span>
              <em>¥10.00 </em>
            </a>
          </li>
        </ul>
        <div class="avtivity-cover float-left">
          <img :src="ActivityCover" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ActivityCover from 'image/activity-cover.jpg'
import Goods from 'image/goods.jpg'
export default {
  data() {
    return {
      ActivityCover,
      Goods
    }
  }
}
</script>
<style lang="less">
@import "~css/common.less";
.goods-lists-box {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
}
.goods-title {
  width: 100%;
  border-bottom: 2px solid @redColor;
  height: 40px;
  line-height: 40px;
  vertical-align: middle;

  img {
    vertical-align: middle;
  }
  span {
    vertical-align: middle;
  }
}

.goods-lists {
  width: 908px;
  float: right;
  .good-list {
    width: 33.333%;
    text-align: center;
    float: left;
    padding: 0 40px;
    position: relative;
    padding-bottom: 20px;
    &:hover {
      top: -10px;
      -webkit-box-shadow: 0 0 5px 0 #ccc ;
      -moz-box-shadow: 0 0 5px 0 #ccc;
      box-shadow: 0 0 5px 0 #ccc;
      background: #fff;
    }
    img {
      max-width: 100%;
      width: 180px;
      margin-top:30px;
    }
    span {
      display: block;
      font-size: 14px;
      margin: 5px 0;
    }
    em {
      font-style: normal;
    }
  }
}




</style>
