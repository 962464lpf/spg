<template>
  <el-dialog title="选择供电所"
             :visible.sync="dialogVisible"
             width="65%"
             :before-close="handleClose">
    <el-row>
      <!-- <el-col :span="4">
        <el-tree class="filter-tree"
                 :data="data"
                 :props="defaultProps"
                 default-expand-all
                 ref="tree">
        </el-tree>
      </el-col> -->
      <el-col :span="24">
        <el-table ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%">
          <el-table-column type="selection"
                           width="55">
          </el-table-column>
          <el-table-column prop="gdsmc"
                           label="供电所名称">
          </el-table-column>
          <el-table-column prop="gdssz"
                           label="供电所所长">
          </el-table-column>
          <el-table-column prop="gdsrs"
                           label="供电所人数">
          </el-table-column>
          <el-table-column prop="gdswz"
                           label="供电所位置">
          </el-table-column>
        </el-table>
      </el-col>

    </el-row>
    <span slot="footer"
          class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary"
                 @click="submit">确 定</el-button>
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
      form: {
        type: [],
      },
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
      tableData: [
        {
          gdsmc: '凤鸣供电所',
          gdssz: '王小二',
          gdsrs: 24,
          gdswz: 'xxxxx',
        },
      ],
    }
  },
  methods: {
    handleClose() {
      this.$emit('input', false)
    },
    submit() {
      this.$notify({
        title: '督办',
        message: '督办成功',
        type: 'success',
      })
      this.handleClose()
    },
  },
  mounted() {},
}
</script>

<style lang="scss">
</style>
