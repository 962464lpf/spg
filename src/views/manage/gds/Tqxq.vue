<template>
  <el-dialog
    title="台区详情"
    :visible.sync="dialogVisible"
    width="65%"
    :before-close="handleClose"
  >
    <!-- <div>
      <el-form :inline="true">
        <el-form-item label="手机号">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">检索</el-button>
          <el-button type="primary" class="fr">添加</el-button>
        </el-form-item>
      </el-form>
    </div> -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="yhbh" label="用户编号"> </el-table-column>
      <el-table-column prop="yhmc" label="用户名称"> </el-table-column>
      <el-table-column prop="bxbh" label="表箱编号"> </el-table-column>
      <el-table-column prop="bxwz" label="表箱位置"> </el-table-column>
      <el-table-column prop="sjh" label="手机号"> </el-table-column>
      <el-table-column prop="pb" label="配变"> </el-table-column>

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
          yhbh: '12345',
          yhmc: '王小虎',
          bxbh: '78946',
          bxwz: 'xxx',
          sjh: '13587952654',
          pb: 'xx配变'
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
