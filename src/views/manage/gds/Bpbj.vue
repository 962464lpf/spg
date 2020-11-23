<template>
  <div>
    <div>
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
    <el-table :data="tableData" border stripe style="width: 100%" class="mt10">
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="num" label="数量"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{ name: '安全帽', num: '25' }],
    }
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
