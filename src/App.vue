<template>
  <div id="app">
    <Header class="my-header"></Header>
    <component v-bind:is="contentCmp" class="center"></component>
    <!-- <Footer class="my-footer"></Footer> -->
  </div>
</template>
<script>
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Content from './components/layout/Content'
export default {
  components: {
    Content,
    Header,
    Footer,
  },
  watch: {
    // $route(val) {
    //   if (
    //     val.path === '/' ||
    //     val.path === '/register' ||
    //     val.path === '/edituser'
    //   ) {
    //     this.contentCmp = 'Login'
    //   } else {
    //     this.contentCmp = 'Content'
    //   }
    //   this.$store.commit('changeCurrentPath', val.path)
    // },
  },
  data() {
    return {
      contentCmp: 'Content',
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="scss">
#app {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  .my-header {
    height: 55px;
  }
  .center {
    position: absolute;
    width: 100%;
    top: 55px;
    bottom: 0px;
    .my-nav {
      height: 100%;
      float: left;
      overflow: auto;
    }
    .router-view {
      width: 75%;
      height: 100%;
      float: right;
      overflow: auto;
    }
  }
  .my-footer {
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0;
  }
}
</style>
