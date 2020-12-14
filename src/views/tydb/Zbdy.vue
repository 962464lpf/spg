<template>
  <div class="zbdy">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="指标名称" width="160"> </el-table-column>
      <el-table-column prop="list" label="指标定义" width="160"> </el-table-column>
      <el-table-column prop="source" label="指标来源" width="160"> </el-table-column>
      <el-table-column prop="search" label="指标检索方式及计算方法"> </el-table-column>
      <el-table-column prop="bz" label="备注" width="160"> </el-table-column>
      
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: '供电所综合业务监控平台应用率',
          list: '供电所综合业务监控平台应用率=综合计算模块应用率 * 0.5 + 工单闭环率 * 0.5',
          source: '供电所综合业务监控平台',
          search: `1. 综合计算模块应用率=派工单、工作记录子模块应用情况 *0.4+ 绩效管理模块应用情况*0.6（
          派工单、工作记录子模块应用，供电所每天至少产生一条记录，有记录得满分，无记录不得分；绩效管理应用分为绩效模板的制定
          和绩效结果的次月月初执行计算两部分内容，制定供电所绩效模板为供电所根据实际情况选择绩效考核并赋予标准分，绩效
          结果执行计算为次月月初5号之前供电所通过绩效管理模块中对所内人员绩效进行执行计算，使用的满分，无使用记录
          不得分。）2.工单闭环率=月完成归档的工单数量/月派工单数量

          `,
          bz: '如供电所对指标认证存疑，请逐级上报问题，以地市公司为单位进行收集，由指标对应专责与省公司对口专责沟通统一答复。',
        },
        {
          name: '电费回收率'
        },
        {
          name: '采集下发成功率'
        },
        {
          name: '缴费APPA占比率'
        },
        {
          name: '网上报装接电率'
        },
        {
          name: '线损率'
        },
        {
          name: '采集覆盖率'
        }
        
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
