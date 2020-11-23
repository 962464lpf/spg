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
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- <div class="fl clearfloat ">
      <el-button type="primary">出入记录</el-button>
    </div> -->
    <div class="fr">
      <el-button type="primary">批量导入</el-button>
      <el-button type="primary">导出</el-button>
    </div>
    <div class="clearfloat"></div>
    <el-table :data="tableData" border stripe style="width: 100%" class="mt10">
      <el-table-column prop="num" label="车牌号"> </el-table-column>
      <el-table-column prop="type" label="类型"> </el-table-column>
      <el-table-column prop="ziyou" label="是否自由"> </el-table-column>
      <el-table-column label="操作" width="160">
        <template>
          <el-button>修改</el-button>
          <el-button>删除</el-button>
        </template>
      </el-table-column>
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
