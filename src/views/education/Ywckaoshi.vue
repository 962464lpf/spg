<template>
  <div>
    <el-row>
      <el-button type="primary" @click="jump">返回</el-button>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="考试名称"> </el-table-column>
      <el-table-column prop="name" label="考试类型"> </el-table-column>
      <el-table-column prop="time" label="开始时间"> </el-table-column>
      <el-table-column prop="status" label="结束时间"> </el-table-column>
      <el-table-column prop="status" label="得分"> </el-table-column>
      <el-table-column label="查看考试" width="220">
        <template slot-scope="">
          <el-button type="primary" @click="ckksStatus = true">明细</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="考试详情"
      :visible.sync="ckksStatus"
      width="60%"
      :before-close="() => (ckksStatus = false)"
    >
      <el-form label-position="right" label-width="80px" :model="ksdetail">
        <el-row>
          <el-col :span="5">
            管理单位：凤鸣供电所
          </el-col>
          <el-col :span="3">
            姓名：李永涛
          </el-col>
          <el-col :span="3">
            工号：0301
          </el-col>
          <el-col :span="3">
            分数：98
          </el-col>
          <el-col :span="10">
            <el-button type="primary">试题导出</el-button>
            <el-button type="primary">错题导出</el-button>
            <el-button type="primary">返回</el-button>
          </el-col>
        </el-row>
        <el-form-item label="判断题:">
          <p class="mt10"></p>
          <p class="mt10"></p>
          <div class="mt10">
            <i
              class="el-icon-check"
              style="color: #67C23A; font-size: 24px;"
            ></i>
            <span>1. 变压器和电动机都是依靠电磁表来传递和转换能量。 （B）</span>
            <p style="text-indent: 40px;">A. 错误 B. 正确</p>
          </div>
          <div class="mt10">
            <i
              class="el-icon-close"
              style="color: #F56C6C; font-size: 24px;"
            ></i>
            <span
              >2.
              抄正底盘的中心，一般将拉线盘拉棒与基坑中心花杆底及拉线副桩对转成一条线。
              （B）</span
            >
            <p style="text-indent: 40px;">A. 错误 B. 正确</p>
          </div>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="ckksStatus = false">取 消</el-button>
        <el-button type="primary" @click="ckksStatus = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ckksStatus: false,
      ksdetail: {},
      tableData: [{}],
    }
  },
  methods: {
    jump() {
      this.$router.push('/jpgl')
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
