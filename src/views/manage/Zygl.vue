<template>
  <div class="zygl">
    <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="zymc" label="资源名称" sortable width="180">
      </el-table-column>
      <el-table-column prop="lx" label="类型" sortable width="180">
      </el-table-column>
      <el-table-column prop="cjsj" label="创建时间"> </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button size="mini">操作</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 3,
          zymc: '用户管理',
          lx: '目录',
          cjsj: '2020-11-23',
          children: [
            {
              id: 31,
              zymc: '添加',
              lx: '按钮',
              cjsj: '2020-11-23',
            },
            {
              id: 33,
              zymc: '删除',
              lx: '按钮',
              cjsj: '2020-11-23',
            },
            {
              id: 32,
              zymc: '编辑',
              lx: '按钮',
              cjsj: '2020-11-23',
            },
          ],
        },
      ],
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
