<template>
  <div class="gds">
    <el-form :inline="true"
             :model="formInline"
             class="demo-form-inline">
      <el-form-item label="时间">
        <el-date-picker v-model="formInline.time"
                        type="month"
                        placeholder="选择时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="地市选择">
        <el-cascader v-model="formInline.city"
                     :options="options"
                     :props="{ expandTrigger: 'hover' }"></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit">检索</el-button>
        <el-button type="primary"
                   @click="onSubmit">导出</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData"
              border
              style="width: 100%">
      <el-table-column type="index"
                       label="序号"
                       width="50"></el-table-column>
      <el-table-column prop="yf"
                       label="月份"
                       width="50"></el-table-column>
      <el-table-column prop="city"
                       label="市公司"
                       width="80"> </el-table-column>
      <el-table-column prop="area"
                       label="县公司"
                       width="80"> </el-table-column>
      <el-table-column prop="name"
                       label="供电所"
                       width="120">
        <template slot-scope="scope">
          <span class="curp"
                @click="queryName(scope.row.name)">{{
            scope.row.name
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="start"
                       label="星级">
        
      </el-table-column>
      <el-table-column prop="jkpt"
                       align="center"
                       label="营销管理">
        <el-table-column prop="jkpt"
                         align="center"
                         label="监控平台应用率">
          <el-table-column prop="jkptdf"
                           label="得分"
                           width="50">
          </el-table-column>
          <el-table-column prop="jkptzbl"
                           width="60"
                           label="指标率">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="dfhs"
                         align="center"
                         label="电费回收率">
          <el-table-column prop="dfhsdf"
                           label="得分"
                           width="50">
          </el-table-column>
          <el-table-column prop="dfhszbl"
                           label="指标率"
                           width="60">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="cjxf"
                         align="center"
                         label="采集下发成功率">
          <el-table-column prop="cjxfdf"
                           label="得分"
                           width="50">
          </el-table-column>
          <el-table-column prop="cjxfzbl"
                           label="指标率"
                           width="60">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="jf"
                         align="center"
                         label="缴费APP占比率">
          <el-table-column prop="jfdf"
                           label="得分"
                           width="50">
          </el-table-column>
          <el-table-column prop="jfzbl"
                           label="指标率"
                           width="60">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="xs"
                         align="center"
                         label="线损率">
          <el-table-column prop="xsdf"
                           label="得分"
                           width="50">
          </el-table-column>
          <el-table-column prop="xszbl"
                           label="指标率"
                           width="60">
          </el-table-column>
        </el-table-column>
        <el-table-column prop="cjfg"
                         align="center"
                         label="采集覆盖率">
          <el-table-column prop="cjfgdf"
                           label="得分"
                           width="50">
          </el-table-column>
          <el-table-column prop="cjfgzbl"
                           label="指标率"
                           width="60">
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column prop="score"
                       label="总分"
                       width="80"> </el-table-column>
      <el-table-column prop="rank"
                       label="排名"
                       width="80"></el-table-column>
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
          children: [
            {
              value: 'fufeng',
              label: '岐山',
            },
            {
              value: 'meixian',
              label: '眉县',
            },
          ],
        },
      ],
      tableData: [
        {
          city: '宝鸡市',
          area: '岐山县',
          name: '凤鸣供电所',
          start: '二星级',
          score: '98',
          rank: '1',
          jkptzbl: '98%',
          dfhszbl: '96%',
          cjxfzbl: '96%',
          jfzbl: '97%',
          xszbl: '5%',
          cjfgzbl: '97%',
          jkptdf: 20,
          dfhsdf: 10,
          cjxfdf: 10,
          jfdf: 20,
          xsdf: 10,
          cjfgdf: 18,
          yf: '11月',
        },
        {
          city: '宝鸡市',
          area: '眉县县',
          name: '汤峪供电所',
          start: '二星级',
          score: '96',
          rank: '2',
          jkptzbl: '95%',
          dfhszbl: '96%',
          cjxfzbl: '94%',
          jfzbl: '93%',
          xszbl: '6%',
          cjfgzbl: '94%',
          jkptdf: 20,
          dfhsdf: 10,
          cjxfdf: 10,
          jfdf: 20,
          xsdf: 10,
          cjfgdf: 16,
          yf: '11月',
        },
      ],
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
