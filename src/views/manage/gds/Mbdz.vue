<template>
  <el-dialog
    title="绩效模板定制"
    :visible.sync="dialogVisible"
    width="65%"
    :before-close="handleClose"
  >
    <el-button type="primary">考核项</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="gzkhx" label="工作考核项">
        <template slot-scope="scope">
          <span>{{ scope.row.gzkhx }}</span>
          <span class="fr">
            <el-button type="text">添加</el-button>
            <el-button type="text">修改</el-button>
            <el-button type="text">删除</el-button>
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="gzlx" label="工作类型"> </el-table-column>
      <el-table-column prop="khbz" label="考核班组"> </el-table-column>
      <el-table-column prop="address" label="标准分">
        <template>
          <el-input></el-input>
        </template>
      </el-table-column>
    </el-table>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogVisible: this.value,
      tableData: [
        {
          gzkhx: '安全用电',
          gzlx: '计划工作',
          khbz: '综合办',
        },
      ],
    }
  },
  methods: {
    handleClose() {
      this.$emit('input', false)
    },
  },
  mounted() {},
}
</script>

<style lang="scss">
.checkbox-group {
  .el-checkbox {
    width: 80px;
  }
}
</style>
