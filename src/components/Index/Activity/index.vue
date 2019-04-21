<template>
  <div class="goods-activity-box">
    <div class="goods-activity clearfix">
      <!--活动列表-->
      <div class="goods-activity-lists-box">
        <ul class="goods-activity-lists clearfix">
          <li class="goods-activity-list active">元祖新品</li>
          <li class="goods-activity-list">热销推荐</li>
          <li class="goods-activity-list">节庆民俗</li>
          <li class="goods-activity-list">元祖卡券</li>
        </ul>
        <div class="">
          <ul class="goods-activity-info-lists active clearfix">
            <li class="goods-activity-info-list">
              <div class="goods-list">
                <img class="goods-image" :src="Activity1" />
                <div class="goods-describe">
                  <div class="goods-title">纤云弄巧鲜奶蛋糕（迷情蓝莓58号)</div>
                  <div class="goods-price text-main">¥258.00</div>
                </div>
              </div>
            </li>

            <li class="goods-activity-info-list">
              <div class="goods-list">
                <img class="goods-image" :src="Activity1" />
                <div class="goods-describe">
                  <div class="goods-title">纤云弄巧鲜奶蛋糕（迷情蓝莓58号)</div>
                  <div class="goods-price text-main">¥258.00</div>
                </div>
              </div>
            </li>
            <li class="goods-activity-info-list">
              <div class="goods-list">
                <img class="goods-image" :src="Activity1" />
                <div class="goods-describe">
                  <div class="goods-title">纤云弄巧鲜奶蛋糕（迷情蓝莓58号)</div>
                  <div class="goods-price text-main">¥258.00</div>
                </div>
              </div>
            </li>
            <li class="goods-activity-info-list">
              <div class="goods-list">
                <img class="goods-image" :src="Activity1" />
                <div class="goods-describe">
                  <div class="goods-title">纤云弄巧鲜奶蛋糕（迷情蓝莓58号)</div>
                  <div class="goods-price text-main">¥258.00</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--活动广告-->
      <div class="avtivity-cover float-right">
        <img :src="ActivityCover" />
      </div>
    </div>
  </div>
</template>
<script>
import Activity1 from 'image/activity1.jpg'
import Activity2 from 'image/activity2.jpg'
import Activity3 from 'image/activity3.jpg'
import Activity4 from 'image/activity4.jpg'
import ActivityCover from 'image/activity-cover.jpg'
export default {
  data() {
    return {
      Activity1,
      Activity2,
      Activity3,
      Activity4,
      ActivityCover
    }
  }
}
</script>
<style lang="less">
@import "~css/common.less";
.goods-activity-box {
  margin-top: 30px;
}
.goods-activity {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.goods-activity-lists-box {
  width: 908px;
  float: left;
}
.goods-activity-list {
  width: 25%;
  height: 40px;
  float: left;
  line-height: 40px;
  text-align: center;
  border-bottom: 2px solid @blackColor;
  &:hover {
    color: @redLightColor;
    border-color: @redLightColor;
  }
  &.active {
    border-color: @redLightColor;
  }
}

.goods-activity-info-lists {
  width: 100%;
  display: none;
  margin-top:20px;
  &.active {
    display: block;
  }
  .goods-activity-info-list {
    width: 25%;
    padding: 0 5px;
    float: left;
    .goods-list {
      width: 100%;
      padding: 13px 18px 0;
      border: 1px solid @grayDarkColor;
      &:hover {
        border-color: @grayBlackColor;
      }
      .goods-image {
        width: 100%;
      }
      .goods-describe {
        text-align: center;
        color: @darkColor;
        font-size:  14px;
        line-height: 22px;
      }
      .goods-title {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
      }
      .goods-price {
        font-size: 16px;
      }
    }
  }
}

@media (max-width: 1200px) {
  .avtivity-cover {
    display: none;
  }
  .goods-activity-lists-box {
    width: 100%;
  }
}

</style>
