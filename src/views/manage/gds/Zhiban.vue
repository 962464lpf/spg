<template>
  <div>
    <div class="mt10">
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
    <el-form :inline="true" class="mt10">
      <el-form-item label="值班人">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="值班时间">
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
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border stripe style="width: 100%" class="mt10">
      <el-table-column prop="zbr" label="值班人" width="240"> </el-table-column>
      <el-table-column prop="ks" label="值班开始时间" width="240">
      </el-table-column>
      <el-table-column prop="js" label="值班结束时间" width="240">
      </el-table-column>

      <el-table-column label="事项">
        <template>
          <el-button type="text" @click="zbjlStatus = true"
            >设备运行情况与处理结果</el-button
          >
          <el-button type="text">遗留问题与原因</el-button>
          <el-button type="text">配备物资保管情况</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog width="50%" title="值班记录" :visible.sync="zbjlStatus">
      <el-form ref="form" label-width="120px">
        <el-form-item label="工作名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="客户名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="客户电话">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="工作记录">
          <el-input type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="zbjlStatus = false">取 消</el-button>
        <el-button type="primary" @click="zbjlStatus = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zbjlStatus: false,
      tableData: [
        {
          zbr: '王永涛',
          ks: '2020.12.30 08:00',
          js: '2020.12.30 18:00',
        },
      ],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
