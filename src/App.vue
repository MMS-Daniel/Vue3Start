<template>
  <div id="app">
    <Header />
    <main>
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
  #app {
    main{
      height: calc(100vh - 150px - 42px);
    }
  }
</style>

<script>
require('@/assets/css/common.scss');
import Header from '@/views/Header';
import Footer from '@/views/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data:()=>{
    return {
      
    }
  }
}
</script>