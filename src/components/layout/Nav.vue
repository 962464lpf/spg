<template>
  <div class="nav">
    <div class="scaling">
      <i
        class="curp fr"
        :class="{
          'el-icon-s-fold': !isCollapse,
          'el-icon-s-unfold': isCollapse,
        }"
        @click="handleScaling"
      ></i>
    </div>
    <el-menu
      router
      style="width: 100%;"
      :default-active="defaultActive"
      :collapse="isCollapse"
      :collapse-transition="false"
      unique-opened
    >
      <template v-for="(route, index) in routes">
        <el-submenu
          :index="route.path"
          v-if="route.children && route.children.length && route.meta.title"
          :key="index"
        >
          <template
            slot="title"
            v-if="route.children && route.children.length && route.meta.title"
          >
            <i :class="route.meta.icon"></i>
            <span>{{ route.meta.title }}</span>
          </template>
          <el-menu-item-group
            v-if="route.children && route.children.length && route.meta.title"
          >
            <span v-for="todo in route.children" :key="todo.path">
              <el-menu-item :index="todo.path" v-if="todo.meta.title">{{
                todo.meta.title
              }}</el-menu-item>
            </span>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item
          :index="route.path"
          :key="route.path"
          v-else-if="!route.children && route.meta && route.meta.title"
        >
          <i :class="route.meta.icon"></i>
          <span slot="title">{{ route.meta.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import ROUTES from '../../router/routes'
export default {
  data() {
    return {
      routes: ROUTES,
      isCollapse: false,
      defaultActive: '/',
      routes: ROUTES,
      scaling: false,
    }
  },
  methods: {
    handleScaling() {
      this.isCollapse = !this.isCollapse
      this.isCollapse ? 'open' : 'close'
      let scaling = this.isCollapse ? 'open' : 'close'
      this.$emit('changeStyle', scaling)
    },
  },
  mounted() {},
}
</script>

<style lang="scss">
.nav {
  height: 100%;
  overflow: auto;
  .scaling {
    height: 30px;
    i {
      line-height: 30px;
      margin-right: 15px;
      font-size: 20px;
    }
  }
}
</style>
