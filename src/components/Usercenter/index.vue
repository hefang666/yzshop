<template>
  <div class="container clearfix">
    <Personnav></Personnav>
    <router-view></router-view>
  </div>
</template>

<script>
  import Personnav from './Nav'

  export default {
    components: {
      Personnav
    }
  }
</script>
