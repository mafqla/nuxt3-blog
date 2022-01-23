<template>
  <TopNavBar/>
  <el-main>
    <h1 class="animate__animated animate__bounce">An animated element</h1>
  </el-main>
  <Footer/>
</template>
<script>

import TopNavBar from "./components/TopNavBar";
import Footer from "./components/Footer";
export default {
  components: {Footer, TopNavBar}
}
</script>
<style>
@import 'element-plus/dist/index.css';
@import "animate.css";


.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}
</style>