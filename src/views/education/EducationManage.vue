<template>
  <div class="education-manage">
    <el-row>
      <el-button type="primary">未完成考试</el-button>
      <el-button type="primary" @click="jump">已完成考试</el-button>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="考试名称"> </el-table-column>
      <el-table-column prop="time" label="开始时间"> </el-table-column>
      <el-table-column prop="status" label="结束时间"> </el-table-column>
      <el-table-column prop="status" label="主办单位"> </el-table-column>
      <el-table-column prop="status" label="允许补考次数"> </el-table-column>
      <el-table-column label="操作" width="220">
        <!-- <template slot-scope="">
          <b class="mr10">删除</b>
          <el-button type="primary" @click="sjmxStatus = true">明细</el-button>
        </template> -->
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    }
  },
  methods: {
    jump() {
      this.$router.push('/jpgl/ywc')
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
