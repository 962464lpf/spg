<template>
  <el-dialog
    title="制单"
    :visible.sync="dialogVisible"
    width="65%"
    :before-close="handleClose"
  >
    <el-form ref="form" label-width="120px">
      <el-form-item label="任务名称">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="任务内容">
        <el-input type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="执行时间">
        <el-date-picker type="datetime" placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="计划完成时间">
        <el-date-picker type="datetime" placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="工作类型">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="业扩报装" name="type"></el-checkbox>
          <el-checkbox label="安全检查" name="type"></el-checkbox>
          <el-checkbox label="线路巡视" name="type"></el-checkbox>
          <el-checkbox label="活动推广" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="出发地">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="目的地">
        <el-select>
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="车牌号">
        <el-select>
          <el-option label="陕A123456" value="shanghai"></el-option>
          <el-option label="陕A123456" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作负责人">
        <el-select>
          <el-option label="小二" value="shanghai"></el-option>
          <el-option label="小三" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="工作成员">
        <el-select>
          <el-option label="小二" value="shanghai"></el-option>
          <el-option label="小三" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="其他人">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="两票一单">
        <el-radio-group v-model="form.resource">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="工作票号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="注意事项">
        <el-input type="textarea"></el-input>
        <el-button>选择</el-button>
      </el-form-item>
      <el-form-item label="工器具">
        <el-input type="textarea"></el-input>
        <el-button>选择</el-button>
      </el-form-item>
      <el-form-item label="备品备件">
        <el-input type="textarea"></el-input>
        <el-button>选择</el-button>
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
      form: {
        type: '',
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
.checkbox-group {
  .el-checkbox {
    width: 80px;
  }
}
</style>
