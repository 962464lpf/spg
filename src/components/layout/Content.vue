<template>
  <div class="content">
    <el-row style="height: 100%;">
      <el-col :span="isCollapse ? 1 : 3" class="left" style="height: 100%;">
        <myNav @changeStyle="changeStyle"></myNav>
      </el-col>
      <el-col :span="!isCollapse ? 21 : 23" class="right" style="height: 100%;">
        <!-- <Breadcrumb></Breadcrumb> -->
        <router-view class="right-view"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import myHeader from './Header'
import myNav from './Nav'
import myFooter from './Footer'
export default {
  components: {
    myNav,
  },
  data() {
    return {
      isCollapse: false,
    }
  },
  methods: {
    changeStyle(type) {
      if (type === 'open') {
        this.isCollapse = true
      } else if (type === 'close') {
        this.isCollapse = false
      }
    },
  },
  mounted() {},
}
</script>

<style lang="scss">
.content {
  .right {
    overflow: auto;
  }
}
</style>
