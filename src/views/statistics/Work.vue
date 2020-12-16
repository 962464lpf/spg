<template>
  <div class="work">
    <!-- <el-form :inline="true"
             :model="formInline"
             class="demo-form-inline">
      <el-form-item label="事件名称">
        <el-input v-model="formInline.user"
                  placeholder="事件名称"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">检索</el-button>
        <el-button type="primary"
                   @click="newWorkStatus = true">新建督办</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column prop="name"
                       label="事件名称"> </el-table-column>
      <el-table-column prop="type"
                       label="事件类型"> </el-table-column>
      <el-table-column prop="time"
                       label="完成时间"> </el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       width="180">
        <template slot-scope="scope">
          <el-button @click="newWorkStatus = true"
                     type="primary"
                     size="small">查看</el-button>
          <el-button type="primary"
                     size="small"
                     @click="duban(scope.row)">督办</el-button>
        </template>
      </el-table-column>
    </el-table> -->
    <el-row>
      <el-col :span="6">
        <div>
          <h4 class="text-center">本月督办处理情况</h4>
          <ve-histogram :colors="colors"
                        :extend="extend"
                        height="250px"
                        :data="ChartData1"
                        :legend-visible="false"></ve-histogram>
        </div>
        <div class="mt10">
          <h4 class="text-center">本月督办处理率</h4>
          <ve-gauge :data="chartData2"
                    height="270px"
                    :settings="chartSettings"></ve-gauge>
        </div>
      </el-col>
      <el-col :span="18">
        <h4 class="text-center">督办</h4>
        <el-tabs v-model="activeName">
          <el-tab-pane label="督办列表"
                       name="first">
            <el-form ref="form"
                     inline
                     label-width="100px">
              <el-form-item label="督办生成时间">
                <el-date-picker type="datetimerange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"> 检索</el-button>
              </el-form-item>
              <el-table style="width: 100%"
                        :data="tableData1">
                <el-table-column type="index"
                                 label="序号"> </el-table-column>
                <!-- <el-table-column type="selection"
                                 width="55"
                                 label=""> </el-table-column> -->
                <el-table-column prop='dbbh'
                                 label="督办编号"> </el-table-column>
                <el-table-column prop='dbnr'
                                 label="督办内容"> </el-table-column>
                <el-table-column prop='dbfssj'
                                 label="督办生成时间"> </el-table-column>
                <el-table-column prop='sztq'
                                 label="所在台区"> </el-table-column>
                <el-table-column prop='zrr'
                                 label="责任人"> </el-table-column>
                <el-table-column prop='dblx'
                                 label="督办类型"> </el-table-column>
                <el-table-column prop='dbbh'
                                 label="操作">
                  <template slot-scope="scope">
                    <el-button type="primary"
                               @click="jump"
                               v-if="!scope.row.status">督办处理</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-form>

          </el-tab-pane>
          <el-tab-pane label="已完成督办工单"
                       name="second">
            <el-form inline>
              <el-form-item label="督办生成时间">
                <el-date-picker type="datetimerange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"> 检索</el-button>
              </el-form-item>
              <el-table style="width: 100%">
                <el-table-column type="index"
                                 label="序号"> </el-table-column>
                <!-- <el-table-column type="selection"
                                 width="55"></el-table-column> -->
                <el-table-column label="督办编号"> </el-table-column>
                <el-table-column label="督办内容"> </el-table-column>
                <el-table-column label="督办生成时间"> </el-table-column>
                <el-table-column label="所在台区"> </el-table-column>
                <el-table-column label="责任人"> </el-table-column>
                <el-table-column label="督办类型"> </el-table-column>
              </el-table>
            </el-form>
          </el-tab-pane>

        </el-tabs>
      </el-col>
    </el-row>
    <div v-if="newWorkStatus">
      <NewWork v-model="newWorkStatus"></NewWork>
    </div>
    <div v-if="chooseGdsStatus">
      <ChooseGds v-model="chooseGdsStatus"></ChooseGds>
    </div>
  </div>
</template>

<script>
import NewWork from './NewWork'
import ChooseGds from './ChooseGds'
export default {
  components: { NewWork, ChooseGds },
  data() {
    this.chartSettings = {
      offsetY: 0,
      dataType: {
        处理率: 'percent',
      },
      seriesMap: {
        处理率: {
          min: 0,
          max: 1,
           axisLine: {
              lineStyle: {
                color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                width: 3,
                shadowColor: '#fff',
                shadowBlur: 10
              }
            },
          splitLine: {
            //分割线-> 刻度线
            length: 15, //数字距离刻度线的位置
            lineStyle: {
              width: 3,
              color: '#fff', //刻度线颜色
              shadowColor: '#fff', //刻度阴影
              shadowBlur: 10, //模糊阴影大小 配合shadowColor,shadowOffsetX, shadowOffsetY设置使用
            },
          },
        },
      },
    }
    return {
      activeName: 'first',
      colors: [
        '#0b3a8a',
        '#1767ac',
        '#5480bd',
        '#88a0ce',
        '#b7c5e2',
        '#e7e9f5',
      ],
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
      ChartData1: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '未处理数', 数量: 39 },
          { 日期: '已处理数', 数量: 20 },
          { 日期: '督办总数', 数量: 59 },
        ],
      },
      chartData2: {
        columns: ['type', 'value'],
        rows: [{ type: '处理率', value: 0.8 }],
      },

      newWorkStatus: false,
      chooseGdsStatus: false,
      formInline: {
        user: '',
      },
      tableData: [
        {
          name: '收缴电费',
          type: '常态类',
          time: '2020-11-19',
          type1: false,
        },
        {
          name: '给小李装电表',
          type: '事件类',
          time: '2020-11-18',
          type1: true,
        },
        {
          name: '给小李发一个通知',
          type: '临时类',
          time: '2020-11-20',
          type1: true,
        },
      ],
      tableData1: [
        {
          dbbh: '2020112003',
          dbnr: '电费回收率85%，未达标',
          fbfdsj: '2020-11-20',
          dbfssj: '2020-11-20',
          dwmc: 'xxx',
          sztq: '',
          zrr: '',
          dbjb: '',
          dblx: '对标督办',
        },
        {
          dbbh: '2020112004',
          dbnr: '采集不成功，清单',
          fbfdsj: '2020-11-20',
          dbfssj: '2020-11-20',
          dwmc: 'xxx',
          sztq: '台区1',
          zrr: '王永涛',
          dbjb: '',
          dblx: '指标督办',
        },
        {
          dbbh: '2020112005',
          dbnr: '96789工单预警',
          fbfdsj: '2020-11-20',
          dbfssj: '2020-11-20',
          dwmc: 'xxx',
          sztq: '台区2',
          zrr: '王永涛',
          dbjb: '',
          dblx: '超期提醒',
          status: true,
        },
      ],
    }
  },
  methods: {
    handleClick() {},
    duban(row) {
      if (!row.type1) {
        this.$notify({
          title: '督办',
          message: '督办成功',
          type: 'success',
        })
      } else {
        this.chooseGdsStatus = true
      }
    },
    jump() {
      this.$router.push('/zhgl/gds/gdgl')
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
