<template>
  <div>
    <div class="detail-tile">
      <strong>保冷包新旧交替中，随机出货，商品以实物为主</strong>
    </div>
    <div class="p-center detail-image">
      <img v-for="(item, index) in img" :key="index" :src="item" border="0" align="middle">
    </div>
  </div>
</template>
<script>
  import Good1 from 'image/good1.jpg';
  import Good2 from 'image/good2.jpg';
  import Good3 from 'image/good3.jpg';
  import Good4 from 'image/good4.jpg';
  export default {
    data() {
      return {
        img: [Good1, Good2, Good3, Good4]
      }
    }
  }
</script>
<style>
.detail-tile {
  line-height: 40px;
}
.detail-image {
  margin-top: 20px;
}
</style>
