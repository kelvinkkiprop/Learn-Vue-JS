
<!-------------------------------------------------Template------------------------------------------------->
<template>
  <div>
     <div id="app">

        <Navbar/>

        <main class="py-4">
            <!-- Render route component -->
            <router-view/>
        </main>

      </div>
      
    <Footer/>

  </div>

</template>
<!-------------------------------------------------./Template------------------------------------------------->


<script>

import Navbar from './components/inc/Navbar.vue'
import Footer from './components/inc/Footer.vue'

export default {
  name: 'App',        
  components: {
    Navbar,Footer
  },
    
}
</script>


<!-------------------------------------------------Style------------------------------------------------->
<style lang="scss">
  // Import
  @import "@/design/style.scss";
</style>
<!-------------------------------------------------./Style------------------------------------------------->