<template>
  <div>
    <div class="mt10">
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
    <el-form :inline="true" class="mt10">
      <el-form-item label="姓名">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">检索</el-button>
      </el-form-item>
    </el-form>
    <!-- <div class="fl clearfloat ">
      <el-button type="primary">出入记录</el-button>
    </div> -->
    <div class="fr">
      <el-button type="primary">批量导入</el-button>
      <el-button type="primary">导出</el-button>
    </div>
    <div class="clearfloat"></div>
    <el-table :data="tableData" border stripe style="width: 100%" class="mt10">
      <el-table-column prop="dlm" label="登录名"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="xb" label="性别"> </el-table-column>
      <el-table-column prop="xl" label="学历"> </el-table-column>
      <el-table-column prop="sfzg" label="是否在岗"> </el-table-column>
      <el-table-column prop="zc" label="职称"> </el-table-column>
      <el-table-column prop="zz" label="组织"> </el-table-column>
      <el-table-column prop="bz" label="班组"> </el-table-column>

      <el-table-column label="操作" width="240">
        <template>
          <el-button type="primary">查看</el-button>
          <el-button type="primary">编辑</el-button>
          <el-button @click="dialogVisible = true" type="primary"
            >分配角色</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="分配角色"
      :visible.sync="dialogVisible"
      width="45%"
      :before-close="handleClose"
    >
      <el-table
        ref="multipleTable"
        :data="tableData1"
        tooltip-effect="dark"
        style="width: 100%"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="角色名称" prop="jsmc"> </el-table-column>
        <el-table-column prop="jsms" label="角色描述" width="120">
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: '小王',
          age: '26',
          xb: '男',
          xl: '大专',
          sfzg: '是',
          zc: '普通职员',
          dlm: '020202',
          zz: 'xx供电所',
          bz: '营配班',
        },
      ],
      dialogVisible: false,
      tableData1: [
        {
          jsmc: '所长',
        },
        {
          jsmc: '综合班长',
        },
        {
          jsmc: '营配班长',
        },
        {
          jsmc: '台区经理',
        },
        {
          jsmc: '库管员',
        },
        {
          jsmc: '综合柜员',
        },
      ],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    handleClose() {
      this.dialogVisible = false
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
