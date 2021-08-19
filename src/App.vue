<template>
  <div id="app">
    <Navbar/>

      <main class="py-4">
          <!-- Render route component -->
          <!-- <router-view></router-view> -->
            <Home/>
            <Messages/>
            <About/>
            <Forms/>
            <ListsAndConditionals/>
            <InteractingWithComponents/>
            <ComponentsCommunication/>
            <AccessingData/>
      </main>

    <Footer/>
  </div>
</template>

<script>

import Navbar from './components/inc/Navbar.vue'
import Footer from './components/inc/Footer.vue'
import Home from './components/Home.vue'
import Forms from './components/main/Forms.vue'
import About from './components/main/About.vue'
import ListsAndConditionals from './components/main/ListsAndConditionals.vue'
import InteractingWithComponents from './components/main/InteractingWithComponents.vue'
import ComponentsCommunication from './components/main/ComponentsCommunication.vue'
import AccessingData from './components/main/AccessingData.vue'

import Messages from './components/inc/Messages.vue'


export default {
  name: 'App',        
  components: {
    Navbar,Footer,Home,About,Forms,ListsAndConditionals,InteractingWithComponents,ComponentsCommunication,
    AccessingData, Messages
  },
    
}
</script>


<!-------------------------------------------------Style------------------------------------------------->
<style lang="scss">
  // Import
  @import "@/design/style.scss";

</style>
<!-------------------------------------------------./Style------------------------------------------------->

