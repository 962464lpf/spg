<template>
  <div class="work">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="事件名称">
        <el-input v-model="formInline.user" placeholder="事件名称"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="事件名称"> </el-table-column>
      <el-table-column prop="type" label="事件类型"> </el-table-column>
      <el-table-column prop="time" label="时间"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small" @click="duban">督办</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
      },
      tableData: [
        {
          name: '收缴电费',
          type: '常态类',
          time: '2020-11-19',
        },
        {
          name: '给小李装电表',
          type: '事件类',
          time: '2020-11-18',
        },
        {
          name: '给小李发一个通知',
          type: '临时类',
          time: '2020-11-20',
        },
      ],
    }
  },
  methods: {
    handleClick() {},
    duban() {
      this.$notify({
        title: '督办',
        message: '督办成功',
        type: 'success',
      })
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
