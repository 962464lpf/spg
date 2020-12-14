<template>
  <div>
    <div class="mt10">
      <el-button type="primary"
                 @click="goBack">返回</el-button>
    </div>
    <el-form :inline="true"
             class="mt10">
      <el-form-item label="车牌号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">检索</el-button>
      </el-form-item>
    </el-form>
    <div class="fl clearfloat ">
      <el-button type="primary"
                 @click="pcjlStatus = !pcjlStatus">
        <span>{{ pcjlStatus ? '车辆台账': '派车记录'}}</span>
      </el-button>
    </div>
    <div class="fr">
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>
    </div>
    <div class="clearfloat"></div>
    <el-table :data="tableData"
              v-if="!pcjlStatus"
              border
              stripe
              style="width: 100%"
              class="mt10">
      <el-table-column prop="num"
                       label="车牌号"> </el-table-column>
      <el-table-column prop="type"
                       label="车辆类型"> </el-table-column>
      <el-table-column prop="nylx"
                       label="能源类型"> </el-table-column>
      <el-table-column prop="zclx"
                       label="资产类型"> </el-table-column>
      <el-table-column prop="bfnf"
                       label="车辆报废年份"> </el-table-column>
      <!-- <el-table-column prop="ziyou"
                       label="资产类型"> </el-table-column> -->

    </el-table>
    <el-table :data="tableData1"
              v-if="pcjlStatus"
              border
              stripe
              style="width: 100%"
              class="mt10">
      <el-table-column prop="pcsj"
                       label="派车时间"> </el-table-column>
      <el-table-column prop="pclx"
                       label="派车类型"> </el-table-column>
      <el-table-column prop="num"
                       label="车牌号"> </el-table-column>
      <el-table-column prop="gdh"
                       label="工单号"> </el-table-column>
      <el-table-column prop="qsd"
                       label="起始地"> </el-table-column>
      <el-table-column prop="lcs"
                       label="里程数"> </el-table-column>

      <el-table-column label="操作">
        <template>
          <el-button type="primary">查看</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pcjlStatus: false,
      tableData: [
        {
          num: '陕A12343',
          type: '卡车',
          nylx: '汽油',
          bfnf: '2025-3-12',
          ziyou: '是',
          gzsj: '2015-3.11',
          zclx: '自购',
        },
      ],
      tableData1: [
        {
          pcsj: ' 2020-12-13 11：34',
          pclx: '派工派车',
          num: '陕A12343',
          type: '卡车',
          nylx: '汽油',
          bfnf: '2025-3-12',
          ziyou: '是',
          gzsj: '2015-3.11',
          zclx: '自购',
          gdh: '2020121302',
          qsd: '党岔供电所 目的地北正庄（西）综合变（农）',
          lcs: '2km',
        },
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

<style scoped lang="scss"></style>
