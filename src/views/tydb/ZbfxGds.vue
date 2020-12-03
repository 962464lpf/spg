<template>
  <div class="zbfx">
    <div>
      <h5 style="line-height: 50px;">凤鸣供电所
        <el-date-picker class="fr"
                        type="month"
                        v-model="value"
                        placeholder="选择月">
        </el-date-picker>
      </h5>

    </div>
    <ul>
      <li>
        <h2>98</h2>
        <p class="mt10">综合得分</p>
      </li>
      <li>
        <h2>1</h2>
        <p class="mt10">省内排名</p>
      </li>
      <li>
        <h2>1</h2>
        <p class="mt10">市内排名</p>
      </li>
      <li>
        <h2>1</h2>
        <p class="mt10">区/县排名</p>
      </li>
    </ul>
    <el-row>
      <el-col :span="6">
        <el-table :data="tableData"
                  border
                  style="width: 100%">
          <el-table-column type="index"
                           label="序号"
                           width="50">
          </el-table-column>
          <el-table-column prop="zb"
                           label="指标"></el-table-column>
          <el-table-column prop="zbz"
                           label="指标值"
                           width="50">
          </el-table-column>
          <el-table-column prop="df"
                           label="得分"
                           width="50">
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="6">
        <ve-bar :data="chartDatadf"
                height='240px' :colors='colors'
                :extend="extend"></ve-bar>
      </el-col>
      <el-col :span="6">
        <ve-bar :data="chartDatadf"
                height='240px' :colors='colors'
                :extend="extend"></ve-bar>
      </el-col>
      <el-col :span="6">
        <ve-bar :data="chartDatadf"
                height='240px' :colors='colors'
                :extend="extend"></ve-bar>
      </el-col>
    </el-row>
    <el-row class="content">
      <el-col :span="12">
        <p class='text-center mt10 mb10'>指标环装图</p>
       <ve-ring :data="ringchartData" :colors='colors'></ve-ring>
      </el-col>
      <el-col :span="12">
        <p class='text-center mt10 mb10'>历史排名曲线图</p>
        <ve-line :data="linechartData" :colors='colors'></ve-line>
      </el-col>
      
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      colors: [
        '#4271a2',
        '#5783b1',
        '#4a6888',
        '#11263c',
        '#6487ab',
        '#0c2b4a',
        '#04192d',
      ],
      tableData: [
        {
          zb: '低电压公变治理率',
          zbz: 100,
          df: 98,
        },
        {
          zb: '采集成功率',
          zbz: 100,
          df: 92,
        },
        {
          zb: '电费回收水平',
          zbz: 100,
          df: 91,
        },
      ],
      chartDatadf: {
        columns: ['日期', '综合得分'],
        rows: [
          {
            日期: '汤峪供电所',
            综合得分: 91,
          },
          {
            日期: '凤鸣供电所',
            综合得分: 98,
          },
        ],
      },
      extend: {
        series(v) {
          v.forEach((i) => {
            i.barWidth = 20
          })
          return v
        },
      },
      ringchartData: {
        columns: ['区域', '应用率'],
        rows: [
          { 区域: '低电压公变治理率', 应用率: 43 },
          { 区域: '采集成功率', 应用率: 56 },
          { 区域: '电费回收水平', 应用率: 78 },
        ],
      },
      linechartData: {
        columns: ['区域', '省排名', '市排名', '区排名'],
        rows: [
          { 区域: '1月', '省排名': 5, '市排名': 4, '区排名':3},
          { 区域: '2月', '省排名': 2, '市排名': 1, '区排名': 1 },
          { 区域: '3月', '省排名': 4, '市排名': 3, '区排名': 2 },
          { 区域: '4月', '省排名': 3, '市排名': 2, '区排名' : 2},
        ],
      },
      chartSettings: {
        yAxisType: ['percent'],
      },
    }
  },
  methods: {
    jumpTo() {
      this.$router.push('/tydb/zbfxS')
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
.zbfx {
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      height: 100px;
      background: #eee;
      width: 24.9%;
      padding: 10px;
      box-sizing: border-box;
    }
  }
}
</style>
