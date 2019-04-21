<template>
  <div class="banner-container">
    <div class="banner-carousel">
      <el-carousel height="438px">
        <el-carousel-item v-for="(item, index) in images" :key="index">
          <img :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
  import Banner from 'image/banner1.jpg'
  import Banner1 from 'image/banner2.jpg'
  import Banner2 from 'image/banner3.jpg'
  import Banner3 from 'image/banner4.jpg'
  import Banner4 from 'image/banner5.jpg'
export default {
  data() {
    return {
      images: [Banner, Banner1, Banner2, Banner3, Banner4]
    }
  }
}
</script>
<style>
.banner-carousel {
  width: 100%;
  max-width:1200px;
  margin: 0 auto;
}
</style>
