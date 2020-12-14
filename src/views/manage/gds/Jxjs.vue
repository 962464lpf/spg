<template>
  <el-dialog title="绩效计算"
             :visible.sync="dialogVisible"
             width="75%"
             :before-close="handleClose">
    <el-form :inline="true">
      <el-form-item label="考核人">
        <el-select placeholder="">
          <el-option label="小李"
                     value="shanghai"></el-option>
          <el-option label="小王"
                     value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考核时间">
        <el-date-picker type="month"
                        placeholder="选择月"> </el-date-picker>
      </el-form-item>
      <el-form-item label="岗位基础分">
        <el-input></el-input>
      </el-form-item>
      <el-button type="primary">执行计算</el-button>
    </el-form>
    <el-table :data="tableData"
              style="width: 100%"
              border
              :span-method="objectSpanMethod">
      <el-table-column prop="gzlx"
                       label="工作类型">
      </el-table-column>
      <el-table-column prop="ywlx"
                       label="业务类型">
      </el-table-column>
      <el-table-column prop="gzdx"
                       label="工作大项">
      </el-table-column>
      <el-table-column prop="gzxx"
                       label="工作小项">
      </el-table-column>
      <el-table-column prop="gzsl"
                       label="工作数量">
      </el-table-column>
      <el-table-column prop="bzf"
                       label="标准分">
      </el-table-column>
      <el-table-column prop="df"
                       label="得分">
      </el-table-column>
    </el-table>
    <span slot="footer"
          class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary"
                 @click="handleClose">确定</el-button>
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
          gzlx: '计划工作',
          ywlx: '营配业务',
          gzdx: '用电检查',
          gzxx: '故障抢修',
          gzsl: '1',
          bzf: '10',
          df: '10',
        },
        
      ],
    }
  },
  methods: {
    handleClose() {
      this.$emit('input', false)
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return {
          rowspan: 3,
          colspan: 1,
        }
      } 
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
