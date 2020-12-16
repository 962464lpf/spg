<template>
  <el-dialog title="数据模板定制"
             :visible.sync="dialogVisible"
             width="85%"
             :before-close="handleClose">
    <el-row>
      <el-col :span="5">
        <div>
          <el-button type="primary"
                     size="mini">添加</el-button>
          <el-button type="primary"
                     size="mini">编辑</el-button>
          <el-button type="danger"
                     size="mini">删除</el-button>
        </div>
        <ul class="mt10">
          <li class="mt10">+ 基础信息</li>
          <li class="mt10">+ 交通工具</li>
          <li class="mt10">+ 房屋设施</li>
          <li class="mt10">+ 计算机配置</li>
          <li class="mt10">+ 首页配置</li>
        </ul>
      </el-col>
      <el-col :span="19">
        <div>
          <el-form :inline="true">
            <el-form-item label="字段名称">
              <el-input placeholder=""></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">检索</el-button>
              <el-button type="primary"
                         class="fr">添加</el-button>
            </el-form-item>
          </el-form>
        </div>
        <el-table :data="tableData"
                  style="width: 100%">
          <el-table-column prop="zdmc"
                           label="字段名称"> </el-table-column>
          <el-table-column prop="fz"
                           label="分组"> </el-table-column>
          <el-table-column prop="srlx"
                           label="输入类型"> </el-table-column>
          <el-table-column prop="mrz"
                           label="默认值"> </el-table-column>
          <el-table-column prop="zlx"
                           label="值类型"> </el-table-column>
          <el-table-column prop="cd"
                           label="长度"> </el-table-column>
          <el-table-column prop="sfbt"
                           label="是否必填"> </el-table-column>
          <el-table-column prop="zdmc"
                           label="显示顺序"> </el-table-column>
          <el-table-column prop="xssx"
                           label="是否启用"> </el-table-column>
          <el-table-column prop="bz"
                           label="备注"> </el-table-column>
          <el-table-column prop="cz"
                           label="操作"> </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <span slot="footer"
          class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary"
                 @click="handleClose">确 定</el-button>
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
          zdmc: '地市公司',
          fz: '',
          srlx: '引用数据',
          mrz: 'org/v2',
          zlx: '字符型',
          cd: '',
          sfbt: '是',
          sfqy: '是',
          bz: '',
          cz: '编辑   删除'
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
