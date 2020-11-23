<template>
  <div class="gds">
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
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="onSubmit">导出</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="city" label="市公司" width="80"> </el-table-column>
      <el-table-column prop="area" label="县公司" width="80"> </el-table-column>
      <el-table-column prop="name" label="供电所" width="120">
        <template slot-scope="scope">
          <span class="curp" @click="queryName(scope.row.name)">{{
            scope.row.name
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="start" label="星级"> </el-table-column>
      <el-table-column prop="jkpt" label="监控平台应用率"> </el-table-column>
      <el-table-column prop="dfhs" label="电费回收率"> </el-table-column>
      <el-table-column prop="cjxf" label="采集下发成功率"> </el-table-column>
      <el-table-column prop="jf" label="缴费APP占比率"> </el-table-column>
      <el-table-column prop="xs" label="线损率"> </el-table-column>
      <el-table-column prop="cjfg" label="采集覆盖率"> </el-table-column>
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
          label: '西安',
          value: 'xian',
          children: [
            {
              value: 'yanta',
              label: '雁塔区',
            },
            {
              value: '长安',
              label: '长安区',
            },
            {
              value: 'beilin',
              label: '碑林区',
            },
          ],
        },
        {
          label: '咸阳',
          value: 'xiyang',
          children: [
            {
              value: 'liquan',
              label: '礼泉县',
            },
            {
              value: 'qianxian',
              label: '乾县',
            },
          ],
        },
        {
          label: '宝鸡',
          value: 'baoji',
          children: [
            {
              value: 'fufeng',
              label: '扶风县',
            },
            {
              value: 'meixian',
              label: '眉县',
            },
          ],
        },
        {
          label: '渭南',
          value: 'weinan',
          children: [
            {
              value: 'dali',
              label: '大荔县',
            },
            {
              value: '蒲城',
              label: '蒲城县',
            },
          ],
        },
      ],
      tableData: [
        {
          city: '西安市',
          area: '雁塔区',
          name: '丈八北路供电所',
          start: '二星级',
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
          city: '西安市',
          area: '雁塔区',
          start: '二星级',
          name: '鱼化寨供电所',
          score: '96',
          rank: '2',
          jkpt: '95%',
          dfhs: '96%',
          cjxf: '94%',
          jf: '93%',
          xs: '96%',
          cjfg: '94%',
        },
        {
          city: '西安市',
          area: '雁塔区',
          start: '三星级',
          name: '高新供电所',
          score: '95',
          rank: '3',
          jkpt: '93%',
          dfhs: '92%',
          cjxf: '94%',
          jf: '92%',
          xs: '91%',
          cjfg: '94%',
        },
        {
          city: '西安市',
          area: '雁塔区',
          name: '城西供电所',
          start: '四星级',
          score: '93',
          rank: '4',
          jkpt: '92%',
          dfhs: '92%',
          cjxf: '91%',
          jf: '93%',
          xs: '94%',
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
