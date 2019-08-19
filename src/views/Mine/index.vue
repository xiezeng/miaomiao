<template>
  <div id="main">
    <Header title="haha" />
 <div id="content">
      <Login />
    </div> 
    <Footer /> 
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Login  from "@/components/Login"
export default {
  name: "Mine",
  components: {
    Header,
    Footer,
    Login
  }
};
</script>

<style lang="scss"  scoped>
</style>