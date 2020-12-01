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
          gzkhx: '工单完成情况',
          khbz: '综合班营配班',
          children: [
            {
              id: 31,
              gzkhx: '工单完成20%',
              khbz: '综合班营配班',
              select: '',
            },
            {
              id: 32,
              gzkhx: '工单完成50%',
              khbz: '综合班营配班',
              select: '',
            },
            {
              id: 33,
              gzkhx: '工单完成70%',
              khbz: '综合班营配班',
              select: '',
            },
          ],
        },
        {
          id: 4,
          gzkhx: '综合事务',
          khbz: '综合班营配班',
          select: '',
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
