<template>
  <div class="zbfx">
    <el-row class="mt10">
      <!-- <el-col :span="4">
        <el-tree
          class="filter-tree"
          :data="data"
          :colors="colors"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree"
        >
        </el-tree>
      </el-col> -->
      <el-col :span="24">
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="营销服务" name="first">
            <div class="item" v-if="activeName === 'first'">
              <h3>业扩报装</h3>
              <el-row>
                <el-col :span="12">
                  <ul>
                    <li>
                      <div>
                        <p>当前低压在途流程数</p>
                        <p>99</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p>超过7天总数</p>
                        <p>99</p>
                      </div>
                    </li>
                  </ul>

                  <p class="text-center mt10 mb10">当月发起流程图统计分析</p>
                  <ve-histogram
                    :data="ykChartData1"
                    height="250px"
                    :colors="colors"
                    :settings="chartSetting"
                    :toolbox="toolbox"
                  ></ve-histogram>
                </el-col>
                <el-col :span="12">
                  <p class="text-center mt10 mb10">当月在途流程统计</p>
                  <ve-ring
                    :data="ykringChartData"
                    height="300px"
                    :colors="colors"
                    :settings="chartSetting"
                  ></ve-ring>
                </el-col>
                <el-col :span="12" class="mt10 border-top">
                  <ul>
                    <li>
                      <div>
                        <p>时限达标率</p>
                        <p>99%</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p>时限达标数</p>
                        <p>99</p>
                      </div>
                    </li>
                  </ul>
                  <p class="text-center mt10 mb10">业扩报装时限统计分析</p>
                  <ve-histogram
                    :data="ykChartData2"
                    height="250px"
                    :colors="colors"
                    :settings="chartSetting"
                    :toolbox="toolbox"
                  ></ve-histogram>
                </el-col>
                <el-col :span="12">
                  <p class="text-center mt10 mb10">
                    业扩报装时限达标率月曲线图
                  </p>
                  <ve-line
                    :data="ykChartData3"
                    height="250px"
                    :colors="colors"
                    :settings="chartSetting1"
                    :toolbox="toolbox"
                  ></ve-line>
                </el-col>
              </el-row>
            </div>
            <div class="item" v-if="activeName === 'first'">
              <h3>电费回收</h3>
              <el-row>
                <el-col :span="8">
                  <ul>
                    <li>
                      <div>
                        <p>电费回收率</p>
                        <p>99%</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p>欠费金额</p>
                        <p>2</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p>欠费笔数</p>
                        <p>2</p>
                      </div>
                    </li>
                  </ul>
                  <p class="text-center mt10 mb10">电费回收情况统计</p>
                  <ve-line
                    :data="dfChartData1"
                    height="250px"
                    :colors="colors"
                    :settings="{ area: true, yAxisName: ['单位：万元'] }"
                    :toolbox="toolbox"
                  ></ve-line>
                </el-col>
                <el-col :span="8">
                  <ul style="height: 32px">
                    <li>
                      <p></p>
                      <div>
                        <p></p>
                        <p></p>
                      </div>
                    </li>
                  </ul>
                  <p class="text-center mt10 mb10">电费回收情况统计</p>
                  <ve-histogram
                    :data="dfChartData2"
                    :colors="colors"
                    height="250px"
                    :toolbox="toolbox"
                  ></ve-histogram>
                </el-col>
                <el-col :span="8">
                  <ul style="height: 32px">
                    <li>
                      <p></p>
                      <div>
                        <p></p>
                        <p></p>
                      </div>
                    </li>
                  </ul>
                  <p class="text-center mt10 mb10">欠费情况统计</p>
                  <ve-histogram
                    :data="dfChartData3"
                    :colors="colors"
                    height="250px"
                    :toolbox="toolbox"
                  ></ve-histogram>
                </el-col>
              </el-row>
            </div>
            <div class="item" v-if="activeName === 'first'">
              <h3>台区线损率</h3>
              <el-row>
                <el-col :span="24">
                  <ve-histogram
                    :data="tqChartData"
                    :colors="colors"
                    height="250px"
                    :settings="{ yAxisType: ['percent'] }"
                    :toolbox="toolbox"
                  ></ve-histogram>
                </el-col>
              </el-row>
            </div>
            <div class="item" v-if="activeName === 'first'">
              <h3>96789</h3>
              <ul>
                <li>
                  <div>
                    <p>抢修工单数</p>
                    <p>99</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>每万户报修率</p>
                    <p>9%</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>累计平均修复时间</p>
                    <p>90min</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>单日完成工单数</p>
                    <p>9</p>
                  </div>
                </li>
                <li>
                  <div>
                    <p>96789工单同比</p>
                    <p>9</p>
                  </div>
                </li>
              </ul>
              <el-row>
                <el-col :span="8">
                  <p class="text-center mt10 mb10">抢修工单数</p>
                  <ve-histogram
                    :data="jlChartData1"
                    :colors="colors"
                    height="250px"
                    :toolbox="toolbox"
                  ></ve-histogram>
                </el-col>
                <el-col :span="8">
                  <p class="text-center mt10 mb10">
                    96789故障报装到达现场及时率
                  </p>
                  <ve-histogram
                    :data="jlChartData2"
                    :colors="colors"
                    height="250px"
                    :settings="{ area: true, yAxisType: ['percent'] }"
                    :toolbox="toolbox"
                  ></ve-histogram>
                </el-col>
                <el-col :span="8">
                  <p class="text-center mt10 mb10">故障报修率</p>
                  <ve-histogram
                    :data="jlChartData3"
                    :colors="colors"
                    height="250px"
                    :settings="{ area: true, yAxisType: ['percent'] }"
                    :toolbox="toolbox"
                  ></ve-histogram>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane label="设备运行" name="second">
            <div class="item" v-if="activeName === 'second'">
              <h3>公变运行</h3>
              <el-row>
                <el-col :span="12">
                  <ul>
                    <li>
                      <div>
                        <p>公变采集成功率(昨日)</p>
                        <p>99%</p>
                      </div>
                    </li>

                    <li>
                      <div>
                        <p>采集不成功清单</p>
                        <p>9</p>
                      </div>
                    </li>
                  </ul>
                  <p class="text-center mt10 mb10">公变采集</p>
                  <ve-histogram
                    :data="gbChartData"
                    :colors="colors"
                    height="250px"
                    :settings="{ yAxisType: ['percent'] }"
                    :toolbox="toolbox"
                  ></ve-histogram>
                </el-col>
                <el-col :span="12">
                  <ul>
                    <li>
                      <div>
                        <p>公变低电压率(昨日)</p>
                        <p>99%</p>
                      </div>
                    </li>

                    <li>
                      <div>
                        <p>公变低电压清单</p>
                        <p>9</p>
                      </div>
                    </li>
                  </ul>
                  <p class="text-center mt10 mb10">公变低电压</p>
                  <ve-histogram
                    :data="gbChartData1"
                    :colors="colors"
                    height="250px"
                    :settings="{ yAxisType: ['percent'] }"
                    :toolbox="toolbox"
                  ></ve-histogram>
                </el-col>
                <el-col :span="8">
                  <ul>
                    <li>
                      <div>
                        <p>公变超载率(昨日)</p>
                        <p>99%</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p>公变超载率清单</p>
                        <p>99</p>
                      </div>
                    </li>
                  </ul>
                  <p class="text-center mt10 mb10">公变超载率</p>
                  <ve-histogram
                    :data="gbChartData"
                    :colors="colors"
                    height="250px"
                    :legend-visible="false"
                    :settings="{ yAxisType: ['percent'] }"
                    :toolbox="toolbox"
                  ></ve-histogram>
                </el-col>
                <el-col :span="8">
                  <ul>
                    <li>
                      <div>
                        <p>公变过载率(昨日)</p>
                        <p>99%</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p>公变过载率清单</p>
                        <p>99</p>
                      </div>
                    </li>
                  </ul>
                  <p class="text-center mt10 mb10">公变过载率</p>
                  <ve-histogram
                    :data="gbChartData"
                    :colors="colors"
                    height="250px"
                    :legend-visible="false"
                    :settings="{ yAxisType: ['percent'] }"
                    :toolbox="toolbox"
                  ></ve-histogram>
                </el-col>
                <el-col :span="8">
                  <ul>
                    <li>
                      <div>
                        <p>公变重载率(昨日)</p>
                        <p>99%</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p>公变重载率清单</p>
                        <p>99</p>
                      </div>
                    </li>
                  </ul>
                  <p class="text-center mt10 mb10">公变重载率</p>
                  <ve-histogram
                    :data="gbChartData"
                    :colors="colors"
                    height="250px"
                    :legend-visible="false"
                    :settings="{ yAxisType: ['percent'] }"
                    :toolbox="toolbox"
                  ></ve-histogram>
                </el-col>
              </el-row>
            </div>
            <div class="item mt10" v-if="activeName === 'third'">
              <h3>用电采集</h3>
              <el-row>
                <el-col :span="8">
                  <ul>
                    <li>
                      <div>
                        <p>低电压安装覆盖率</p>
                        <p>99%</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p>低电压未安装清单</p>
                        <p>9</p>
                      </div>
                    </li>
                  </ul>

                  <p class="text-center mt10 mb10">低压安装覆盖率</p>
                  <ve-histogram
                    :data="gbChartData"
                    :colors="colors"
                    height="250px"
                    :legend-visible="false"
                    :settings="{ yAxisType: ['percent'] }"
                  ></ve-histogram>
                </el-col>
                <el-col :span="8">
                  <ul>
                    <li>
                      <div>
                        <p>低电压采集率</p>
                        <p>99%</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p>低电压采集不成功装清单</p>
                        <p>9</p>
                      </div>
                    </li>
                  </ul>

                  <p class="text-center mt10 mb10">低压采集成功率</p>
                  <ve-histogram
                    :data="gbChartData"
                    :colors="colors"
                    height="250px"
                    :legend-visible="false"
                    :settings="{ yAxisType: ['percent'] }"
                  ></ve-histogram>
                </el-col>
                <el-col :span="8">
                  <ul>
                    <li>
                      <div>
                        <p>低压计量异常处理率</p>
                        <p>99%</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <p>低压计量异常处理清单</p>
                        <p>9</p>
                      </div>
                    </li>
                  </ul>

                  <p class="text-center mt10 mb10">低压计量异常处理率</p>
                  <ve-histogram
                    :data="gbChartData"
                    :colors="colors"
                    height="250px"
                    :legend-visible="false"
                    :settings="{ yAxisType: ['percent'] }"
                  ></ve-histogram>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane label="综合管理" name="third">
            <el-row v-if="activeName === 'third'" style="height:100%">
              <el-col :span="24" class="item item3" style="height:100%">
                <h3>设备（网架）情况</h3>
                <el-row class="sbwj" style="height:100%">
                  <el-col :span="16" style="height:100%">
                    <el-row style="height:100%">
                      <el-col :span="8" class="col-1" style="height:100%">
                        <h4 class="ml10 mt10">线路</h4>
                        <ul>
                          <li class="curp">
                            <div>
                              <p>10kv线路条数</p>
                              <p>99</p>
                            </div>
                          </li>
                          <li class="curp">
                            <div>
                              <p>10kv线路总长度</p>
                              <p>99km</p>
                            </div>
                          </li>
                          <li class="curp">
                            <div>
                              <p>10kv线路架空线路长度</p>
                              <p>99</p>
                            </div>
                          </li>
                          <li class="curp">
                            <div>
                              <p>10kv线缆长度</p>
                              <p>99</p>
                            </div>
                          </li>
                          <li class="curp">
                            <div>
                              <p>低压线路条数</p>
                              <p>99</p>
                            </div>
                          </li>
                          <li class="curp">
                            <div>
                              <p>低压线路长度</p>
                              <p>99</p>
                            </div>
                          </li>
                          <li class="curp">
                            <div>
                              <p>10kv杆塔数量</p>
                              <p>99</p>
                            </div>
                          </li>
                          <li class="curp">
                            <div>
                              <p>0.4kv杆塔数量</p>
                              <p>99</p>
                            </div>
                          </li>
                        </ul>
                      </el-col>
                      <el-col :span="8" class="col-2" style="height:100%">
                        <h4 class="ml10 mt10">配变</h4>
                        <ul>
                          <li>
                            <div>
                              <p>公变台数</p>
                              <p>99</p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>公变容量</p>
                              <p>99</p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>专变台数</p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>专变容量</p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>低压无功补偿台数</p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>户均容量</p>
                            </div>
                          </li>
                        </ul>
                      </el-col>
                      <el-col :span="8" class="col-3" style="height:100%">
                        <h4 class="ml10 mt10">终端</h4>
                        <ul>
                          <li>
                            <div>
                              <p>公变终端台数</p>
                              <p>99</p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>专变终端台数</p>
                              <p>99</p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>智能总保台数</p>
                              <p>99</p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>集中器台数</p>
                              <p>99</p>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>智能电表台数</p>
                              <p>99</p>
                            </div>
                          </li>
                        </ul>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="8">
                    <ve-gauge
                      :data="wjchartData"
                      height="250px"
                      :settings="wjchartSettings"
                    ></ve-gauge>
                  </el-col>
                </el-row>
              </el-col>
              <el-col class="item mt10" :span="24">
                <h3>客户情况</h3>
                <el-row>
                  <el-col :span="16">
                    <ul>
                      <li>
                        <p><i class="el-icon-s-tools"></i></p>
                        <div>
                          <p>重要客户</p>
                          <p>99</p>
                        </div>
                      </li>
                      <li>
                        <p><i class="el-icon-warning"></i></p>
                        <div>
                          <p>一般客户</p>
                          <p>99</p>
                        </div>
                      </li>
                      <li>
                        <p><i class="el-icon-plus"></i></p>
                        <div>
                          <p>低压用户</p>
                          <p>99</p>
                        </div>
                      </li>
                      <li>
                        <p><i class="el-icon-upload"></i></p>
                        <div>
                          <p>居民</p>
                          <p>99</p>
                        </div>
                      </li>
                      <li>
                        <p><i class="el-icon-s-fold"></i></p>
                        <div>
                          <p>非居民</p>
                          <p>99</p>
                        </div>
                      </li>
                    </ul>
                  </el-col>
                  <el-col :span="8">
                    <ve-ring
                      :data="ringChartData"
                      height="300px"
                      :colors="colors"
                      :settings="chartSetting"
                    ></ve-ring>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <div v-if="detailStatus">
      <zbfxDeatil v-model="detailStatus"></zbfxDeatil>
    </div>
  </div>
