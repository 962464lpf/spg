<template>
  <div>
    <div class="mt10">
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
    <el-form :inline="true" class="mt10">
      <el-form-item label="车牌号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">检索</el-button>
      </el-form-item>
    </el-form>
    <div class="fl clearfloat ">
      <el-button type="primary" @click="cahgneTable(1)">
        车辆台账
      </el-button>
      <el-button type="primary" @click="cahgneTable(2)">
        派车记录
      </el-button>
      <el-button type="primary" @click="cahgneTable(3)">
        保养记录
      </el-button>
    </div>
    <div class="fr">
      <el-button
        type="primary"
        v-if="tableIndex === 3"
        @click="byjlStatus = true"
        >保养登记</el-button
      >
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>
    </div>
    <div class="clearfloat"></div>
    <el-table
      :data="tableData"
      v-if="tableIndex === 1"
      border
      stripe
      style="width: 100%"
      class="mt10"
    >
      <el-table-column prop="num" label="车牌号"> </el-table-column>
      <el-table-column prop="zcbm" label="资产编码"> </el-table-column>
      <el-table-column prop="rllx" label="燃料类型"> </el-table-column>
      <el-table-column prop="clpp" label="车辆品牌"> </el-table-column>
      <el-table-column prop="gcrq" label="购车日期"> </el-table-column>
      <el-table-column prop="syzt" label="使用状态"> </el-table-column>
    </el-table>
    <el-table
      :data="tableData1"
      v-if="tableIndex === 2"
      border
      stripe
      style="width: 100%"
      class="mt10"
    >
      <el-table-column prop="pcsj" label="派车时间"> </el-table-column>
      <el-table-column prop="pclx" label="派车类型"> </el-table-column>
      <el-table-column prop="num" label="车牌号"> </el-table-column>
      <el-table-column prop="gdh" label="工单号"> </el-table-column>
      <el-table-column prop="qsd" label="起始地"> </el-table-column>
      <el-table-column prop="lcs" label="里程数"> </el-table-column>

      <el-table-column label="操作">
        <template>
          <el-button type="primary">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-table
      :data="tableData3"
      v-if="tableIndex === 3"
      border
      stripe
      style="width: 100%"
      class="mt10"
    >
      <el-table-column prop="pcsj" label="车牌号"> </el-table-column>
      <el-table-column prop="pcsj" label="保养时间"> </el-table-column>
      <el-table-column prop="pclx" label="保养人"> </el-table-column>
      <el-table-column prop="pclx" label="保养情况说明"> </el-table-column>
    </el-table>
    <el-dialog width="50%" title="保养登记" :visible.sync="byjlStatus">
      <el-form ref="form" label-width="120px">
        <el-form-item label="车牌号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="保养情况说明">
          <el-input type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="byjlStatus = false">取 消</el-button>
        <el-button type="primary" @click="byjlStatus = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pcjlStatus: false,
      tableIndex: 1,
      tableData: [
        {
          num: '陕A12343',
          zcbm: 'QYs-19920-232',
          rllx: '汽油',
          clpp: '东风',
          gcrq: '2014.12',
          syzt: '使用',
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
      tableData3: [],
      byjlStatus: false,
    }
  },
  methods: {
    cahgneTable(index) {
      this.tableIndex = index
    },
    goBack() {
      this.$router.go(-1)
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
