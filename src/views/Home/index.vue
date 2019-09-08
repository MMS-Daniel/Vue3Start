<template>
  <div class="home">
    <img :src="Img_logo" alt="Vue logo" />
    <Welcome msg="Welcome"/>
    <h2>{{this.$store.state.name}}</h2>
    
  </div>
</template>

<style lang="scss">
  .home{
    text-align: center;
  }
</style>


<script>
// @ is an alias to /src

import Welcome from '@/components/Welcome/index';
import Img_logo from '@/assets/img/logo.png';

import Api from '@/api';
export default {
  name: 'home',
  components: {
    Welcome
  },
  data:()=>{
    return {
      Img_logo
    }
  },
  created: function () {
      Api.user.AuthUrl({
          params:{
              url:location.href
          }
      }).then((res)=>{
          Api.user.Auth({
              params:{
                  code:res.data
              }
          });
      });
  }
}

</script>
