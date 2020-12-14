<template>
  <el-dialog title="归档"
             :visible.sync="dialogVisible"
             width="65%"
             :before-close="handleClose">
    <el-table :data="tableData"
              style="width: 100%;margin-bottom: 20px;"
              row-key="id"
              border
              default-expand-all
              :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column prop="gzkhx"
                       label="工作考核项"
                       sortable>
      </el-table-column>
      <el-table-column prop="khbz"
                       label="考核班组"
                       sortable>
      </el-table-column>

      <el-table-column label="">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.select"></el-checkbox>
        </template>
      </el-table-column>
    </el-table>
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
    values: {},
  },
  data() {
    return {
      dialogVisible: this.value,
      tableData: [
        {
          id: 3,
          gzkhx: '用电信息采集装置运行检查',
          khbz: '营配班',
          children: [
            {
              id: 31,
              gzkhx: '常见故障排查及处理',
              khbz: '营配班',
              select: '',
            },
            {
              id: 32,
              gzkhx: '现场设备调试',
              khbz: '营配班',
              select: '',
            },
          ],
        },
        {
          id: 4,
          gzkhx: '线损管理',
          khbz: '营配班',
          children: [
            {
              id: 41,
              gzkhx: '量价费排查',
              khbz: '营配班',
              select: '',
            },
          ],
        },
        {
          id: 5,
          gzkhx: '用电检查',
          khbz: '营配班',
          children: [
            {
              id: 51,
              gzkhx: '故障抢修',
              khbz: '营配班',
              select: '',
            },
            {
              id: 52,
              gzkhx: '违约用电和窃电查处',
              khbz: '营配班',
              select: '',
            },
          ],
        },
        {
          id: 6,
          gzkhx: '配电设备运行维护及事故处理',
          khbz: '营配班',
        },
        {
          id: 7,
          gzkhx: '安全用电',
          khbz: '营配班',
        },
        {
          id: 8,
          gzkhx: '新型业务',
          khbz: '营配班',
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
