<template>
  <div class="jsgl">
    <el-row>
      <el-col :span="4">
        <el-tree
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree"
        >
        </el-tree>
      </el-col>
      <el-col :span="20">
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
      </el-col>
    </el-row>
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
      data: [
        {
          id: 1,
          label: '陕西省',
          children: [
            {
              id: 4,
              label: '宝鸡市',
              children: [
                {
                  id: 9,
                  label: '眉县',
                },
                {
                  id: 10,
                  label: '岐山县',
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
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
