<template>
  <div class="work">
    <el-form :inline="true"
             :model="formInline"
             class="demo-form-inline">
      <el-form-item label="事件名称">
        <el-input v-model="formInline.user"
                  placeholder="事件名称"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button type="primary"
                   @click="newWorkStatus = true">新建督办</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData"
              style="width: 100%">
      <el-table-column prop="name"
                       label="事件名称"> </el-table-column>
      <el-table-column prop="type"
                       label="事件类型"> </el-table-column>
      <el-table-column prop="time"
                       label="完成时间"> </el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       width="100">
        <template slot-scope="scope">
          <el-button @click="newWorkStatus = true"
                     type="text"
                     size="small">查看</el-button>
          <el-button type="text"
                     size="small"
                     @click="duban(scope.row)">督办</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="newWorkStatus">
      <NewWork v-model="newWorkStatus"></NewWork>
    </div>
    <div v-if="chooseGdsStatus">
      <ChooseGds v-model="chooseGdsStatus"></ChooseGds>
    </div>
  </div>
</template>

<script>
import NewWork from './NewWork'
import ChooseGds from './ChooseGds'
export default {
  components: { NewWork, ChooseGds },
  data() {
    return {
      newWorkStatus: false,
      chooseGdsStatus: false,
      formInline: {
        user: '',
      },
      tableData: [
        {
          name: '收缴电费',
          type: '常态类',
          time: '2020-11-19',
          type1: false,
        },
        {
          name: '给小李装电表',
          type: '事件类',
          time: '2020-11-18',
          type1: true,
        },
        {
          name: '给小李发一个通知',
          type: '临时类',
          time: '2020-11-20',
          type1: true,
        },
      ],
    }
  },
  methods: {
    handleClick() {},
    duban(row) {
      if (!row.type1) {
        this.$notify({
          title: '督办',
          message: '督办成功',
          type: 'success',
        })
      } else {
        this.chooseGdsStatus = true
      }
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
