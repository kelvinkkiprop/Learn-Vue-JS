<template>
  <div id="app">
    <Navbar/>

      <main class="py-4">
          <!-- Render route component -->
          <!-- <router-view></router-view> -->
            <Index/>
            <Forms/>
            <ListsAndConditionals/>
      </main>

    <Footer/>
  </div>
</template>

<script>

import Navbar from './components/inc/Navbar.vue'
import Footer from './components/inc/Footer.vue'
import Index from './components/Index.vue'
import Forms from './components/main/Forms.vue'
import ListsAndConditionals from './components/main/ListsAndConditionals.vue'




export default {
  name: 'App',
  components: {
    Navbar,Footer,Index,Forms,ListsAndConditionals
  }
}
</script>


<!-------------------------------------------------Style------------------------------------------------->
<style lang="scss">
  // Import
  @import "@/design/style.scss";

</style>
<!-------------------------------------------------./Style------------------------------------------------->
