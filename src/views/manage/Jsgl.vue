<template>
  <div class="jsgl">
    <el-row>
      <!-- <el-col :span="4">
        <el-tree
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree"
        >
        </el-tree>
      </el-col> -->
      <!-- <el-col :span="24">
        <div class="ml10">
          <el-button type="primary">新增</el-button>
          <el-button type="primary">分配权限</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="zhm" label="账户名" width="120">
          </el-table-column
          ><el-table-column prop="xm" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="jsmc" label="角色名称" width="120">
          </el-table-column>

          <el-table-column prop="ssbm" label="所属部门"> </el-table-column>
          <el-table-column prop="zt" label="状态"> </el-table-column>
          <el-table-column prop="cjsj" label="创建时间"> </el-table-column>
          <el-table-column prop="gxsj" label="更新时间"> </el-table-column>
          <el-table-column label="操作" width="180">
            <template>
              <el-button type="primary" size="small">编辑</el-button>
              <el-button type="danger" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col> -->
    </el-row>

    <el-form :inline="true">
      <el-form-item label="名称">
        <el-input placeholder=""></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">检索</el-button>
      </el-form-item>
      <el-form-item class="fr">
        <el-button type="primary">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData1"
              style="width: 100%;margin-bottom: 20px;"
              border>
      <el-table-column type='index'
                       label="序号"
                       sortable
                       width="50">
      </el-table-column>
      <el-table-column prop="mc"
                       label="角色名称">
      </el-table-column>
      <el-table-column label="操作"
                       width="280">
        <template>
          <el-button type="primary"
                     size="mini">分配权限</el-button>
          <el-button size="mini"
                     type="primary">修改</el-button>
          <el-button size="mini"
                     type="primary">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    },
  },
  data() {
    return {
      tableData: [
        {
          zhm: '123456',
          xm: '张小虎',
          jsmc: '管理员',
          bs: 'admin',
          ssbm: '技术部',
          zt: '正常',
          cjsj: '2020-11-23',
          gxsj: '2020-11-24',
        },
      ],
      tableData1: [
        {
          mc: '综合柜员',
        },
        {
          mc: '营配班长',
        },
        {
          mc: '综合管理员（内置角色）',
        },
        {
          mc: '综合班长',
        },
        {
          mc: '所长',
        },
        {
          mc: '台区经理',
        },
        {
          mc: '库管员',
        },
      ],
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
