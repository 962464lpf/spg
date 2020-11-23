<template>
  <div>
    <div>
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
    <el-table :data="tableData" border stripe style="width: 100%" class="mt10">
      <el-table-column prop="num" label="车牌号"> </el-table-column>
      <el-table-column prop="type" label="类型"> </el-table-column>
      <el-table-column prop="ziyou" label="是否自由"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{ num: '陕A12343', num: '卡车', ziyou: '是' }],
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
