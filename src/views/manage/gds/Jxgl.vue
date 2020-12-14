<template>
  <div>
    <div class="mt10">
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
    <div class="mt10">
      <el-button type="primary" @click="mbdzStatus = true">模板定制</el-button>
      <el-button type="primary" @click="jxjsStatus = true">绩效计算</el-button>
      <el-button type="primary">绩效汇总</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" class="mt10">
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="dw" label="单位"> </el-table-column>
      <el-table-column prop="zw" label="职务"> </el-table-column>
      <el-table-column prop="bz" label="班组"> </el-table-column>
      <el-table-column prop="df" label="得分"> </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="primary">修改</el-button>
          <el-button type="primary">锁定</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="mbdzStatus">
      <Mbdz v-model="mbdzStatus"></Mbdz>
    </div>
    <div v-if="jxjsStatus">
      <Jxjs v-model="jxjsStatus"></Jxjs>
    </div>
  </div>
</template>

<script>
import Mbdz from './Mbdz'
import Jxjs from './Jxjs'
export default {
  components: {
    Mbdz,
    Jxjs,
  },
  data() {
    return {
      mbdzStatus: false,
      jxjsStatus: false,
      tableData: [
        {
          name: '小李',
          dw: 'xxx供电所',
          zw: '普通职员',
          bz: '一班一组',
          df: 95,
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
