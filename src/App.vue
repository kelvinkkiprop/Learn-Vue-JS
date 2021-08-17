<template>
  <div id="app">
    <Navbar/>

    <Index/>

    <Footer/>
  </div>
</template>

<script>

import Navbar from './components/inc/Navbar.vue'
import Footer from './components/inc/Footer.vue'
import Index from './components/index.vue'


export default {
  name: 'App',
  components: {
    Navbar,Footer, Index
  }
}
</script>


<!-------------------------------------------------Style------------------------------------------------->
<style lang="scss" scoped>
  // Import
  @import "@/design/style.scss";

</style>
<!-------------------------------------------------./Style------------------------------------------------->
