<template>
  <div class="ygd">
    <div>
      <el-button type="primary"
                 @click="goBack">返回</el-button>
    </div>
    <el-form :inline="true"
             class="mt10">
      <el-form-item label="工作负责人">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="作业类型">
        <el-select placeholder="请选择">
          <el-option label="用电检查"
                     value="用电检查">
          </el-option>
          <el-option label="设备运维及事故处理"
                     value="2">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">检索</el-button>
        <el-button type="primary">导出</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData"
              border
              stripe
              style="width: 100%"
              class="mt10">
      <el-table-column prop="pgsj"
                       label="派工时间"> </el-table-column>
      <el-table-column prop="pgdh"
                       label="派工单号"> </el-table-column>
      <el-table-column prop="rwmc"
                       label="任务名称"> </el-table-column>
      <el-table-column prop="zylx"
                       label="作业类型"> </el-table-column>
      <el-table-column prop="zdr"
                       label="工作负责人"> </el-table-column>
      <el-table-column prop="qfr"
                       label="工作成员"> </el-table-column>
      <el-table-column prop="gdr"
                       label="归档人"> </el-table-column>
      <el-table-column prop="gdsj"
                       label="归档时间"> </el-table-column>
      <el-table-column prop=""
                       label="状态"> </el-table-column>
      <el-table-column label="操作"
                       width="120">
        <template>
          <el-button type="text"
                     @click="lookStatus = true">查看</el-button>
          <el-button type="text">重新归档</el-button>
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
          pgsj: '2020-11.23',
          jdr: '袁春田',
          gdr: '袁春田',
          gdsj: '2020-11.23',
          pgdh: '2020121101',
          rwmc: '换表',
          zylx: '电能计量装置的安装检查与更换',
          gzzrr: '张峰',
          gdly: '96789',
          zdr: '王永涛',
          qfr: '肖远辉',
          zt: '已接单',
          status: 2,
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
