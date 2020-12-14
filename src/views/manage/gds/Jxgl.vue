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
    <el-form :inline="true" class="mt10">
      <el-form-item label="考核人">
        <el-select placeholder="">
          <el-option label="小李"
                     value="shanghai"></el-option>
          <el-option label="小王"
                     value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考核时间">
        <el-date-picker type="month"
                        placeholder="选择月"> </el-date-picker>
      </el-form-item>
      
      <el-button type="primary">检索</el-button>
    </el-form>
    <el-table :data="tableData" style="width: 100%" class="mt10" border>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="bz" label="班组"> </el-table-column>
      <el-table-column prop="jcgwf" label="基础岗位分"> </el-table-column>
      <el-table-column prop="jhgz" label="计划工作"> </el-table-column>
      <el-table-column prop="zhgl" label="综合管理"> </el-table-column>
      <el-table-column prop="jf" label="加分"> </el-table-column>
      <el-table-column prop="zbqk" label="指标情况"> </el-table-column>
      <el-table-column prop="jf" label="减分"> </el-table-column>
      <el-table-column prop="lsgz" label="临时工作"> </el-table-column>
      <el-table-column prop="zdf" label="总得分"> </el-table-column>
      <el-table-column prop="pm" label="排名"> </el-table-column>
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
