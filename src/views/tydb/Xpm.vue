<template>
  <div class="xpm">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="时间">
        <el-date-picker
          v-model="formInline.time"
          type="month"
          placeholder="选择时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="地市选择">
        <el-cascader
          v-model="formInline.city"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
        ></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">检索</el-button>
        <el-button type="primary" @click="onSubmit">导出</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="city" label="市公司"> </el-table-column>
      <el-table-column prop="name" label="县公司" >
        <template slot-scope="scope">
          <span class="curp" @click="queryName(scope.row.name)">{{
            scope.row.name
          }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="jkpt" label="监控平台应用率"> </el-table-column>
      <el-table-column prop="dfhs" label="电费回收率"> </el-table-column>
      <el-table-column prop="cjxf" label="采集下发成功率"> </el-table-column>
      <el-table-column prop="jf" label="缴费APP占比率"> </el-table-column>
      <el-table-column prop="xs" label="线损率"> </el-table-column>
      <el-table-column prop="cjfg" label="采集覆盖率"> </el-table-column> -->
      <el-table-column prop="score" label="总分" width="80"> </el-table-column>
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
        city: '',
      },
      options: [
        {
          label: '宝鸡',
          value: 'baoji',
        },
        {
          label: '渭南',
          value: 'weinan',
        },
      ],
      tableData: [
        {
          city: '宝鸡',
          name: '陕西省地方电力集团眉县供电分公司',
          score: '98',
          rank: '1',
          jkpt: '98%',
          dfhs: '96%',
          cjxf: '96%',
          jf: '97%',
          xs: '95%',
          cjfg: '97%',
        },
        {
          city: '宝鸡',
          name: '陕西省地方电力集团岐山县供电分公司',
          score: '96',
          rank: '2',
          jkpt: '95%',
          dfhs: '96%',
          cjxf: '94%',
          jf: '93%',
          xs: '96%',
          cjfg: '94%',
        },
      ],
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
