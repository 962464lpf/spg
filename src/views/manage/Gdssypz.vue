<template>
  <!-- <el-dialog
    title="供电所首页配置"
    :visible.sync="dialogVisible"
    width="65%"
    :before-close="handleClose"
  > -->
    <el-form ref="form" label-width="120px" class="mt10">
      <el-row>
        <el-col :span="12">
          <el-form-item label="所长姓名">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="供电所电话">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="值班电话">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所在地址">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="供电所介绍">
            <el-input type="textarea" :rows="4"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="供电所门头照片">
            <el-upload class="avatar-uploader" action="">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="营业厅照片">
            <el-upload class="avatar-uploader" action="">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="办公室照片">
            <el-upload class="avatar-uploader" action="">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="生活照片">
            <el-upload class="avatar-uploader" action="">
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!-- <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleClose">确 定</el-button>
    </span> -->
  <!-- </el-dialog> -->
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

<style lang="scss">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: $base-color;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
