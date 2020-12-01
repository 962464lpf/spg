<template>
  <div class="zbfx">
    <el-row class="mt10">
      <el-col :span="4">
        <el-input placeholder="输入关键字进行过滤"
                  v-model="filterText">
        </el-input>
        <el-tree class="filter-tree"
                 :data="data"
                 :colors="colors"
                 :props="defaultProps"
                 default-expand-all
                 :filter-node-method="filterNode"
                 ref="tree">
        </el-tree>
      </el-col>
      <el-col :span="20">
        <el-row>
          <el-col :span="8"
                  class="content">
            <p>两票管理</p>
            <p class="fl btn curp">每月工作票数量 10</p>
            <p class="fr btn curp">每月工作票数量 10</p>
            <p class="clearfloat"></p>
            <ve-histogram :extend="extend"
                          :data="chartData"
                          :colors="colors"
                          :legend-visible="false"
                          class="mt10"
                          :toolbox="toolbox"></ve-histogram>
          </el-col>
          <el-col :span="8"
                  class="content">
            <p>低压管理</p>
            <ve-histogram :extend="extend"
                          :data="chartData"
                          :colors="colors"
                          :legend-visible="false"
                          class="mt10"
                          :toolbox="toolbox"></ve-histogram>
          </el-col>
          <el-col :span="8"
                  class="content">
            <p>缺陷指标分析</p>
            <ve-histogram :extend="extend"
                          :data="chartData"
                          :colors="colors"
                          :legend-visible="false"
                          class="mt10"
                          :toolbox="toolbox"></ve-histogram>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="mt10">
      <el-col :span="6"
              class="content">
        <p>过载配电数</p>
        <ve-histogram :extend="extend"
                      :data="chartData"
                      :colors="colors"
                      :legend-visible="false"
                      class="mt10"
                      :toolbox="toolbox"></ve-histogram>
      </el-col>

      <el-col :span="6"
              class="content">
        <p>巡视计划完成率</p>
        <ve-histogram :extend="extend"
                      :data="chartData"
                      :colors="colors"
                      :legend-visible="false"
                      class="mt10"
                      :toolbox="toolbox"></ve-histogram>
      </el-col>
      <el-col :span="6"
              class="content">
        <p>95598抢修工单数</p>
        <ve-histogram :extend="extend"
                      :data="chartData"
                      :colors="colors"
                      :legend-visible="false"
                      class="mt10"
                      :toolbox="toolbox"></ve-histogram>
      </el-col>
      <el-col :span="6"
              class="content">
        <p>95598故障报修率</p>
        <ve-histogram :settings="extend"
                      :data="chartData"
                      :colors="colors"
                      :legend-visible="false"
                      class="mt10"
                      :toolbox="toolbox"></ve-histogram>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    },
  },
  data() {
    return {
      colors: [
        '#4271a2',
        '#5783b1',
        '#4a6888',
        '#11263c',
        '#6487ab',
        '#0c2b4a',
        '#04192d',
      ],
      data: [
        {
          id: 1,
          label: '陕西省',
          children: [
            {
              id: 4,
              label: '宝鸡市',
              children: [
                {
                  id: 9,
                  label: '眉县',
                },
                {
                  id: 10,
                  label: '岐山县',
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
      chartData: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '八月', 数量: 139 },
          { 日期: '九月', 数量: 353 },
          { 日期: '十月', 数量: 292 },
        ],
      },
      extend: {
        series(v) {
          v.forEach((i) => {
            i.barWidth = 30
          })
          return v
        },
      },
      toolbox: {
        feature: {
          magicType: { type: ['line', 'bar'] },
          saveAsImage: {},
        },
      },
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss">
.zbfx {
  .content {
    text-align: center;
    .btn {
      color: green;
    }
  }
}
</style>
