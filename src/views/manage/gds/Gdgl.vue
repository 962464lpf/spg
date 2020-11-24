<template>
  <div>
    <div>
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
    <div class="fl clearfloat mt10">
      <el-button type="primary" @click="jump">已归档</el-button>
    </div>
    <div class="mt10 fr clearfloat">
      <el-button type="success" @click="zdStatus = true">制单</el-button>
      <el-button type="success">签发</el-button>
      <el-button type="success">结单</el-button>
      <el-button type="success">归档</el-button>
      <el-button type="success">派工下发</el-button>
    </div>
    <div class="clearfloat"></div>
    <el-table :data="tableData" border stripe style="width: 100%" class="mt10"
      ><el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="pgsj" label="派工时间"> </el-table-column>
      <el-table-column prop="pgdh" label="派工单号"> </el-table-column>
      <el-table-column prop="gdly" label="工单来源"> </el-table-column>
      <el-table-column prop="rwmc" label="任务名称"> </el-table-column>
      <el-table-column prop="zylx" label="作业类型"> </el-table-column>
      <el-table-column prop="gzzrr" label="工作负责人"> </el-table-column>
      <el-table-column prop="zdr" label="制单人"> </el-table-column>
      <el-table-column prop="zt" label="状态"> </el-table-column>
      <el-table-column label="操作" width="180">
        <template>
          <el-button type="text">制单</el-button>
          <el-button type="text">查看</el-button>
          <el-button type="text">修改</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="zdStatus">
      <Zd v-model="zdStatus"></Zd>
    </div>
  </div>
</template>

<script>
import Zd from './Zd'
export default {
  components: {
    Zd,
  },
  data() {
    return {
      zdStatus: false,
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
          zt: '未制单',
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
          zt: '已签发',
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
          zt: '已派工',
        },
        {
          pgsj: '2020-11-23',
          pgdh: '123456789',
          rwmc: '巡线',
          zylx: '检查',
          gdly: '',
          gzzrr: '王小虎',
          zdr: '张小虎',
          qfr: 's',
          zt: '已结单',
        },
      ],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    jump() {
      this.$router.push('/zhgl/gds/ygd')
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
