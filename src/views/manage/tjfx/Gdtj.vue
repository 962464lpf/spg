<template>
  <div class="gdtj">
    <el-row>
      <el-col :span="12"
              class="content border">
        <p class="text-center">工单总体情况统计(2020-12-1)</p>
        <p>统计维度：
          <el-button type="primary">日</el-button>
          <el-button type="success">月</el-button>
        </p>
        <div class="flex">

          <p>
            总数： 0 张
          </p>
          <el-row>
            <el-col :span="12">
              <p>
                未完成： 0 张
              </p>
              <p>
                已完成： 0 张
              </p>
            </el-col>
            <el-col :span="12">
              <p>
                已超时： 0 张
              </p>
              <p>
                已评价： 0 张
              </p>
            </el-col>
          </el-row>
        </div>

      </el-col>
      <el-col :span="12"
              class="content border">
        <p class="text-center">工单按单位展示(2020-12-1)</p>
        <ve-line :data="gdChartData"
                 :settings='chartSetting'
                 :colors="colors"
                 height='270px'></ve-line>
      </el-col>
      <el-col :span="12"
              class="content mt10 border">
        <p class="text-center ">工单分类统计(2020-12-1)</p>
        <ve-line :data="gdFlChartData"
                 :settings='chartSetting'
                 :colors="colors"
                 height='270px'></ve-line>
      </el-col>
      <el-col :span="12"
              class="content mt10 border ">
        <p class="text-center">工单完成情况统计(2020-12-1)</p>
        <el-row>
          <el-col :span="12">
            <ve-ring :data="gdWcChartData"
                     height='270px'
                     :colors="colors"
                     :settings='gdWcChartSetting'></ve-ring>
          </el-col>
          <el-col :span="12">
            <ve-ring :data="gdPjChartData"
                     height='270px'
                     :colors="colors"
                     :settings='gdWcChartSetting'></ve-ring>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
 
<script>
export default {
  name: 'vueName',
  data() {
    return {
      colors: ['#4271a2', '#5783b1', '#4a6888', '#11263c', '#6487ab', '#0c2b4a', '#04192d'],
      gdChartData: {
        columns: ['日期', '数量',],
        rows: [
          { 日期: '区域1', 数量: 0,  },
          { 日期: '区域2', 数量: 0, },
          { 日期: '区域3', 数量: 0,  },
          { 日期: '区域4', 数量: 0,  },
          { 日期: '区域5', 数量: 0,  },
          { 日期: '区域6', 数量: 0,  },
        ],
      },
      gdFlChartData: {
        columns: ['日期', '类型一', '类型二', '类型三', '类型四', ],
         rows: [
          { 日期: '区域1', 类型一: 0,  类型二: 0,类型三: 0,类型四: 0,},
          { 日期: '区域2', 类型一: 0, 类型二: 0,类型三: 0,类型四: 0,},
          { 日期: '区域3', 类型一: 0,  类型二: 0,类型三: 0,类型四: 0,},
          { 日期: '区域4', 类型一: 0,  类型二: 0,类型三: 0,类型四: 0,},
          { 日期: '区域5', 类型一: 0,  类型二: 0,类型三: 0,类型四: 0,},
          { 日期: '区域6', 类型一: 0,  类型二: 0,类型三: 0,类型四: 0,},
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
      chartSetting: {
        offsetY: 0,
      },
      gdWcChartData: {
        columns: ['项', '访问用户'],
        rows: [
          { 项: '已完成', 访问用户: 0 },
          { 项: '未完成', 访问用户: 0 },
        ],
      },
      gdPjChartData: {
        columns: ['项', '访问用户'],
        rows: [
          { 项: '已评价', 访问用户: 0 },
          { 项: '未评价', 访问用户: 0 },
        ],
      },
      gdWcChartSetting: {
        radius: [30, 40],
        offsetY: 100,
      },
    }
  },
  methods: {},
  mounted() {},
}
</script>
 
<style scoped lang = "scss">
.gdtj {
  .border {
    border: 1px solid #eee;
  }
  .flex {
    height: 174px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      height: 50px !important;
      line-height: 50px !important;
    }
  }
  .content {
    height: 250px;
    padding: 5px;
    box-sizing: border-box;
    p {
      font-size: 14px;
      line-height: 36px;
      height: 36px;
    }
  }
}
</style>