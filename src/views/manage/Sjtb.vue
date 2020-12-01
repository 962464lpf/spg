<template>
  <el-dialog
    title="供电所数据填报"
    :visible.sync="dialogVisible"
    width="65%"
    :before-close="handleClose"
  >
    <p style="text-align: center" class="mb10">
      请选择采集数据类型：
      <el-radio-group>
        <el-radio :label="3">基础数据</el-radio>
        <el-radio :label="6">交通工具</el-radio>
        <el-radio :label="9">房屋建设</el-radio>
        <el-radio :label="9">计算机配置</el-radio>
        <el-radio :label="9">供电所照片</el-radio>
      </el-radio-group>
    </p>
    <el-form ref="form" label-width="120px" class="mt10">
      <el-form-item label="地市公司">
        <el-input disabled></el-input>
      </el-form-item>
      <el-form-item label="县公司">
        <el-input disabled></el-input>
      </el-form-item>
      <el-form-item label="供电所名称">
        <el-input disabled></el-input>
      </el-form-item>
      <el-form-item label="供电所详细地址">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="供电所值班电话">
        <el-input disabled></el-input>
      </el-form-item>
      <el-form-item label="本所人数">
        <el-input disabled></el-input>
      </el-form-item>
      <el-form-item label="本所男人数">
        <el-input disabled></el-input>
      </el-form-item>
      <el-form-item label="本所女人数">
        <el-input disabled></el-input>
      </el-form-item>
      <el-form-item label="营配业务人数">
        <el-input disabled></el-input>
      </el-form-item>
    </el-form>
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

<style lang="scss"></style>
