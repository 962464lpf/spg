<template>
  <div>
    <el-form :inline="true" class="mt10">
      <el-form-item label="培训名称">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="培训时间">
        <el-date-picker
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">检索</el-button>
        <el-button type="primary" @click="pxfxStatus = true"
          >培训分享</el-button
        >
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border stripe style="width: 100%" class="mt10">
      <el-table-column type="index" label="编号"> </el-table-column>
      <el-table-column label="市公司"> </el-table-column>
      <el-table-column label="县公司"> </el-table-column>
      <el-table-column label="实操培训名称"> </el-table-column>
      <el-table-column label="培训概述"> </el-table-column>
      <el-table-column label="创建时间"> </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button type="text">更多</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog width="50%" title="实操分享" :visible.sync="pxfxStatus">
      <el-form ref="form" label-width="120px">
        <el-form-item label="标题">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="实操培训概述">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="其他说明">
          <el-upload class="upload-demo">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              上传附件（支持格式：xls，xlsx，doc，docx，ppt，rar等）
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="pxfxStatus = false">取 消</el-button>
        <el-button type="primary" @click="pxfxStatus = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pxfxStatus: false,
      tableData: [{}],
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
