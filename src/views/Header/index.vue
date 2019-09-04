<template>
  <header id="header">
    <nav>
      <router-link to="/" replace>首页</router-link>
      <router-link to="/about" replace>关于我们</router-link>
    </nav>
    
  </header>
</template>


<style lang="scss" >
#header{
  nav{
    height: 40px;
    line-height: 40px;
    background: #fff;
    border-bottom: 1px solid #eaeaea;
    a{
      display: inline-block;
      margin: 0 15px;
    }
  }
}
</style>