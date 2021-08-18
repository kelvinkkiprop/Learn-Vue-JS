<template>
  <div id="app">
    <Navbar/>

      <main class="py-4">
          <!-- Render route component -->
          <router-view></router-view>
              <Index/>
              <CreateProfile/>
      </main>

    <Footer/>
  </div>
</template>

<script>

import Navbar from './components/inc/Navbar.vue'
import Footer from './components/inc/Footer.vue'
import Index from './components/Index.vue'
import CreateProfile from './components/profile/Create.vue'


export default {
  name: 'App',
  components: {
    Navbar,Footer,Index,CreateProfile
  }
}
</script>


<!-------------------------------------------------Style------------------------------------------------->
<style lang="scss">
  // Import
  @import "@/design/style.scss";

</style>
<!-------------------------------------------------./Style------------------------------------------------->
