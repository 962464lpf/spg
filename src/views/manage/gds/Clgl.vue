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
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="fl clearfloat ">
      <el-button type="primary">派车记录</el-button>
    </div>
    <div class="fr">
      <el-button type="primary">批量导入</el-button>
      <el-button type="primary">导出</el-button>
    </div>
    <div class="clearfloat"></div>
    <el-table :data="tableData"
              border
              stripe
              style="width: 100%"
              class="mt10">
      <el-table-column prop="num"
                       label="车牌号"> </el-table-column>
      <el-table-column prop="type"
                       label="类型"> </el-table-column>
      <el-table-column prop="nylx"
                       label="能源类型"> </el-table-column>
      <el-table-column prop="gzsj"
                       label="购置时间"> </el-table-column>
      <el-table-column prop="bfnf"
                       label="报废年份"> </el-table-column>
      <!-- <el-table-column prop="ziyou"
                       label="资产类型"> </el-table-column> -->

    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          num: '陕A12343',
          type: '卡车',
          nylx: '汽油',
          bfnf: '2025-3-12',
          ziyou: '是',
          gzsj: '2015-3.11'
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
