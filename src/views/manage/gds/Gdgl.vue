<template>
  <div>
    <div>
      <el-button type="primary"
                 @click="goBack">返回</el-button>
    </div>
    <div>
      <el-form :inline="true"
               class="mt10">

        <el-form-item label="工单状态">
          <el-select v-model="gdstatus"
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <div class="fl clearfloat mt10">
      <el-button type="primary"
                 @click="jump('yjied')">已接单</el-button>
      <el-button type="primary"
                 @click="jump('yqf')">已签发</el-button>
      <el-button type="primary"
                 @click="jump('yjd')">已结单</el-button>
      <el-button type="primary"
                 @click="jump('ygd')">已归档</el-button>
    </div> -->
    <div class="mt10 fl clearfloat">
      <el-button type="primary"
                 @click="zdStatus = true">制单</el-button>
      <el-button type="primary"
                 @click="qf">签发</el-button>
      <el-button type="primary"
                 @click="jdStatus = true">结单</el-button>
      <el-button type="primary"
                 @click="gdStatus = true">归档</el-button>
    </div>
    <div class="clearfloat"></div>
    <el-table :data="tableData"
              border
              stripe
              style="width: 100%"
              class="mt10">
      <el-table-column type="selection"
                       width="55"> </el-table-column>
      <el-table-column prop="pgsj"
                       label="派工时间"> </el-table-column>
      <el-table-column prop="pgdh"
                       label="派工单号"> </el-table-column>
      <el-table-column prop="gdly"
                       label="工单来源"> </el-table-column>
      <el-table-column prop="rwmc"
                       label="任务名称"> </el-table-column>
      <el-table-column prop="zylx"
                       label="作业类型"> </el-table-column>
      <el-table-column prop="gzzrr"
                       label="工作负责人"> </el-table-column>
      <el-table-column prop="zdr"
                       label="制单人"> </el-table-column>
      <el-table-column prop="zt"
                       label="状态" width="400">
        <template slot-scope="scope">
          <el-steps 
                    :active="scope.row.status"
                    finish-status="success">
            <el-step title="已接单"></el-step>
            <el-step title="未签发"></el-step>
            <el-step title="已签发"></el-step>
            <el-step title="未结单"></el-step>
            <el-step title="已结单"></el-step>
            <el-step title="未归档"></el-step>
            <el-step title="已归档"></el-step>
          </el-steps>
        </template>
      </el-table-column>
      <el-table-column label="操作"
                       width="90">
        <template>
          
          <el-button type="text"
                     @click="lookStatus = true">查看</el-button>
          <!-- <el-button type="primary">修改</el-button> -->
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="zdStatus">
      <GdTemplate v-model="zdStatus"></GdTemplate>
    </div>
    <div v-if="jdStatus">
      <GdTemplate v-model="jdStatus"
                  :values="values"></GdTemplate>
    </div>
    <div v-if="gdStatus">
      <GuiDang v-model="gdStatus"></GuiDang>
    </div>
    <div v-if="lookStatus">
      <GdglCk v-model="lookStatus"></GdglCk>
    </div>
  </div>
</template>

<script>
import GdTemplate from './GdTemplate'
import GuiDang from './GuiDang'
import GdglCk from './GdglCk'
export default {
  components: {
    GdTemplate,
    GuiDang,
    GdglCk,
  },
  data() {
    return {
      zdStatus: false,
      gdStatus: false,
      jdStatus: false,
      lookStatus: false,
      gdstatus: '全部状态',
      options: [
        {
          value: '全部状态',
          label: '全部状态',
        },
        {
          value: '已接单',
          label: '已接单',
        },
        {
          value: '未签发',
          label: '未签发',
        },
        {
          value: '已签发',
          label: '已签发',
        },
        {
          value: '未结单',
          label: '未结单',
        },
        {
          value: '已结单',
          label: '已结单',
        },
        {
          value: '未归档',
          label: '未归档',
        },
      ],
      tableData: [
        {
          pgsj: '2020-11-23',
          pgdh: '123456789',
          rwmc: '巡线',
          zylx: '检查',
          gzzrr: '王小虎',
          gdly: '96789',
          zdr: '张小虎',
          qfr: 's',
          zt: '已接单',
          status: 1,
        },
        {
          pgsj: '2020-11-23',
          pgdh: '123456789',
          rwmc: '巡线',
          zylx: '检查',
          gdly: '移动端推送',
          gzzrr: '王小虎',
          zdr: '张小虎',
          qfr: 's',
          zt: '未签发',
          status: 2,
        },
        {
          pgsj: '2020-11-23',
          pgdh: '123456789',
          rwmc: '巡线',
          gdly: '日常计划',
          zylx: '检查',
          gzzrr: '王小虎',
          zdr: '张小虎',
          qfr: 's',
          zt: '签发',
          status: 3,
        },
        {
          pgsj: '2020-11-23',
          pgdh: '123456789',
          rwmc: '巡线',
          gdly: '日常计划',
          zylx: '检查',
          gzzrr: '王小虎',
          zdr: '张小虎',
          qfr: 's',
          zt: '未结单',
          status: 4,
        },
        {
          pgsj: '2020-11-23',
          pgdh: '123456789',
          rwmc: '巡线',
          gdly: '日常计划',
          zylx: '检查',
          gzzrr: '王小虎',
          zdr: '张小虎',
          qfr: 's',
          zt: '已结单',
          status: 5,
        },
        {
          pgsj: '2020-11-23',
          pgdh: '123456789',
          rwmc: '巡线',
          gdly: '日常计划',
          zylx: '检查',
          gzzrr: '王小虎',
          zdr: '张小虎',
          qfr: 's',
          zt: '未归档',
          status: 6,
        },
        {
          pgsj: '2020-11-23',
          pgdh: '123456789',
          rwmc: '巡线',
          gdly: '日常计划',
          zylx: '检查',
          gzzrr: '王小虎',
          zdr: '张小虎',
          qfr: 's',
          status: 7,
          zt: '已归档',
        },
      ],
      values: {
        name: '客户表后无电',
        content:
          '杨山综合变得铜川市耀州区杨山村经济合作社户名：12345，表后无电，现场处理，开展志愿者服务。',
        zxTime: '2020-11-13',
        jhTime: '',
        type: ['业扩报装'],
        cfd: '铜川',
        mdd: '铜川市耀州区杨山村',
        cph: 'shanghai',
        gzfzr: '张军',
        gzcy: '李军',
        qtr: '王军',
        resource: '是',
        gzph: '123456',
        zysx: '',
        gqj: '',
        bpbj: '',
        qfr: '王鹏',
        qfsj: '2020-11.22 14:34:45',
        bclc: '123Km',
        bcyh: '10升',
        ghcl: true,
      },
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    jump(path) {
      //  yjied yqf yjd ygd
      this.$router.push('/zhgl/gds/' + path)
    },
    qf() {
      this.$message({
        type: 'success',
        message: '签发成功',
      })
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
