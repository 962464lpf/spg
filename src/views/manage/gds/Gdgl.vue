<template>
  <div>
    <div>
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
    <el-table :data="tableData" border stripe style="width: 100%" class="mt10">
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="time" label="时间"> </el-table-column>
      <el-table-column prop="people" label="责任人"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          time: '2016-05-02',
          name: '巡线',
          people: '王小虎',
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
