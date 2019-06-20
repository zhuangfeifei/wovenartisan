<template>
  <div id="errors">
      <section v-if="error.statusCode==404">
        <img src="~/static/images/about/404.gif" alt="" srcset="">
        <!-- <h2>页面不存在</h2> -->
      </section>
      <h2 v-else>500服务器错误</h2>
      <h3><nuxt-link to="/">返回首页</nuxt-link></h3>
  </div>
</template>
 
<script>
export default {
  props:['error'],
}
</script>
<style lang="less" scoped>
#errors{
  width: 100%; height: 100%; padding-top: 200px; text-align: center;
  section{
    width: 100%; margin: 0 auto; text-align: center;
  }
  a{color: black; text-decoration: underline;}
}
</style>
