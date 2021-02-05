<template>
  <div class="gds">
    <div class="mt10">
      <el-button type="primary" @click="jump('/zhgl/gds/zhiban')"
        >值班管理</el-button
      >
      <el-button type="primary" @click="jump('/zhgl/gds/gdgl')"
        >工单管理</el-button
      >
      <el-button type="primary" @click="jump('/zhgl/gds/gqj')"
        >工器具管理</el-button
      >
      <el-button type="primary" @click="jump('/zhgl/gds/bpbj')"
        >备品备件管理</el-button
      >
      <el-button type="primary" @click="jump('/zhgl/gds/clgl')"
        >车辆管理</el-button
      >
      <el-button type="primary" @click="jump('/zhgl/gds/tqgl')"
        >台区管理</el-button
      >
      <el-button type="primary" @click="jump('/zhgl/gds/rygl')"
        >员工管理</el-button
      >
      <el-button type="primary" @click="jump('/zhgl/gds/jxgl')"
        >绩效管理</el-button
      >
    </div>
    <el-row class="mt10">
      <el-col class="js" :span="12">
        <p class="mt10">
          党岔供电所位于*，业务覆盖*个行政村，管辖总面积*平方公里，服务总人口*万人，服务客户*万户。<br />
        </p>
        <p>
          供电所共有员工*名，其中在岗人员*人，男女比例*，其中中级工及以上*人，大专以上学历*人。<br />
        </p>
        <p>供电所现有房产*处，总面积*平方米。<br /></p>
        <p>供电所现有*辆车，出车总里程数*公里。<br /></p>
        <p>现有施工工器具*个、安全工器具*个，个人工器具*个。<br /></p>
        <p>
          党岔供电所负责运维*台综合变、总容量*千伏安，低压线路长度*米。<br />
        </p>
        <p>
          党岔供电所2020年11月对标省公司评分*分，全省第*名，环比上升*名
        </p>
        <p class="mt10">
          营业厅地址：xxxxxx
        </p>
        <p>
          值班电话：xxxxxx
        </p>
        <p>
          所长姓名：xxx
        </p>
        <p>
          所长电话：xxx
        </p>
      </el-col>
      <el-col :span="12">
        <el-tabs v-model="activeName">
          <el-tab-pane label="门头" name="first">
            <el-col :span="24">
              <div class="gdstp">
                <img src="../../assets/img/gds1.jpg" alt="" />
              </div>
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="营业厅" name="second">
            <div class="gdstp">
              <img src="../../assets/img/gds2.jpg" alt="" />
            </div>
          </el-tab-pane>
          <el-tab-pane label="生活" name="third">
            <div class="gdstp">
              <img src="../../assets/img/gds3.jpg" alt="" />
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <!-- <el-row class="mt10">
      <el-col :span="12">
        <h3 class="text-center mt10 mb10">工单列表</h3>
        <el-table :data="tableDatawork"
                  style="width: 100%"
                  border
                  @row-click='rowClick'>
          <el-table-column prop="pgsj"
                           label="派工时间"> </el-table-column>
          <el-table-column prop="pgdh"
                           label="工单号"> </el-table-column>
          <el-table-column prop="gdly"
                           label="工单来源"> </el-table-column>
          <el-table-column prop="rwmc"
                           label="任务名称"> </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12"
              style="padding-left:10px; box-sizing:border-box;">
        <h3 class="text-center mt10 mb10">今日公告</h3>
        <el-table :data="tableData"
                  style="width: 100%"
                  border>
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left"
                       label-width="80px">
                <el-form-item label="任务名称">
                  <el-input type="textarea"
                            disabled
                            :rows="2"
                            v-model="props.row.detail"></el-input>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column prop="name"
                           label="事件名称"> </el-table-column>
          <el-table-column prop="type"
                           label="事件类型"> </el-table-column>
          <el-table-column prop="time"
                           label="完成时间"> </el-table-column>
        </el-table>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      tableDatawork: [
        {
          pgsj: '2020-11-23',
          pgdh: '2020121101',
          rwmc: '换表',
          zylx: '电能计量装置的安装检查与更换',
          gzzrr: '张峰',
          gdly: '96789',
          zdr: '王永涛',
          qfr: 's',
          zt: '已接单',
          status: 2,
        },
      ],
      tableData: [
        {
          name: '收缴电费',
          type: '常态类',
          time: '2020-11-19',
          type1: false,
          detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
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
      colors: [
        '#0b3a8a',
        '#1767ac',
        '#5480bd',
        '#88a0ce',
        '#b7c5e2',
        '#e7e9f5',
      ],
      gdWcChartData: {
        columns: ['项', '访问用户'],
        rows: [
          { 项: '已完成', 访问用户: 0 },
          { 项: '未完成', 访问用户: 0 },
        ],
      },
      gdWcChartSetting: {
        radius: [60, 80],
        offsetY: 120,
      },
    }
  },
  methods: {
    jump(path) {
      this.$router.push(path)
    },
    rowClick() {
      this.$router.push('/zhgl/gds/gdgl')
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
.gds {
  .gdstp {
    padding-left: 20px;
    box-sizing: border-box;
    img {
      width: 80%;
      height: 350px;
    }
    div {
      float: right;
      width: 40%;
      img {
        width: 100%;
        height: 100px;
      }
    }
  }
  .js {
    p {
      line-height: 36px;
      text-indent: 2rem;
    }
  }

  .zhibiao {
    padding: 20px;
    line-height: 40px;
  }
  .jbqk {
    border: 1px solid #ee3;
  }
}
</style>
