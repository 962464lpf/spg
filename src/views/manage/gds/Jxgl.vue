<template>
  <div>
    <div>
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
