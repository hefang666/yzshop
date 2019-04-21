<template>
  <div class="container">
    <div class="title">活动精选</div>
    <ul class="choose-lists clearfix">
      <li class="choose-list" v-for="(list, index) in lists" :key="index">
        <a class="choose-content">
          <img :src="list"/>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import Love from 'image/love.jpg'
export default {
  data() {
    return {
      lists: [Love,Love, Love ]
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  margin-top: 20px;
  .title {
    font-size: 16px;
    line-height:40px;
  }
}
.choose-list {
  width: 33.3%;
  float: left;
  text-align: center;
  &:nth-child(3n-2) {
    text-align: left;
  }
  &:nth-child(3n) {
    text-align: right;
  }
  .choose-content {
    max-width: 375px;
    display: inline-block;
    img {
      width: 100%;
    }
  }
}
</style>
