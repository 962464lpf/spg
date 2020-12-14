<template>
  <div class="ygd">
    <div>
      <el-button type="primary"
                 @click="goBack">返回</el-button>
    </div>
    <el-form :inline="true"
             class="mt10">

      <el-form-item label="单号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="签发时间">
        <el-date-picker type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">检索</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData"
              border
              stripe
              style="width: 100%"
              class="mt10">
      <el-table-column prop="pgsj"
                       label="派工时间"> </el-table-column>
      <el-table-column prop="jdsj"
                       label="接单时间"> </el-table-column>
      <el-table-column prop="qfsj"
                       label="签发时间"> </el-table-column>
      <el-table-column prop="pgdh"
                       label="派工单号"> </el-table-column>
      <el-table-column prop="rwmc"
                       label="任务名称"> </el-table-column>
      <el-table-column prop="zylx"
                       label="作业类型"> </el-table-column>
      <el-table-column prop="zdr"
                       label="制单人"> </el-table-column>
      <el-table-column prop="zdr"
                       label="接单人"> </el-table-column>
      <el-table-column prop="qfr"
                       label="签发人"> </el-table-column>

      <el-table-column label="操作"
                       width="120">
        <template>
          <el-button type="text"
                     @click="lookStatus = true">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="lookStatus">
      <GdglYgd v-model="lookStatus"></GdglYgd>
    </div>
  </div>
</template>

<script>
import GdglYgd from './GdglYgd'
export default {
  components: {
    GdglYgd,
  },
  data() {
    return {
      lookStatus: false,
      tableData: [
        {
          pgsj: '2020-11-23 12:34:23',
          pgdh: '123456789',
          rwmc: '巡线',
          zylx: '检查',
          gzzrr: '王小虎',
          qfr: '小张',
          zdr: '张小虎',
          jdr: '小李',
          gdr: '小王',
          gdsj: '2020-11.23',
          jdsj: '2020-11-23 12:35:23',
          qfsj: '2020-11-23 12:38:23',
        },
        {
          pgsj: '2020-11-23 12:34:23',
          pgdh: '123456789',
          rwmc: '巡线',
          zylx: '检查',
          qfr: '小张',
          gzzrr: '王小虎',
          zdr: '张小虎',
          jdr: '小李',
          gdr: '小王',
          gdsj: '2020-11.23',
          jdsj: '2020-11-23 12:35:23',
          qfsj: '2020-11-23 12:38:23',
        },
        {
          pgsj: '2020-11-23 12:34:23',
          pgdh: '123456789',
          rwmc: '巡线',
          qfr: '小张',
          zylx: '检查',
          gzzrr: '王小虎',
          zdr: '张小虎',
          jdr: '小李',
          gdr: '小王',
          gdsj: '2020-11.23',
          jdsj: '2020-11-23 12:35:23',
          qfsj: '2020-11-23 12:38:23',
        },
        {
          pgsj: '2020-11-23 12:34:23',
          pgdh: '123456789',
          rwmc: '巡线',
          qfr: '小张',
          zylx: '检查',
          gzzrr: '王小虎',
          zdr: '张小虎',
          jdr: '小李',
          gdr: '小王',
          gdsj: '2020-11.23',
          jdsj: '2020-11-23 12:35:23',
          qfsj: '2020-11-23 12:38:23',
        },
      ],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
