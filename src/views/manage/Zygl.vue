<template>
  <div class="zygl">
    <!-- <el-table
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
          <el-button type="primary" size="mini">操作</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table> -->
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
      <el-table
      :data="tableData1"
      style="width: 100%;margin-bottom: 20px;"
      border
    >
      <el-table-column type='index' label="序号" sortable width="50">
      </el-table-column>
      <el-table-column prop="mc" label="名称">
      </el-table-column>
     <el-table-column prop="bm" label="编码">
      </el-table-column>
      <el-table-column prop="z" label="值">
      </el-table-column>
      <el-table-column prop="flbm" label="分类编码">
      </el-table-column>
      <el-table-column prop="fl" label="分类">
      </el-table-column>
      <el-table-column label="操作" width="280">
        <template>
          <el-button type="primary" size="mini">查看</el-button>
          <el-button size="mini" type="primary">修改</el-button>
          <el-button size="mini" type="primary">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    </el-form>
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
      tableData1: [
        {
          mc: '所长',
          bm: 'POST_SZ',
          z: '',
          flbm: 'POST',
          fl: '岗位'
        }
      ]
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
