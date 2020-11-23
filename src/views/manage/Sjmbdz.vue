<template>
  <el-dialog
    title="数据模板定制"
    :visible.sync="dialogVisible"
    width="65%"
    :before-close="handleClose"
  >
    <el-row>
      <el-col :span="6">
        <div>
          <el-button type="primary" size="mini">添加</el-button>
          <el-button type="primary" size="mini">编辑</el-button>
          <el-button type="primary" size="mini">删除</el-button>
        </div>
        <ul class="mt10">
          <li class="mt10">+ 基础信息</li>
          <li class="mt10">+ 交通工具</li>
          <li class="mt10">+ 房屋设施</li>
          <li class="mt10">+ 计算机配置</li>
        </ul>
      </el-col>
      <el-col :span="18">
        <div>
          <el-form :inline="true">
            <el-form-item label="字段名称">
              <el-input placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
              <el-button type="primary" class="fr">添加</el-button>
            </el-form-item>
          </el-form>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="zdmc" label="字段名称"> </el-table-column>
          <el-table-column prop="sfbt" label="是否必填"> </el-table-column>
          <el-table-column prop="bz" label="备注"> </el-table-column>
          <el-table-column prop="cjsj" label="创建时间"> </el-table-column>
          <el-table-column prop="cjr" label="创建人"> </el-table-column>
        </el-table>
      </el-col>
    </el-row>

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
          zdmc: '所长名称',
          sfbt: '是',
          bz: '供电所所长名称',
          cjsj: '2020-11-23',
          cjr: '张小虎',
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
