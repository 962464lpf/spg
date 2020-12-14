<template>
  <div class="spm">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="时间">
        <el-date-picker
          v-model="formInline.time"
          type="month"
          placeholder="选择时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">检索</el-button>
        <el-button type="primary" @click="onSubmit">导出</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="name" label="单位名称" >
        <template slot-scope="scope">
          <span class="curp" @click="queryName(scope.row.name)">{{
            scope.row.name
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="gdssl" label="供电所数量"> </el-table-column>
      <el-table-column prop="dfhs" label="汇总得分"> </el-table-column>
      <el-table-column prop="dfhs" label="综合得分"> </el-table-column>
      <el-table-column prop="rank" label="排名" width="80"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        time: '',
      },
      tableData: [
        {
          name: '陕西省地方电力集团宝鸡供电分公司',
          
          
        },
        {
          name: '陕西省地方电力集团榆林供电分公司',
         
        },
      ],
    }
  },
  methods: {
    onSubmit() {},
    queryName(name) {},
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
.spm {
}
</style>
