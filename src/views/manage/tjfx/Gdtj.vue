<template>
  <div class="gdtj">
    <el-row>
      <el-col :span="12"
              class="content border">
        <p class="text-center">工单总体情况统计(2020-12-1)</p>
        <p>
          统计维度：
          <el-button style="background:  #0b3a8a; color: white;">月</el-button>
          <el-button type="primary">日</el-button>
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
        <p class="text-center"> {{gdsDataStatus ? '工单按台区展示(2020-12-1)' : '工单按地区展示(2020-12-1)'}}</p>
        <ve-line :data="gdChartData"
                 :settings="{offsetY: 0, yAxisName: ['单位：个'],}"
                 :colors="colors"
                 height="270px"
                 :toolbox="toolbox"
                 v-if="!gdsDataStatus"></ve-line>
        <ve-line v-else
                 :data="gdChartDatagds"
                 :settings="{offsetY: 0, yAxisName: ['单位：个'],}"
                 :colors="colors"
                 height="270px"></ve-line>
      </el-col>
      <el-col :span="12"
              class="content mt10 border">
        <p class="text-center ">工单分类统计(2020-12-1)</p>
        <ve-line :data="gdFlChartData"
                 :settings="{offsetY: 0, yAxisName: ['单位：个'],}"
                 :colors="colors"
                 height="270px"
                 v-if="!gdsDataStatus"></ve-line>
        <ve-line v-else
                 :data="gdFlChartDatagds"
                 :settings="{offsetY: 0, yAxisName: ['单位：个'],}"
                 :colors="colors"
                 height="270px"></ve-line>
      </el-col>
      <el-col :span="12"
              class="content mt10 border ">
        <p class="text-center">工单完成情况统计(2020-12-1)</p>
        <el-row>
          <el-col :span="12">
            <ve-ring :data="gdWcChartData"
                     height="270px"
                     :colors="colors"
                     :settings="gdWcChartSetting"></ve-ring>
          </el-col>
          <el-col :span="12">
            <ve-ring :data="gdPjChartData"
                     height="270px"
                     :colors="colors"
                     :settings="gdWcChartSetting"></ve-ring>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!-- <el-dialog title=""
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
    </el-dialog> -->
  </div>
</template>

<script>
import 'echarts/lib/component/toolbox'
import { mapState } from 'vuex'
export default {
  name: 'vueName',
  computed: {
    ...mapState(['city']),
  },
  watch: {
    city(val) {
      val.length > 3
        ? (this.gdsDataStatus = true)
        : (this.gdsDataStatus = false)
    },
  },
  data() {
    this.toolbox = {
      feature: {
        magicType: { type: ['line', 'bar'] },
        saveAsImage: {},
      },
    }
    return {
      dialogVisible: false,
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
          { 日期: '西安', 数量: 15 },
          { 日期: '咸阳', 数量: 10 },
          { 日期: '宝鸡', 数量: 16 },
          { 日期: '渭南', 数量: 12 },
          { 日期: '汉中', 数量: 24 },
          { 日期: '榆林', 数量: 17 },
        ],
      },
      gdFlChartData: {
        columns: ['日期', '用电检查', '客户服务', '计量管理', '故障处置'],
        rows: [
          {
            日期: '西安',
            用电检查: 12,
            客户服务: 23,
            计量管理: 15,
            故障处置: 23,
          },
          {
            日期: '咸阳',
            用电检查: 11,
            客户服务: 21,
            计量管理: 13,
            故障处置: 21,
          },
          {
            日期: '宝鸡',
            用电检查: 8,
            客户服务: 19,
            计量管理: 12,
            故障处置: 18,
          },
          {
            日期: '渭南',
            用电检查: 5,
            客户服务: 16,
            计量管理: 13,
            故障处置: 15,
          },
          {
            日期: '汉中',
            用电检查: 4,
            客户服务: 13,
            计量管理: 12,
            故障处置: 12,
          },
          { 日期: '榆林', 用电检查: 3, 客户服务: 8, 计量管理: 11, 故障处置: 9 },
        ],
      },
      gdChartDatagds: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '台区1', 数量: 15 },
          { 日期: '台区2', 数量: 10 },
          { 日期: '台区3', 数量: 16 },
          { 日期: '台区4', 数量: 12 },
          { 日期: '台区5', 数量: 24 },
        ],
      },
      gdFlChartDatagds: {
        columns: ['日期', '用电检查', '客户服务', '计量管理', '故障处置'],
        rows: [
          {
            日期: '台区1',
            用电检查: 12,
            客户服务: 23,
            计量管理: 15,
            故障处置: 23,
          },
          {
            日期: '台区2',
            用电检查: 11,
            客户服务: 21,
            计量管理: 13,
            故障处置: 21,
          },
          {
            日期: '台区3',
            用电检查: 8,
            客户服务: 19,
            计量管理: 12,
            故障处置: 18,
          },
          {
            日期: '台区4',
            用电检查: 5,
            客户服务: 16,
            计量管理: 13,
            故障处置: 15,
          },
          {
            日期: '台区5',
            用电检查: 4,
            客户服务: 13,
            计量管理: 12,
            故障处置: 12,
          },
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
          { 项: '已结单', 访问用户: 85 },
          { 项: '未结单', 访问用户: 15 },
        ],
      },
      gdPjChartData: {
        columns: ['项', '访问用户'],
        rows: [
          { 项: '已归档', 访问用户: 2 },
          { 项: '未归档', 访问用户: 2 },
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
