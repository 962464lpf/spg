<template>
  <div class="zbdy">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="指标名称"> </el-table-column>
      <el-table-column prop="list" label="指标清单"> </el-table-column>
      <el-table-column prop="source" label="指标来源"> </el-table-column>
      <el-table-column prop="search" label="指标查询方式"> </el-table-column>
      <el-table-column prop="rule" label="指标计算规则"> </el-table-column>
      <el-table-column prop="dep" label="指标考核部门"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: '电费回收率',
          list: 123,
          source: '地市统计',
          search: '查询',
          rule: '标准',
          dep: '营销部',
        },
        {
          name: '线损率',
          list: 123,
          source: '地市统计',
          search: '查询',
          rule: '标准',
          dep: '营销部',
        },
      ],
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss">
.zbdy {
}
</style>
