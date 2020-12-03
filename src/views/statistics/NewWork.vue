<template>
  <el-dialog title="新建工作督办"
             :visible.sync="dialogVisible"
             width="65%"
             :before-close="handleClose">

    <el-form ref="form"
             label-width="120px"
             class="mt10">
      <el-row>
        <el-col :span="12">
          <el-form-item label="事件名称">
            <el-input></el-input>
          </el-form-item>
        </el-col>
         <el-col :span="12">
          <el-form-item label="完成时间">
            <el-date-picker type="datetime"
                            v-model="form.time"
                            placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="事件类型">
            <el-radio-group v-model="form.type">
              <el-radio :label="3">常态类</el-radio>
              <el-radio :label="6">临时类</el-radio>
              <el-radio :label="9">事件类</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
       
        <el-col :span="24">
          <el-form-item label="任务内容">
            <el-input type="textarea"
                      :rows='4'></el-input>
          </el-form-item>
        </el-col>

      </el-row>

    </el-form>
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
      form: {
        type: [],
      },
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
