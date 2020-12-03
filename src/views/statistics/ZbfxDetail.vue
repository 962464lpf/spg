<template>
  <el-dialog title=""
             :visible.sync="dialogVisible"
             width="65%"
             :before-close="handleClose">
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column prop="gds"
                       label="供电所"> </el-table-column>
      <el-table-column prop="cbzsl"
                       label="抄表准时率"> </el-table-column>
      <el-table-column prop="cbzslpm"
                       label="排名"> </el-table-column>
      <el-table-column prop="bl"
                       label="远程自动抄表比率"> </el-table-column>
      <el-table-column prop="blpm"
                       label="排名个"> </el-table-column>
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
  },
  data() {
    return {
      dialogVisible: this.value,
      tableData: [
        {
          gds: '供电所1',
          cbzsl: '100%',
          cbzslpm: 1,
          bl: '100%',
          blpm: 1,
        },
        {
          gds: '供电所2',
          cbzsl: '100%',
          cbzslpm: 1,
          bl: '100%',
          blpm: 1,
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
</style>
