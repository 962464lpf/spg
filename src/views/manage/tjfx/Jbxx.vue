<template>
  <div class="jbxx">
    <el-row>
      <el-col :span="12">
        <p class="text-center">2020年xx供电所基本信息统计</p>
        <el-row class="border-box">
          <el-col :span="12">
            <p>供电所总数： 34</p>
          </el-col>
          <el-col :span="12">
            <p>外设营业厅总数： 54</p>
          </el-col>

          <el-col :span="12">
            <p>农电总人数： 12345个</p>
          </el-col>
          <el-col :span="12">
            <p>供电所在岗人数： 234个</p>
          </el-col>
          <el-col :span="12">
            <p>退休人数： 34个</p>
          </el-col>
          <el-col :span="12">
            <p>离职人数： 4个</p>
          </el-col>
          <el-col :span="12">
            <p>房产总数： 40</p>
          </el-col>
          <el-col :span="12">
            <p>车辆总数： 40</p>
          </el-col>
          <el-col :span="12">
            <p>计算机台数： 14</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <p class="text-center">2020年xx供电所情况</p>
        <ve-histogram :extend="extend"
        :colors="colors"
                      height='300px'
                      :data="gdsChartData"
                      :legend-visible="false"></ve-histogram>
      </el-col>
    </el-row>

    <el-row class="mt10">
      <div class="top-remove">
        <p class="text-center">2020年12月所辖区域情况</p>
      </div>
      <el-row class="h300 border">
        <el-col :span="8"
                class='flex-center'>
          <el-col :span="8">
            <p>乡镇人口</p>
            <p>54万</p>
          </el-col>
          <el-col :span="8">
            <p>乡镇面积</p>
            <p> 5万平方米</p>
          </el-col>
          <el-col :span="8">
            <p>行政村个数</p>
            <p>123个</p>
          </el-col>
        </el-col>
        <el-col :span="16">
          <ve-histogram :extend="extend"
                        height='300px'
                        :colors="colors"
                        :legend-visible='false'
                        :settings='qySetting'
                        :data="qyChartData"></ve-histogram>
        </el-col>
      </el-row>

      <el-row class=" border mt10">
        <el-col :span="6">
          <p class="text-center">2020年12月农电人员年龄结构</p>
          <p class="text-center fl"
             style="position: relative;left: 40%;">平均47.4岁</p>
          <ve-pie :data="nlChartData"
                  :settings='chartSetting'
                  :legend-visible='false'
                  height='250px'></ve-pie>
        </el-col>
        <el-col :span="6">
          <p class="text-center">2020年12月农电人员学历结构</p>

          <ve-pie :data="xlChartData" 
                  :settings='chartSetting'
                  :legend-visible='false'
                  height='250px'></ve-pie>
        </el-col>
        <el-col :span="6">
          <p class="text-center">2020年12月农电人员职称结构</p>
          <ve-pie :data="zcChartData"
                  :settings='chartSetting'
                  :legend-visible='false'
                  height='250px'></ve-pie>
        </el-col>
        <el-col :span="6">
          <p class="text-center">2020年12月农电人员技能等级结构</p>
          <ve-pie :data="jnChartData" 
                  :settings='chartSetting'
                  :legend-visible='false'
                  height='250px'></ve-pie>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
 
<script>
export default {
  name: 'vueName',
  data() {
    return {
      colors: ['#4271a2', '#5783b1', '#4a6888', '#11263c', '#6487ab', '#0c2b4a', '#04192d'],
      gdsChartData: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '区域1', 数量: 139 },
          { 日期: '区域2', 数量: 353 },
          { 日期: '区域3', 数量: 292 },
          { 日期: '区域4', 数量: 292 },
        ],
      },
      qyChartData: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '乡镇1', 数量: 1.4 },
          { 日期: '乡镇2', 数量: 3.53 },
          { 日期: '乡镇3', 数量: 2.92 },
          { 日期: '乡镇4', 数量: 2.12 },
        ],
      },
      nlChartData: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '三十五岁以下', 数量: 139 },
          { 日期: '36-45岁', 数量: 353 },
          { 日期: '46-55岁', 数量: 292 },
          { 日期: '55岁以上', 数量: 192 },
        ],
      },
      xlChartData: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '初中以下', 数量: 18 },
          { 日期: '高中', 数量: 34 },
          { 日期: '大专', 数量: 32 },
          { 日期: '本科以上', 数量: 14 },
        ],
      },
      zcChartData: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '技术员', 数量: 24 },
          { 日期: '助理工程师', 数量: 74 },
          { 日期: '高级工程师', 数量: 2 },
          { 日期: '工程师', 数量: 13 },
        ],
      },
      jnChartData: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '高级工', 数量: 80 },
          { 日期: '高级技工', 数量: 9 },
          { 日期: '技师', 数量: 11 },
        ],
      },

      extend: {
        series(v) {
          v.forEach((i) => {
            i.barWidth = 30
          })
          return v
        },
        yAxis: {
          offset: -15
        }
      },
      qySetting: {
        yAxisName: ['乡镇人口(万人)'],
      },
      chartSetting: {
        radius: 60,
        offsetY: 120,
      },
    }
  },
  methods: {},
  mounted() {},
}
</script>
 
<style  lang = "scss">
.jbxx {
  .text-center {
    text-align: center;
  }
  .border {
    border: 1px solid #eee;
    box-sizing: border-box;
  }
  .border-box {
    border: 1px solid #eee;
    padding: 5px;
    box-sizing: border-box;
    height: 235px;
  }
  p {
    line-height: 34px;
    font-size: 14px;
  }
  .position-relative {
    position: relative;
    .top-remove {
      position: absolute;
      top: -50px;
      width: 100%;
    }
  }
  .h300 {
    height: 270px;
    overflow: hidden;
    .text-center {
      text-align: center;
    }
    .flex-center {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>