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
      <el-table-column prop="zcbm"
                       label="资产编码"> </el-table-column>
      <el-table-column prop="rllx"
                       label="燃料类型"> </el-table-column>
      <el-table-column prop="clpp"
                       label="车辆品牌"> </el-table-column>
      <el-table-column prop="gcrq"
                       label="购车日期"> </el-table-column>
      <el-table-column prop="syzt"
                       label="使用状态"> </el-table-column>

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
          zcbm: 'QYs-19920-232',
          rllx: '汽油',
          clpp: '东风',
          gcrq: '2014.12',
          syzt: '使用'
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
