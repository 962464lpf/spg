<template>
  <div class="tqgl">
    <div>
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
    <div class="mt10 fr">
      <el-button type="primary">新增</el-button>
      <el-button type="primary">批量导入</el-button>
    </div>
    <div class="clearfloat"></div>
    <div class="mt10">
      <img src="../../../assets/img/tq1.jpg" alt="" />
    </div>
    <el-table :data="tableData" border style="width: 100%" class="mt10">
      <el-table-column prop="tqmc" label="台区名称"> </el-table-column>
      <el-table-column prop="tqfzr" label="台区负责人"> </el-table-column>
      <el-table-column prop="pbrl" label="配变容量"> </el-table-column>
      <el-table-column prop="10kv" label="10KV接杆"> </el-table-column>
      <el-table-column prop="dxhs" label="单相户数"> </el-table-column>
      <el-table-column prop="sxhs" label="三相户数"> </el-table-column>
      <el-table-column prop="sxhs" label="经纬度"> </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="primary">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { tqmc: '一台区', tqfzr: '小王', pbrl: '' },
        { tqmc: '二台区', tqfzr: '小王', pbrl: '' },
        { tqmc: '三台区', tqfzr: '小王', pbrl: '' },
        { tqmc: '四台区', tqfzr: '小王', pbrl: '' },
        { tqmc: '五台区', tqfzr: '小王', pbrl: '' },
      ],
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

<style scoped lang="scss">
img {
  width: 100%;
}
</style>
