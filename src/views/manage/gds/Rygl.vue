<template>
  <div>
    <div>
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
    <el-table :data="tableData" border stripe style="width: 100%" class="mt10">
      <el-table-column prop="nam" label="姓名"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="zhicheng" label="职称"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return { tableData: [{ name: '张小虎', age: 35, zhicheng: '技术工' }] }
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
