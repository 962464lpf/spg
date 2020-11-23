<template>
  <div>
    <div>
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
    <el-form :inline="true">
      <el-form-item label="编号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select>
          <el-option label="类型1" value="shanghai"></el-option>
          <el-option label="类型1" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="fl clearfloat ">
      <el-button type="primary">出入库记录</el-button
      ><el-button type="primary">小号盘点</el-button>
    </div>
    <div class="fr clearfloat mt10">
      <el-button type="primary">补充入库</el-button>
      <el-button type="primary">批量导入</el-button>
      <el-button type="primary">导出</el-button>
    </div>
    <div class="clearfloat"></div>
    <el-table :data="tableData" border stripe style="width: 100%" class="mt10">
      <el-table-column prop="bh" label="编号"> </el-table-column>
      <el-table-column prop="mc" label="名称"> </el-table-column>
      <el-table-column prop="sl" label="数量"> </el-table-column>
      <el-table-column prop="gg" label="规格"> </el-table-column>
      <el-table-column prop="lx" label="类型"> </el-table-column>
      <el-table-column prop="dw" label="单位"> </el-table-column>
      <el-table-column prop="bz" label="备注"> </el-table-column>
      <el-table-column label="操作" width="220">
        <template>
          <el-button>出库</el-button>
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
      tableData: [
        {
          bh: 1,
          mc: '电线',
          gg: '米',
          syr: '小李',
          lx: '线缆',
          sl: '1000',
          dw: 'xxx供电所',
          bz: 'xxx',
        },
        {
          bh: 2,
          mc: '蝴蝶瓶',
          gg: '个',
          syr: '小李',
          lx: '备件',
          sl: 500,
          dw: 'xxx供电所',
          bz: 'xxx',
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
