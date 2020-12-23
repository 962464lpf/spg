<template>
  <div class="question-bank">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="题库名称">
        <el-input v-model="formInline.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button type="primary">新建题库</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="编号" width="50"> </el-table-column>
      <el-table-column prop="name" label="题库名称">
        <template slot-scope="scope">
          <b class="curp" style="color: #0b3a8a;" @click="jump">{{
            scope.row.name
          }}</b>
        </template>
      </el-table-column>
      <el-table-column prop="tkgs" label="题库概述"> </el-table-column>
      <el-table-column prop="time" label="创建时间"> </el-table-column>
      <el-table-column prop="zz" label="组织"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="">
          <el-button type="primary">编辑</el-button>
          <el-button type="primary">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {},
      tableData: [
        {
          name: '农电配电营业工中级考试题库',
          tkgs: '中级考试题库',
          time: '2020.12.1',
          zz: '凤鸣供电所',
        },
      ],
    }
  },
  methods: {
    jump() {
      this.$router.push('/tkgl/detail')
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
