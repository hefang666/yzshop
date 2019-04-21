<template>
  <div>
    <TopNav />
    <Search />
    <MainNav />
  </div>
</template>
<script>
import TopNav from 'public/TopNav'
import Search from 'public/Search'
import MainNav from 'public/Nav'
export default {
  components: {
    TopNav,
    Search,
    MainNav
  }
}
</script>
