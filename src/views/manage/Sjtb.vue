<template>
  <el-dialog
    title="供电所数据填报"
    :visible.sync="dialogVisible"
    width="65%"
    :before-close="handleClose"
  >
    <p style="text-align: center" class="mb10">
      请选择采集数据类型：
       <el-radio-group v-model="radio">
        <el-radio :label="1">基础数据</el-radio>
        <el-radio :label="2">交通工具</el-radio>
        <el-radio :label="3">房屋建设</el-radio>
        <el-radio :label="4">计算机配置</el-radio>
        <el-radio :label="5">首页配置</el-radio>
      </el-radio-group>
    </p>
    <el-form v-if="radio !=5" ref="form" label-width="120px" class="mt10">
      <el-form-item label="地市公司">
        <el-input disabled></el-input>
      </el-form-item>
      <el-form-item label="县公司">
        <el-input disabled></el-input>
      </el-form-item>
      <el-form-item label="供电所名称">
        <el-input disabled></el-input>
      </el-form-item>
      <el-form-item label="供电区域面积（平方公里）">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="服务高压客户数量（万户）">
        <el-input disabled></el-input>
      </el-form-item>
      <el-form-item label="服务低压客户数量（万户）">
        <el-input disabled></el-input>
      </el-form-item>
      <el-form-item label="取得荣誉">
        <el-input disabled></el-input>
      </el-form-item>
      <el-form-item label="其他">
        <el-input disabled></el-input>
      </el-form-item>
     
    </el-form>
    <Sypz v-else ></Sypz>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import Sypz from './Gdssypz'
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  components: {Sypz},
  data() {
    return {
      dialogVisible: this.value,
      radio: 1
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
