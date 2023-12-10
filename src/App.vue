<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <Navbar @on-export="exportPDF" />
  <router-view/>
</template>
<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  },
  data(){
    return {}
  },
  computed:{

  },
  methods:{
    
  }
}
</script>
