<template>
  <div class="jbxx">
    <el-row class="border-box">
      <el-col :span="12">
        <p class="text-center">2020年集团农电机构人员信息</p>
        <el-row>
          <el-col :span="12">
            <p>供电所总数： 523个</p>
          </el-col>
          <el-col :span="12">
            <p>外设营业厅总数： 583个</p>
          </el-col>

          <el-col :span="12">
            <p>农电总人数： 7218个</p>
          </el-col>
          <el-col :span="12">
            <p>供电所在岗人数： 6218个</p>
          </el-col>
          <el-col :span="12">
            <p>退休人数： 218个</p>
          </el-col>
          <el-col :span="12">
            <p>离职人数： 84个</p>
          </el-col>
          <!-- <el-col :span="12">
            <p>房产总数： 40</p>
          </el-col>
          <el-col :span="12">
            <p>车辆总数： 40</p>
          </el-col>
          <el-col :span="12">
            <p>计算机台数： 14</p>
          </el-col> -->
        </el-row>
      </el-col>
      <el-col :span="12">
        <p class="text-center">2020年11月供电所情况</p>
        <ve-histogram :extend="extend"
                      :colors="colors"
                      height="250px"
                      :data="gdsChartData"
                      :settings="gdsSetting"
                      :legend-visible="false"></ve-histogram>
      </el-col>
    </el-row>

    <el-row class="mt10 border">
      <div class="top-remove">
        <p class="text-center">2020年12月所辖区域情况</p>
      </div>
      <el-row class="h300 mb10">
        <el-col :span="8"
                class="flex-center">
          <el-col :span="8">
            <p>乡镇人口</p>
            <p>54万</p>
          </el-col>
          <el-col :span="8">
            <p>乡镇面积</p>
            <p>5万平方米</p>
          </el-col>
          <el-col :span="8">
            <p>行政村个数</p>
            <p>123个</p>
          </el-col>
        </el-col>
        <el-col :span="16">
          <ve-histogram :extend="extend"
                        height="300px"
                        :colors="colors"
                        :legend-visible="false"
                        :settings="qySetting"
                        :data="qyChartData"></ve-histogram>
        </el-col>
      </el-row>
    </el-row>

    <el-row class="mt10 border">
      <div class="top-remove">
        <p class="text-center">2020年装备情况</p>
      </div>
      <el-row class="h300 mb10">
        <el-col :span="6">
          <p class="text-center">房产类别</p>
          <ve-pie :colors="colors"
                  :data="fcChartData"
                  :settings="fcChartSetting"
                  :legend-visible="false"></ve-pie>
        </el-col>
        <el-col :span="6">
          <p class="text-center">房屋使用年限</p>
          <ve-pie :colors="colors"
                  :data="nxChartData"
                  :settings="fcChartSetting"
                  :legend-visible="false"></ve-pie>
        </el-col>
        <el-col :span="6">
          <p class="text-center">车辆情况</p>
          <ve-histogram :extend="extend"
                        :colors="colors"
                        :data="clChartData"
                        :settings="   { yAxisName: ['单位：辆'],}"
                        :legend-visible="false"></ve-histogram>
        </el-col>
        <el-col :span="6">
          <p class="text-center">计算机配置情况</p>
          <ve-histogram :extend="extend"
                        :colors="colors"
                        :data="jsjChartData"
                        :settings="   { yAxisName: ['单位：台'],}"
                        :legend-visible="false"></ve-histogram>
        </el-col>
      </el-row>
    </el-row>

    <el-row class=" border mt10">
      <el-col :span="6">
        <p class="text-center">2020年12月农电人员年龄结构</p>
        <p class="text-center fl"
           style="position: relative;left: 40%;">
          平均47.4岁
        </p>
        <ve-pie :data="nlChartData"
                :settings="chartSetting"
                :legend-visible="false"
                height="250px"
                :colors="colors"
                :events="chartEvents"></ve-pie>
      </el-col>
      <el-col :span="6">
        <p class="text-center">2020年12月农电人员学历结构</p>

        <ve-pie :colors="colors"
                :data="xlChartData"
                :settings="chartSetting"
                :legend-visible="false"
                height="250px"></ve-pie>
      </el-col>
      <el-col :span="6">
        <p class="text-center">2020年12月农电人员职称结构</p>
        <ve-pie :colors="colors"
                :data="zcChartData"
                :settings="chartSetting"
                :legend-visible="false"
                height="250px"></ve-pie>
      </el-col>
      <el-col :span="6">
        <p class="text-center">2020年12月农电人员技能等级结构</p>
        <ve-pie :colors="colors"
                :data="jnChartData"
                :settings="chartSetting"
                :legend-visible="false"
                height="250px"></ve-pie>
      </el-col>
    </el-row>
    <el-dialog title="55岁以上人员分布情况"
               :visible.sync="dialogVisible"
               width="50%">
      <ve-histogram :extend="extend"
                        :colors="colors"
                        :data="clChartData"
                        height="250px"
                        :settings="{ yAxisName: ['单位：人'],}"
                        :legend-visible="false"></ve-histogram>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'vueName',
  data() {
    var self = this
    this.chartEvents = {
      click() {
        self.dialogVisible = true
      },
    }
    return {
      // chartEvents: {
      //   click() {
      //     this.dialogVisible = true
      //   },
      // },
      dialogVisible: false,
      colors: [
        '#0b3a8a',
        '#1767ac',
        '#5480bd',
        '#88a0ce',
        '#b7c5e2',
        '#e7e9f5',
      ],
      gdsChartData: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '西安', 数量: 139 },
          { 日期: '咸阳', 数量: 353 },
          { 日期: '宝鸡', 数量: 292 },
          { 日期: '渭南', 数量: 292 },
        ],
      },
      jsjChartData: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '西安', 数量: 190 },
          { 日期: '咸阳', 数量: 201 },
          { 日期: '宝鸡', 数量: 158 },
          { 日期: '渭南', 数量: 163 },
        ],
      },
      qyChartData: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '西安', 数量: 1.4 },
          { 日期: '咸阳', 数量: 3.53 },
          { 日期: '宝鸡', 数量: 2.92 },
          { 日期: '渭南', 数量: 2.12 },
          { 日期: '汉中', 数量: 2.12 },
        ],
      },
      clChartData: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '西安', 数量: 124 },
          { 日期: '咸阳', 数量: 110 },
          { 日期: '宝鸡', 数量: 98 },
          { 日期: '渭南', 数量: 87 },
        ],
      },
      fcChartData: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '租用', 数量: 139 },
          { 日期: '自有产权', 数量: 353 },
        ],
      },
      nxChartData: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '5年内', 数量: 139 },
          { 日期: '5-15年', 数量: 353 },
          { 日期: '15-25年', 数量: 353 },
          { 日期: '25年以上', 数量: 353 },
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
        // yAxis: {
        //   offset: -15,
        // },
      },
      gdsSetting: { yAxisName: ['个'] },
      qySetting: {
        yAxisName: [' ，       乡镇人口(万人)'],
      },
      chartSetting: {
        radius: 60,
        offsetY: 120,
      },
      fcChartSetting: {
        radius: 80,
        offsetY: 100,
      },
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="scss">
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