</template>

<script>
import zbfxDeatil from './ZbfxDetail'
export default {
  components: {
    zbfxDeatil,
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
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
      detailStatus: false,
      activeName: 'first',
      colors: [
        '#0b3a8a',
        '#1767ac',
        '#5480bd',
        '#88a0ce',
        '#b7c5e2',
        '#e7e9f5',
      ],
      wjchartData: {
        columns: ['type', 'value'],
        rows: [{ type: 'speed', value: 2 }],
      },
      wjchartSettings: {
        labelMap: {
          speed: '平均供电半径',
        },
        dataName: {
          speed: 'km',
        },
        seriesMap: {
          speed: {
            radius: '100%',
          },
          offsetY: 80,
        },
      },
      defaultProps: {
        children: 'children',
        label: 'label',
      },
      chartData: {
        columns: ['日期', '员工人数', '生产车辆'],
        rows: [
          { 日期: '供电所1', 员工人数: 139, 生产车辆: 24 },
          { 日期: '供电所2', 员工人数: 129, 生产车辆: 14 },
          { 日期: '供电所3', 员工人数: 119, 生产车辆: 34 },
          { 日期: '供电所4', 员工人数: 99, 生产车辆: 16 },
        ],
      },
      ringChartData: {
        columns: ['日期', '员工人数', '生产车辆'],
        rows: [
          { 日期: '低压居民', 员工人数: 139, 生产车辆: 24 },
          { 日期: '低压非居民', 员工人数: 129, 生产车辆: 14 },
        ],
      },
      ykChartData1: {
        columns: ['日期', '流程数', '超7天数'],
        rows: [
          { 日期: '在途数', 流程数: 139, 超7天数: 24 },
          { 日期: '新增', 流程数: 129, 超7天数: 14 },
          { 日期: '装容', 流程数: 129, 超7天数: 14 },
          { 日期: '改压', 流程数: 129, 超7天数: 14 },
          { 日期: '改类', 流程数: 129, 超7天数: 14 },
          { 日期: '迁址', 流程数: 129, 超7天数: 14 },
        ],
      },
      ykringChartData: {
        columns: ['日期', '流程数', '超7天数'],
        rows: [
          { 日期: '流程数', 流程数: 139, 超7天数: 24 },
          { 日期: '超7天数', 流程数: 129, 超7天数: 14 },
        ],
      },
      ykChartData2: {
        columns: ['日期', '应抄数', '实抄数', '未抄数'],
        rows: [
          { 日期: '1月', 应抄数: 100, 实抄数: 180, 未抄数: 20 },
          { 日期: '2月', 应抄数: 200, 实抄数: 120, 未抄数: 80 },
          { 日期: '3月', 应抄数: 300, 实抄数: 240, 未抄数: 60 },
        ],
      },
      ykChartData3: {
        columns: ['日期', '达标率'],
        rows: [
          { 日期: '1月', 达标率: '0.89', 实抄数: 180, 未抄数: 20 },
          { 日期: '2月', 达标率: '0.84', 实抄数: 120, 未抄数: 80 },
          { 日期: '3月', 达标率: '0.76', 实抄数: 240, 未抄数: 60 },
        ],
      },
      chartSetting: {
        offsetY: 150,
        stack: { 日期: ['流程数', '超7天数'] },
      },
      chartSetting1: {
        area: true,
        yAxisType: ['percent'],
      },
      dfChartData1: {
        columns: ['日期', '应抄数', '实抄数', '未抄数'],
        rows: [
          { 日期: '1月', 应抄数: 100, 实抄数: 180, 未抄数: 20 },
          { 日期: '2月', 应抄数: 200, 实抄数: 120, 未抄数: 80 },
          { 日期: '3月', 应抄数: 300, 实抄数: 240, 未抄数: 60 },
        ],
      },
      dfChartData2: {
        columns: ['日期', '应抄数', '实抄数', '未抄数'],
        rows: [
          { 日期: '1月', 应抄数: 100, 实抄数: 180, 未抄数: 20 },
          { 日期: '2月', 应抄数: 200, 实抄数: 120, 未抄数: 80 },
          { 日期: '3月', 应抄数: 300, 实抄数: 240, 未抄数: 60 },
        ],
      },
      dfChartData3: {
        columns: ['日期', '应抄数'],
        rows: [
          { 日期: '流程总数', 应抄数: 100, 实抄数: 180, 未抄数: 20 },
          { 日期: '时限达标数', 应抄数: 200, 实抄数: 120, 未抄数: 80 },
          { 日期: '时限未达标数', 应抄数: 300, 实抄数: 240, 未抄数: 60 },
        ],
      },
      tqChartData: {
        columns: ['日期', '0.4kv线损率', '台区线损率'],
        rows: [
          { 日期: '一台区', '0.4kv线损率': 0.21, 台区线损率: 0.18, 未抄数: 20 },
          { 日期: '二台区', '0.4kv线损率': 0.17, 台区线损率: 0.12, 未抄数: 80 },
          { 日期: '三台区', '0.4kv线损率': 0.25, 台区线损率: 0.12, 未抄数: 60 },
          {
            日期: '四台区',
            '0.4kv线损率': 0.14,
            台区线损率: 0.124,
            未抄数: 60,
          },
          { 日期: '五台区', '0.4kv线损率': 0.1, 台区线损率: 0.112, 未抄数: 60 },
        ],
      },
      jlChartData1: {
        columns: ['日期', '数量'],
        rows: [
          { 日期: '1日', 数量: 21, 台区线损率: 0.18, 未抄数: 20 },
          { 日期: '2日', 数量: 14, 台区线损率: 0.12, 未抄数: 80 },
          { 日期: '3日', 数量: 32, 台区线损率: 0.12, 未抄数: 60 },
          { 日期: '4日', 数量: 23 },
          { 日期: '5日', 数量: 5, 台区线损率: 0.112, 未抄数: 60 },
        ],
      },
      jlChartData2: {
        columns: ['日期', '及时率'],
        rows: [
          { 日期: '1日', 及时率: 0.91, 台区线损率: 0.18, 未抄数: 20 },
          { 日期: '2日', 及时率: 0.97, 台区线损率: 0.12, 未抄数: 80 },
          { 日期: '3日', 及时率: 0.95, 台区线损率: 0.12, 未抄数: 60 },
          { 日期: '4日', 及时率: 0.94 },
          { 日期: '5日', 及时率: 0.91, 台区线损率: 0.112, 未抄数: 60 },
        ],
      },
      jlChartData3: {
        columns: ['日期', '报修率'],
        rows: [
          { 日期: '1日', 报修率: 0.21, 台区线损率: 0.18, 未抄数: 20 },
          { 日期: '2日', 报修率: 0.17, 台区线损率: 0.12, 未抄数: 80 },
          { 日期: '3日', 报修率: 0.25, 台区线损率: 0.12, 未抄数: 60 },
          { 日期: '4日', 报修率: 0.14 },
          { 日期: '5日', 报修率: 0.1, 台区线损率: 0.112, 未抄数: 60 },
        ],
      },
      gbChartData: {
        columns: ['日期', '公变采集成功率'],
        rows: [
          { 日期: '1日', 公变采集成功率: 0.91, 台区线损率: 0.18, 未抄数: 20 },
          { 日期: '2日', 公变采集成功率: 0.97, 台区线损率: 0.12, 未抄数: 80 },
          { 日期: '3日', 公变采集成功率: 0.95, 台区线损率: 0.12, 未抄数: 60 },
          { 日期: '4日', 公变采集成功率: 0.94 },
          { 日期: '5日', 公变采集成功率: 0.9, 台区线损率: 0.112, 未抄数: 60 },
        ],
      },
      gbChartData1: {
        columns: ['日期', '公变低电压率'],
        rows: [
          { 日期: '1日', 公变低电压率: 0.21, 台区线损率: 0.18, 未抄数: 20 },
          { 日期: '2日', 公变低电压率: 0.17, 台区线损率: 0.12, 未抄数: 80 },
          { 日期: '3日', 公变低电压率: 0.25, 台区线损率: 0.12, 未抄数: 60 },
          { 日期: '4日', 公变低电压率: 0.14 },
          { 日期: '5日', 公变低电压率: 0.1, 台区线损率: 0.112, 未抄数: 60 },
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
  .item {
    border: 1px solid #eee;
    ul {
      display: flex;
      margin-top: 10px;
      justify-content: space-around;
      li {
        margin-right: 10px;
        display: flex;
        align-items: center;
        font-size: 12px;
        i {
          font-size: 24px;
          margin-right: 8px;
          color: #00254c;
        }
      }
    }
  }
  .item3 {
    padding-bottom: 20px;
    ul {
      flex-wrap: wrap;
      justify-content: left;
      height: 300px;

      li {
        padding: 0 10px;
        box-sizing: border-box;
        width: 45%;
        margin-top: 20px;
        text-align: center;
        p {
          margin-top: 8px;
          text-align: center;
        }
      }
    }
  }
  .border-top {
    border-top: 1px solid#eee;
  }
  .border-bottom {
    border-bottom: 1px solid#eee;
  }
  h4 {
    color: $shallow-base-color;
    text-align: center;
  }
  .col-1 {
    //  background: #eee;
  }
  .col-2 {
    // background: #08c0ea;
    // color: white;
    border-left: 1px dashed #08c0ea;
    border-right: 1px dashed #08c0ea;
  }
  .col-3 {
    //  background: #eee;
  }
}
</style>
