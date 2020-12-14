<template>
  <div class="gdtj">
    <el-row>
      <el-col :span="12" class="content border">
        <p class="text-center">工单总体情况统计(2020-12-1)</p>
        <p>
          统计维度：
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
      <el-col :span="12" class="content border">
        <p class="text-center">工单按台区展示(2020-12-1)</p>
        <ve-line
          :data="gdChartData"
          :settings="chartSetting"
          :colors="colors"
          height="270px"
          v-if="gdsDataStatus"
        ></ve-line>
        <ve-line
        v-else
          :data="gdChartDatagds"
          :settings="chartSetting"
          :colors="colors"
          height="270px"
        ></ve-line>
      </el-col>
      <el-col :span="12" class="content mt10 border">
        <p class="text-center ">工单分类统计(2020-12-1)</p>
        <ve-line
          :data="gdFlChartData"
          :settings="chartSetting"
          :colors="colors"
          height="270px"
          v-if="gdsDataStatus"
        ></ve-line>
         <ve-line
         v-else
          :data="gdFlChartDatagds"
          :settings="chartSetting"
          :colors="colors"
          height="270px"
        ></ve-line>
      </el-col>
      <el-col :span="12" class="content mt10 border ">
        <p class="text-center">工单完成情况统计(2020-12-1)</p>
        <el-row>
          <el-col :span="12">
            <ve-ring
              :data="gdWcChartData"
              height="270px"
              :colors="colors"
              :settings="gdWcChartSetting"
            ></ve-ring>
          </el-col>
          <el-col :span="12">
            <ve-ring
              :data="gdPjChartData"
              height="270px"
              :colors="colors"
              :settings="gdWcChartSetting"
            ></ve-ring>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'vueName',
   computed: {
    ...mapState(['city']),
  },
  watch: {
    city(val) {
      val.length > 3 ? this.gdsDataStatus= false : this.gdsDataStatus = true
    }
  },
  data() {
    return {
      gdsDataStatus: false,
      colors: [
        '#0b3a8a',
        '#1767ac',
        '#5480bd',
        '#88a0ce',
        '#b7c5e2',
        '#e7e9f5',
      ],
      gdChartData: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '西安', 数量: 0 },
          { 日期: '咸阳', 数量: 0 },
          { 日期: '宝鸡', 数量: 0 },
          { 日期: '渭南', 数量: 0 },
          { 日期: '汉中', 数量: 0 },
          { 日期: '榆林', 数量: 0 },
        ],
      },
      gdFlChartData: {
        columns: ['日期', '类型一', '类型二', '类型三', '类型四'],
        rows: [
          { 日期: '西安', 类型一: 0, 类型二: 0, 类型三: 0, 类型四: 0 },
          { 日期: '咸阳', 类型一: 0, 类型二: 0, 类型三: 0, 类型四: 0 },
          { 日期: '宝鸡', 类型一: 0, 类型二: 0, 类型三: 0, 类型四: 0 },
          { 日期: '渭南', 类型一: 0, 类型二: 0, 类型三: 0, 类型四: 0 },
          { 日期: '汉中', 类型一: 0, 类型二: 0, 类型三: 0, 类型四: 0 },
          { 日期: '榆林', 类型一: 0, 类型二: 0, 类型三: 0, 类型四: 0 },
        ],
      },
      gdChartDatagds: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '台区1', 数量: 0 },
          { 日期: '台区2', 数量: 0 },
          { 日期: '台区3', 数量: 0 },
          { 日期: '台区4', 数量: 0 },
          { 日期: '台区5', 数量: 0 },
          { 日期: '台区6', 数量: 0 },
        ],
      },
      gdFlChartDatagds: {
        columns: ['日期', '类型一', '类型二', '类型三', '类型四'],
        rows: [
          { 日期: '台区1', 类型一: 0, 类型二: 0, 类型三: 0, 类型四: 0 },
          { 日期: '台区2', 类型一: 0, 类型二: 0, 类型三: 0, 类型四: 0 },
          { 日期: '台区3', 类型一: 0, 类型二: 0, 类型三: 0, 类型四: 0 },
          { 日期: '台区4', 类型一: 0, 类型二: 0, 类型三: 0, 类型四: 0 },
          { 日期: '台区5', 类型一: 0, 类型二: 0, 类型三: 0, 类型四: 0 },
          { 日期: '台区6', 类型一: 0, 类型二: 0, 类型三: 0, 类型四: 0 },
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

<style scoped lang="scss">
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
